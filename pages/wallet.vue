<template>
  <div class="wallet">
    <div class="currency-selector">
      <Polkadot class="currency-logo" @click="openAssetsInfo" />
      <Paseo class="currency-logo" />
      <USDC class="currency-logo" @click="openAssetsInfo" />
    </div>

    <div class="balance">
      <div
        v-if="
              isFetchingIncogniteeBalance &&
              accountStore.getShortAddress != 'none'
            "
        class="spinner"
      />
      <div v-else>{{ accountStore.getIncogniteeHumanBalance }}</div>
    </div>

    <div class="buttons">
      <NuxtLink to="/receive" class="btn btn_gradient">receive</NuxtLink>
      <NuxtLink to="/send" class="btn btn_gradient">send</NuxtLink>
    </div>

    <div class="privacy-separator">
      <p>private</p>
      <hr>
      <p>naked</p>
    </div>

    <div class="buttons">
      <UButton class="btn btn_gradient" @click="do_shield">
        shield
      </UButton>
      <UButton class="btn btn_gradient" @click="do_unshield">
        unshield
      </UButton>
    </div>

    <div class="balance-naked">
      <div
        v-if="
              isFetchingPaseoBalance && accountStore.getShortAddress != 'none'
            "
        class="spinner"
      />
      <div v-else>{{ accountStore.getPaseoHumanBalance }}</div>
    </div>

    <div v-if="showAssetsInfo" class="alert-overlay">
      <div class="alert">
        <h1 class="mb-8">Other Assets</h1>

        <p>Incognitee is capable of shielding any fungible asset on any substrate-based chain. Stay tuned for dedicated deployments for DOT, KSM, USDC, USDT and others</p>
        <p class="mt-3">With further extension, Incognitee will be able to shield BTC, ETH and any other token whose protocol supports light clients</p>
        <button @click="closeAssetsInfo" class="mt-8">Got it</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Polkadot from "@/assets/img/polkadot-logo.svg";
import Paseo from "@/assets/img/paseo-logo.svg";
import USDC from "@/assets/img/usdc-logo.svg";

import {onMounted, ref, watch} from 'vue';
import {cryptoWaitReady, mnemonicGenerate, mnemonicToMiniSecret} from "@polkadot/util-crypto";
import {Keyring} from "@polkadot/keyring";
import {hexToU8a, u8aToHex} from "@polkadot/util";
import {useRouter} from "vue-router";
import {useAccount} from "@/store/account.ts";
//import {useIncognitee} from "@/store/incognitee.ts";
import {ApiPromise, WsProvider} from "@polkadot/api";

const router = useRouter();
const accountStore = useAccount();
//const incogniteeStore = useIncognitee();
const isFetchingPaseoBalance = ref(true);
const isFetchingIncogniteeBalance = ref(true);

const showAssetsInfo = ref(false);

let api: ApiPromise | null = null;

const openAssetsInfo = () => {
  showAssetsInfo.value = true;
};
const closeAssetsInfo = () => {
  showAssetsInfo.value = false;
};

/*
const fetchIncogniteeBalance = async () => {
  if (!incogniteeStore.apiReady) return;
  if (!accountStore.account) return;
  incogniteeStore.api
    .getBalance(accountStore.account, incogniteeStore.shard)
    .then((balance) => {
      console.log(
        `current account balance L2: ${balance} on shard ${incogniteeStore.shard}`,
      );
      accountStore.setIncogniteeBalance(balance);
      isFetchingIncogniteeBalance.value = false;
    });
};
*/
watch(accountStore, async () => {
  //todo! only reinitialize if account changes
  if (accountStore.getAddress === "none") {
    console.log("skipping api init. no address");
    return;
  }
  if (api?.isReady) {
    console.log(
      "skipping api init. It seems the Paseo api is already subscribed to balance changes",
    );
    return;
  }

  console.log("trying to init api");
  const wsProvider = new WsProvider("wss://rpc.ibp.network/paseo");
  api = await ApiPromise.create({ provider: wsProvider });
  api.query.system.account(
    accountStore.account.address,
    ({ data: { free: currentFree } }) => {
      console.log("paseo balance:" + currentFree);
      accountStore.paseoBalance = Number(currentFree);
      isFetchingPaseoBalance.value = false;
    },
  );
  // for quicker responsiveness we dont wait until the next regular poll, but trigger the balance fetch here
/*  fetchIncogniteeBalance().then(() =>
    console.log("fetched incognitee balance"),
  );*/
});


onMounted(() => {
  const seedHex = router.currentRoute.value.query.seed;
  if (seedHex) {
    console.log("found seed in url: " + seedHex);
    cryptoWaitReady().then(() => {
      const localKeyring = new Keyring({ type: "sr25519" });
      const account = localKeyring.addFromSeed(hexToU8a(seedHex));
      accountStore.setAccount(account);
    });
  } else {
    console.log("no seed found in url. will automatically create fresh wallet");
    cryptoWaitReady().then(() => {
      const generatedMnemonic = mnemonicGenerate();
      const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
      const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {
        name: "fresh",
      });
      const seed = mnemonicToMiniSecret(generatedMnemonic);
      const privateKeyHex = u8aToHex(seed);
      console.log(`Private Key in Hex: ${privateKeyHex}`);
      // change url to contain new seed to allow bookmarking
      router.push({
        query: { seed: privateKeyHex },
      });
      accountStore.setAccount(newAccount);
      // TODO: inform the user that wallet was created and that they should store a bookmark
    });
  }
  //incogniteeStore.initializeApi();
});
</script>

<style scoped>
.wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

.balance {
  font-size: 48px;
  padding: 20px 20px
}
.balance-naked {
  font-size: 24px;
  padding: 20px 20px
}
.currency-selector {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.currency-logo {
  height: 50px; /* Adjust as needed */
  width: 50px; /* Adjust as needed */
}

.buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
hr {
  border: none;
  border-top: 1px #222; /* Change color as needed */
  color: #111; /* Change color as needed */
  background-color: #333; /* Change color as needed */
  height: 1px; /* Adjust as needed */
}
.privacy-separator {
  width: 90%;
  text-align: center;
  color: #555;
}

.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert {
  background: #222;
  padding: 20px;
  width: 90%;
  border-radius: 10px;
}
</style>
