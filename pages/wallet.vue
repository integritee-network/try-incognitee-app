<template>
  <div class="wallet">
    <div class="currency-selector">
      <Polkadot class="currency-logo" @click="openAssetsInfo" />
      <Paseo class="currency-logo" />
      <USDC class="currency-logo" @click="openAssetsInfo" />
    </div>

    <div class="balance">
      <div
        v-if="isFetchingIncogniteeBalance"
        class="spinner"
      />
      <div v-else>{{ accountStore.getIncogniteeHumanBalance }}</div>
    </div>

    <div class="buttons">
      <UButton class="btn btn_gradient" @click="openReceiveOverlay">
        receive
      </UButton>
      <UButton class="btn btn_gradient" @click="openSendOverlay">
        send
      </UButton>
    </div>

    <div class="privacy-separator">
      <p>private</p>
      <hr>
      <p>naked</p>
    </div>

    <div class="buttons">
      <UButton class="btn btn_gradient" @click="openShieldOverlay">
        shield
      </UButton>
      <UButton class="btn btn_gradient" @click="openUnshieldOverlay">
        unshield
      </UButton>
    </div>

    <div class="balance-naked">
      <div
        v-if="isFetchingPaseoBalance"
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
    <div v-if="showShieldOverlay" class="action-overlay">
      <div class="action">
        <h1 class="mb-8">Shield PAS</h1>
        <div class="mt-8">
          <form @submit.prevent="submitShieldForm" class="form-container">
            <label for="shieldAmount" class="mt-8">Amount:</label>
            <p>available balance {{accountStore.getPaseoHumanBalance}}</p>
            <input id="shieldAmount" v-model="shieldAmount" type="number" step="0.01" min="0" required>
            <p>fee: 0.1%</p>
            <button type="submit" class="btn btn_gradient">shield</button>
          </form>
        </div>
        <button @click="closeShieldOverlay" class="mt-8">cancel</button>
      </div>
    </div>
    <div v-if="showUnshieldOverlay" class="action-overlay">
      <div class="action">
        <h1 class="mb-8">Unshield PAS</h1>
        <div class="mt-8">
          <form @submit.prevent="submitUnshieldForm" class="form-container">
            <label for="recipientAddress">Recipient:</label>
            <input id="recipientAddress" v-model="recipientAddress" type="text" required>
            <UButton class="btn btn_gradient" @click="openScanOverlay">
              scan QR
            </UButton>
            <label for="unshieldAmount" class="mt-8">Amount:</label>
            <p>available balance {{accountStore.getIncogniteeHumanBalance}}</p>
            <p>for optimal k-anonymity, we advise you to unshield exactly 1 PAS at the time.
              In the future we will provide a score including timing and popular amounts to enhance
              unlinkability of your actions</p>
            <input id="unshieldAmount" v-model="unshieldAmount" type="number" step="1.0" min="1" required>
            <p>fee: 0.01 PAS</p>
            <button type="submit" class="btn btn_gradient">unshield</button>
          </form>
        </div>

        <button @click="closeUnshieldOverlay" class="mt-8">cancel</button>
      </div>
    </div>
    <div v-if="showReceiveOverlay" class="action-overlay">
      <div class="action">
        <h1 class="mb-8">Receive</h1>
        <div class="qrcode-container">
          <qrcode class="qrcode" :value="accountStore.getAddress"></qrcode>
        </div>
        <div class="mt-3">
          <p>your address: </p>
          <span style="word-break: break-word; overflow-wrap: break-word">
            <code>{{ accountStore.getAddress }}</code><br>
            <button @click="copyOwnAddressToClipboard">⧉</button>
          </span>
        </div>
        <div class="mt-8">
          <a
            href="https://faucet.polkadot.io/paseo"
            target="_blank"
            class="btn btn_gradient"
          >
            Get free PAS tokens from faucet
          </a>
        </div>
        <button @click="closeReceiveOverlay" class="mt-8">cancel</button>
      </div>
    </div>
    <div v-if="showSendOverlay" class="action-overlay">
      <div class="action">
        <h1 class="mb-8">Send</h1>
        <div class="mt-8">
          <form @submit.prevent="submitSendForm" class="form-container">
            <label for="recipientAddress">Recipient:</label>
            <input id="recipientAddress" v-model="recipientAddress" type="text" required>
            <UButton class="btn btn_gradient" @click="openScanOverlay">
              scan QR
            </UButton>
            <label for="amount" class="mt-8">Amount:</label>
            <p>available balance {{accountStore.getIncogniteeHumanBalance}}</p>
            <input id="amount" v-model="amount" type="number" step="0.01" min="0" required>
            <p>fee: 0.001 PAS</p>
            <button type="submit" class="btn btn_gradient">transfer</button>
          </form>
        </div>
        <button @click="closeSendOverlay" class="mt-8">cancel</button>
      </div>
    </div>
    <div v-if="showScanOverlay" class="action-overlay">
      <div class="action">
        <h1 class="mb-8">Scan QR code</h1>

        <div class="qrcode-container">
          <qrcode-stream @detect="onDecode"></qrcode-stream>
        </div>
        <div><p>QRcode result: {{ scanResult }}</p></div>
        <button @click="closeScanOverlay" class="mt-8">cancel</button>
      </div>
    </div>
    <div v-if="showStatusOverlay" class="status-overlay">
      <div class="status">
        <div class="spinner" />
        <div>{{ txStatus }}</div>
        <button @click="closeStatusOverlay" class="mt-8">close</button>
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
import {formatBalance, hexToU8a, u8aToHex} from "@polkadot/util";
import {useRouter} from "vue-router";
import {useAccount} from "@/store/account.ts";
import {useIncognitee} from "@/store/incognitee.ts";
import {ApiPromise, WsProvider} from "@polkadot/api";
import {useInterval} from "@vueuse/core";
import Qrcode from "vue-qrcode";
import {QrcodeStream} from "vue-qrcode-reader";

const router = useRouter();
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const isFetchingPaseoBalance = ref(true);
const isFetchingIncogniteeBalance = ref(true);

const existential_deposit_paseo = 10000000000;
const txStatus = ref("");
const recipientAddress = ref('');
const amount = ref('');
const shieldAmount = ref(1.0);
const unshieldAmount = ref(1.0);
const scanResult = ref('No QR code data yet')

let api: ApiPromise | null = null;

const submitSendForm = () => {
  // Handle the form submission here
  openStatusOverlay()
  console.log("do send: " + address.value);
};
const submitShieldForm = () => {
  // Handle the form submission here
  openStatusOverlay()
  shield()
};
const submitUnshieldForm = () => {
  // Handle the form submission here
  openStatusOverlay()
  unshield()
};
const onDecode = (decodeResult) => {
  console.log("QR scan decoded: " + decodeResult[0].rawValue)
  scanResult.value = decodeResult[0].rawValue
  recipientAddress.value = decodeResult[0].rawValue
  closeScanOverlay()
}

const txResHandlerPaseo = ({ events = [], status, txHash }) => {
  status.isFinalized
    ? (txStatus.value = `😀 Finalized. You should see your Incognitee balance increase in seconds. Please proceed to the next tab and invite a friend`)
    : (txStatus.value = `⌛ Current transaction status: ${status.type}. please be patient a few more seconds. you should see your Paseo balance going down`);

  // Loop through Vec<EventRecord> to display all events
  events.forEach(({ _, event: { data, method, section } }) => {
    if (section + ":" + method === "system:ExtrinsicFailed") {
      // extract the data for this event
      const [dispatchError, dispatchInfo] = data;
      console.log(`dispatchinfo: ${dispatchInfo}`);
      let errorInfo;

      // decode the error
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        // (For specific known errors, we can also do a check against the
        // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
        const mod = dispatchError.asModule;
        const error = api.registry.findMetaError(
          new Uint8Array([
            mod.index.toNumber(),
            bnFromHex(mod.error.toHex().slice(0, 4)).toNumber(),
          ]),
        );
        const message = `${error.section}.${error.name}${
          Array.isArray(error.docs)
            ? `(${error.docs.join("")})`
            : error.docs || ""
        }`;

        errorInfo = `${message}`;
        console.log(`Error-info::${JSON.stringify(error)}`);
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        errorInfo = dispatchError.toString();
      }
      txStatus.value = `😞 Transaction Failed! ${section}.${method}::${errorInfo}`;
    } else if (section + ":" + method === "system:ExtrinsicSuccess") {
      txStatus.value`❤️️ Transaction successful! please proceed to the next tab and invite a friend`;
    }
  });
};

const txErrHandlerPaseo = (err) =>
  (txStatus.value = `😞 Transaction Failed: ${err.toString()}`);
const shield = async () => {
  console.log("shielding .....");
  txStatus.value = "⌛ connecting to Paseo....please be patient";
  if (incogniteeStore.vault) {
    const balance = accountStore.paseoBalance;
    const amount = Math.pow(10, 10) * shieldAmount.value;
    if (balance - amount < existential_deposit_paseo) {
      alert(
        "Your PAS balance would fall below the existential deposit. Please obtain more PAS from the faucet",
      );
      txStatus.value = "";
      return;
    }
    console.log(`sending ${amount} to vault: ${incogniteeStore.vault}`);
    const wsProvider = new WsProvider("wss://rpc.ibp.network/paseo");
    const api = await ApiPromise.create({ provider: wsProvider });
    console.log("api initialized for shielding");
    await api.tx.balances
      .transferKeepAlive(incogniteeStore.vault, amount)
      .signAndSend(accountStore.account, txResHandlerPaseo)
      .catch(txErrHandlerPaseo);
  }
};

const unshield = () => {
  console.log("will unshield 30% of your private funds to same account on L1");
  txStatus.value =
    "⌛ will unshield to L1";
  const balance = accountStore.incogniteeBalance;
  const amount = Math.pow(10, 10) * unshieldAmount.value;
  const signer = accountStore.account;
  console.log(
    `sending ${formatBalance(amount)} from ${
      signer.address
    } privately to ${recipientAddress.value} on L1 (shard: ${incogniteeStore.shard}`,
  );
  incogniteeStore.api
    .balanceUnshieldFunds(
      signer,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      signer.address,
      recipientAddress.value,
      amount,
    )
    .then((hash) => {
      txStatus.value =
        "😀 Triggered unshielding of funds successfully.";
      console.log(`trustedOperationHash: ${hash}`);
    });
};

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

const pollCounter = useInterval(2000);

watch(pollCounter, async () => {
  console.log("ping: " + pollCounter.value);
  await fetchIncogniteeBalance();
});

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
  fetchIncogniteeBalance().then(() =>
    console.log("fetched incognitee balance"),
  );
});

const copyOwnAddressToClipboard = () => {
  navigator.clipboard
    .writeText(accountStore.getAddress)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please paste it into the address field on the Paseo faucet.",
      ),
    );
};

onMounted(() => {
  incogniteeStore.initializeApi();

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
});


const showAssetsInfo = ref(false);
const openAssetsInfo = () => { showAssetsInfo.value = true; };
const closeAssetsInfo = () => { showAssetsInfo.value = false; };
const showShieldOverlay = ref(false);
const openShieldOverlay = () => { showShieldOverlay.value = true; };
const closeShieldOverlay = () => { showShieldOverlay.value = false; };
const showUnshieldOverlay = ref(false);
const openUnshieldOverlay = () => { showUnshieldOverlay.value = true; };
const closeUnshieldOverlay = () => { showUnshieldOverlay.value = false; };
const showReceiveOverlay = ref(false);
const openReceiveOverlay = () => { showReceiveOverlay.value = true; };
const closeReceiveOverlay = () => { showReceiveOverlay.value = false; };
const showSendOverlay = ref(false);
const openSendOverlay = () => { showSendOverlay.value = true; };
const closeSendOverlay = () => { showSendOverlay.value = false; };

const showScanOverlay = ref(false);
const openScanOverlay = () => {
  scanResult.value = 'No QR code data yet';
  showScanOverlay.value = true;
};
const closeScanOverlay = () => { showScanOverlay.value = false; };
const showStatusOverlay = ref(false);
const openStatusOverlay = () => { showStatusOverlay.value = true; };
const closeStatusOverlay = () => {
  showStatusOverlay.value = false;
  showSendOverlay.value = false;
  showShieldOverlay.value = false;
  showUnshieldOverlay.value = false;
};

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

h1 {
  font-size: 1em; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  color: #999; /* Change color as needed */
  text-align: center; /* Centers the text */
  margin-bottom: 20px; /* Adds space below the heading */
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

.action-overlay {
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

.action {
  background: #222;
  padding: 20px;
  width: 90%;
  border-radius: 10px;
}
.status-overlay {
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

.status {
  background: #269;
  padding: 20px;
  width: 90%;
  border-radius: 10px;
}
.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.qrcode {
  width: min(90vw, 80vh);
  height: min(90vw, 80vh);
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.form-container input {
  background-color: #333;
  color: #fff; /* You might want to change the text color to ensure it's readable against the dark background */
}
.form-container input#amount {
  font-size: 2em; /* Make the font size twice as large */
  text-align: center; /* Center the text */
  width: 50%; /* Reduce the width by 50% */
}

.spinner {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 1em; /* Adjust the size here */
  height: 1em; /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle; /* Align with the text */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
