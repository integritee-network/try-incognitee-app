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
          <p>Selected account: {{ accountStore.getAddress }}</p>
        </div>
        <div v-if="selectedAccount">
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
            <div>
              current bond: {{ currentBond }}
              <span class="text-sm font-semibold">TEER</span>
            </div>
            <div>
              pending unlock: {{ pendingUnlockAmount }}
              <span class="text-sm font-semibold">TEER</span>
            </div>
            <div>
              accumulated TEERdays: {{ accumulatedTeerDays }}
              <span class="text-sm font-semibold">TEERdays</span>
            </div>
          </div>
          <div class="form-container mt-8">
            bond TEER to accumulate TEERdays:
            <form @submit.prevent="bondAmount">
              <input type="number" v-model="amountToBond" placeholder="Enter amount to bond" required> TEER<br>
              <button type="submit">Bond!</button>
            </form>
          </div>
        </div>
      </div>
      <!-- this is necessary to avoid the footer overlapping the text -->
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {web3Accounts, web3Enable, web3FromAddress} from '@polkadot/extension-dapp';
import {ApiPromise, WsProvider} from "@polkadot/api";
import {onMounted, ref, watch} from "vue";
import {useAccount} from "@/store/teerAccount.ts";
import BN from 'bn.js';
const accountStore = useAccount();

const accounts = ref([]);
const selectedAccount = ref(null);
const currentBond = ref(0);
const pendingUnlockAmount = ref(0);
const accumulatedTeerDays = ref(0);

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
  api = await ApiPromise.create({provider: wsProvider});
  await api.query.system.account(
    accountStore.address,
    ({data: {free: currentFree, reserved: currentReserved, frozen: currentFrozen}}) => {
      console.log("TEER balance:" + currentFree);
      accountStore.free = Number(currentFree);
      accountStore.reserved = Number(currentReserved);
      accountStore.frozen = Number(currentFrozen);
      isFetchingTeerBalance.value = false;
    },
  );
  await api.query.teerDays.teerDayBonds(
    accountStore.address,
    ({value: bond}) => {
      if (bond.value) {
        console.log("TEERday bond:" + bond.value + " last updated:" + bond.lastUpdated + " accumulated tokentime:" + bond.accumulatedTokentime);
        const now = Date.now();
        const elapsed = now - bond.lastUpdated;
        console.log("elapsed:" + elapsed);
        const teerDays = bond.accumulatedTokentime.add(bond.value.mul(new BN(elapsed))) / Math.pow(10,12) / 86400 / 1000;
        console.log("TEERdays accumulated:" + teerDays);
        accumulatedTeerDays.value = teerDays;
        currentBond.value = bond.value / Math.pow(10,12);
      } else {
        console.log("TEERday bond not found");
        accumulatedTeerDays.value = 0;
        currentBond.value = 0;
      }
    },
  );
  await api.query.teerDays.pendingUnlock(
    accountStore.address,
    ({value: timestamp_amount}) => {
      console.log("TEER pending unlock:" + timestamp_amount);
      if (timestamp_amount) {
        pendingUnlockAmount.value = timestamp_amount[1] / Math.pow(10,12);
      } else {
        pendingUnlockAmount.value = 0;
      }
    }
  );
});


const amountToBond = ref(0);
const bondAmount = () => {
  // Handle the bonding process here
  const amount = amountToBond.value * Math.pow(10, 12);
  console.log(`Bonding ${amount}`);
  web3FromAddress(accountStore.getAddress).then((injector) => {
    if (currentBond.value > 0) {
      api.tx.teerDays.bondExtra(amount).signAndSend(accountStore.getAddress, {signer: injector.signer}, (result) => {
        console.log(`Current status is ${result.status}`);
        if (result.status.isInBlock) {
          console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
        } else if (result.status.isFinalized) {
          console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
        }
      });
    } else {
      api.tx.teerDays.bond(amount).signAndSend(accountStore.getAddress, {signer: injector.signer}, (result) => {
        console.log(`Current status is ${result.status}`);
        if (result.status.isInBlock) {
          console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
        } else if (result.status.isFinalized) {
          console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
        }
      });
    }
  });
};

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
input {
  background-color: black;
  color: white;
}
</style>
