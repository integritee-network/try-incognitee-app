<template>
  <div class="mt-3 text-center sm:mt-5">
    <span as="h3" class="text-base font-semibold leading-6 text-white"
      >TEERdays
    </span>

    <div class="mt-2">
      <p class="text-sm text-gray-400 text-justify">
        blabla
      </p>
      <div class="mt-2">
         <button @click="connect">Connect!</button>
      </div>
      <div v-if="accounts.length" class="mt-2">
        <select v-model="selectedAccount">
          <option v-for="account in accounts" :key="account.address" :value="account.address">
            {{ account.meta.name }}
          </option>
        </select>
        <div>
          <p>Selected account: {{accountStore.getAddress}}</p>
        </div>
        <div>
          <div v-if="isFetchingTeerBalance" class="spinner"></div>
          <div class="text-4xl font-semibold" v-else>
            <div>
              free: {{ accountStore.getHumanFree }}
              <span class="text-sm font-semibold">TEER</span>
            </div>
            <div>
              reserved: {{ accountStore.getHumanReserved }}
              <span class="text-sm font-semibold">TEER</span>
            </div>
            <div>
              frozen: {{ accountStore.getHumanFrozen }}
              <span class="text-sm font-semibold">TEER</span>
            </div>
          </div>
        </div>
      </div>
      <!-- this is necessary to avoid the footer overlapping the text -->
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { onMounted, ref, watch } from "vue";
import { useAccount } from "@/store/teerAccount.ts";
const accountStore = useAccount();

const accounts = ref([]);
const selectedAccount = ref(null);

watch(selectedAccount, (newAccount) => {
  if (newAccount) {
    console.log('user selected account:', newAccount);
    accountStore.setAddress(newAccount);
  }
});
const connect = () => {
  web3Enable('Integritee Dapp')
    .then((extensions) => {
      console.log(extensions);
      return web3Accounts();
    })
    .then((accountsList) => {
      accounts.value = accountsList;
      console.log(accounts);
    })
    .catch((error) => {
      console.error('Error in web3Enable or web3Accounts:', error);
    });
};

let api: ApiPromise | null = null;

const isFetchingTeerBalance = ref(true);

watch(accountStore, async () => {
  //todo! only reinitialize if account changes
  if (accountStore.getAddress === "none") {
    console.log("skipping api init. no address");
    return;
  }
  console.log("trying to init api");
  const wsProvider = new WsProvider("wss://paseo.api.integritee.network");
  api = await ApiPromise.create({ provider: wsProvider });
  api.query.system.account(
    accountStore.address,
    ({ data: { free: currentFree, reserved: currentReserved, frozen: currentFrozen } }) => {
      console.log("paseo balance:" + currentFree);
      accountStore.free = Number(currentFree);
      accountStore.reserved = Number(currentReserved);
      accountStore.frozen = Number(currentFrozen);
      isFetchingTeerBalance.value = false;
    },
  );
});
</script>

<style scoped>
h1 {
  font-size: 2em; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  color: #999; /* Change color as needed */
  text-align: center; /* Centers the text */
  margin-bottom: 20px; /* Adds space below the heading */
}

p {
  padding: 10px 20px; /* Adds 10px padding top and bottom, 20px padding left and right */
  line-height: 1.5; /* Increases the space between lines of text */
  color: #fff; /* Change color as needed */
  text-align: justify;
}
a {
  color: #99f; /* Change color as needed */
}
select {
  background-color: black;
  color: white;
}
</style>
