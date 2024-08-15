<template>
  <div class="mt-3 text-center sm:mt-5">
    <span as="h3" class="text-base font-semibold leading-6 text-white"
      >TEERdays
    </span>

    <div class="mt-2">
      <p class="text-sm text-gray-400 text-justify">blabla</p>
      <div class="mt-2" v-if="accounts.length < 1">
        <button @click="connect">Connect!</button><br />

        You need some signer extension to use this page. Please make sure to
        enable your extension and reload the page in case the connect button
        doesn't work.

        <br />
        These are some options:
        <li>
          <a href="https://polkadot.js.org/extension/">polkadot.js extension</a>
        </li>
        <li>
          <a href="https://talisman.xyz/download">talisman</a>
        </li>
        <li>
          <a href="https://novawallet.io/">nova wallet</a>
        </li>
        <li>
          <a href="https://www.subwallet.app/">subwallet</a>
        </li>
        others may work too.
      </div>
      <div v-if="accounts.length" class="mt-2">
        <select v-model="selectedAccount">
          <option
            v-for="account in accounts"
            :key="account.address"
            :value="account.address"
          >
            {{ account.meta.name }}
          </option>
        </select>
        <div>
          <p>Selected account: {{ accountStore.getAddress }}</p>
        </div>
        <div v-if="selectedAccount">
          <div v-if="isFetchingTeerBalance" class="spinner"></div>
          <div class="text-2xl font-semibold" v-else>
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
              current bond: {{ currentBond ? currentBond.getTeerBonded() : 0 }}
              <span class="text-sm font-semibold">TEER</span>
            </div>
            <div v-if="pendingUnlock">
              pending unlock:
              {{ pendingUnlock ? pendingUnlock.getTeerToUnlock() : 0 }}
              <span class="text-sm font-semibold">TEER</span>
              unlocked on {{ pendingUnlock?.getDueDateStr() }}
              <div
                class="form-container mt-2"
                v-if="pendingUnlock?.canWithdraw()"
              >
                <button @click="withdrawUnbonded">Withdraw!</button>
              </div>
            </div>
            <div>
              accumulated TEERdays:
              {{ currentBond ? currentBond.getTeerDays() : 0 }}
              <span class="text-sm font-semibold">TEERdays</span>
            </div>
          </div>
          <div class="form-container mt-8">
            bond TEER to accumulate TEERdays:
            <div v-if="accountStore.getTransferrable < Math.pow(10, 9)">
              not enough transferrable TEER. Please get free test TEER at our
              <a href="https://substratefaucet.xyz/integritee" target="_blank"
                >testnet faucet</a
              >
            </div>
            <form @submit.prevent="bondAmount">
              <input
                type="number"
                v-model="amountToBond"
                placeholder="Enter amount to bond"
                required
              />
              TEER<br />
              <button type="submit">Bond!</button>
            </form>
          </div>
          <div class="form-container mt-8" v-if="currentBond">
            unbond TEER:
            <div v-if="pendingUnlock">
              not possible until pending unlock expired and withdrawn
            </div>
            <div v-else>
              <p>unbonded TEER will be locked for 7 days</p>
              <form @submit.prevent="unbondAmount">
                <input
                  type="number"
                  v-model="amountToUnbond"
                  placeholder="Enter amount to unbond"
                  required
                />
                TEER<br />
                <button type="submit">Unbond!</button>
              </form>
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
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { onMounted, ref, watch } from "vue";
import { useAccount } from "@/store/teerAccount.ts";
import BN from "bn.js";
import { useInterval } from "@vueuse/core";

const accountStore = useAccount();

const accounts = ref([]);
const selectedAccount = ref(null);
const currentBond = ref(null);
const pendingUnlock = ref(null);

watch(selectedAccount, (newAccount) => {
  if (newAccount) {
    console.log("user selected account:", newAccount);
    accountStore.setAddress(newAccount);
  }
});
const connect = () => {
  web3Enable("Integritee Dapp")
    .then((extensions) => {
      console.log(extensions);
      return web3Accounts();
    })
    .then((accountsList) => {
      accounts.value = accountsList;
      console.log(accounts);
    })
    .catch((error) => {
      console.error("Error in web3Enable or web3Accounts:", error);
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
  await api.query.system.account(
    accountStore.address,
    ({
      data: {
        free: currentFree,
        reserved: currentReserved,
        frozen: currentFrozen,
      },
    }) => {
      console.log("TEER balance:" + currentFree);
      accountStore.free = Number(currentFree);
      accountStore.reserved = Number(currentReserved);
      accountStore.frozen = Number(currentFrozen);
      isFetchingTeerBalance.value = false;
    },
  );
  await api.query.teerDays.teerDayBonds(
    accountStore.address,
    ({ value: bond }) => {
      if (bond.value) {
        console.log(
          "TEERday bond:" +
            bond.value +
            " last updated:" +
            bond.lastUpdated +
            " accumulated tokentime:" +
            bond.accumulatedTokentime,
        );
        let lastUpdated = new Date(0);
        lastUpdated.setUTCMilliseconds(bond.lastUpdated.toNumber());
        currentBond.value = new Bond(
          bond.value / Math.pow(10, 12),
          lastUpdated,
          bond.accumulatedTokentime / Math.pow(10, 12) / 86400 / 1000,
        );
        currentBond.value.updateTeerDays();
      } else {
        console.log("TEERday bond not found");
        currentBond.value = null;
      }
    },
  );
  await api.query.teerDays.pendingUnlock(
    accountStore.address,
    ({ value: timestamp_amount }) => {
      console.log("TEER pending unlock:" + timestamp_amount);
      if (timestamp_amount[1]) {
        let unlockDate = new Date(0);
        const unlockEpoch = timestamp_amount[0].toNumber();
        unlockDate.setUTCMilliseconds(unlockEpoch);
        console.log("unlock date:" + unlockDate + "epoch:" + unlockEpoch);
        pendingUnlock.value = new PendingUnlock(
          timestamp_amount[1] / Math.pow(10, 12),
          unlockDate,
        );
      } else {
        pendingUnlock.value = null;
      }
    },
  );
});

const amountToBond = ref(0);
const bondAmount = () => {
  // Handle the bonding process here
  const amount = amountToBond.value * Math.pow(10, 12);
  console.log(`Bonding ${amount}`);
  web3FromAddress(accountStore.getAddress).then((injector) => {
    if (currentBond.value > 0) {
      api.tx.teerDays
        .bondExtra(amount)
        .signAndSend(
          accountStore.getAddress,
          { signer: injector.signer },
          (result) => {
            console.log(`Current status is ${result.status}`);
            if (result.status.isInBlock) {
              console.log(
                `Transaction included at blockHash ${result.status.asInBlock}`,
              );
            } else if (result.status.isFinalized) {
              console.log(
                `Transaction finalized at blockHash ${result.status.asFinalized}`,
              );
            }
          },
        );
    } else {
      api.tx.teerDays
        .bond(amount)
        .signAndSend(
          accountStore.getAddress,
          { signer: injector.signer },
          (result) => {
            console.log(`Current status is ${result.status}`);
            if (result.status.isInBlock) {
              console.log(
                `Transaction included at blockHash ${result.status.asInBlock}`,
              );
            } else if (result.status.isFinalized) {
              console.log(
                `Transaction finalized at blockHash ${result.status.asFinalized}`,
              );
            }
          },
        );
    }
  });
};
const amountToUnbond = ref(0);
const unbondAmount = () => {
  // Handle the bonding process here
  const amount = amountToBond.value * Math.pow(10, 12);
  console.log(`Bonding ${amount}`);
  web3FromAddress(accountStore.getAddress).then((injector) => {
    api.tx.teerDays
      .unbond(amount)
      .signAndSend(
        accountStore.getAddress,
        { signer: injector.signer },
        (result) => {
          console.log(`Current status is ${result.status}`);
          if (result.status.isInBlock) {
            console.log(
              `Transaction included at blockHash ${result.status.asInBlock}`,
            );
          } else if (result.status.isFinalized) {
            console.log(
              `Transaction finalized at blockHash ${result.status.asFinalized}`,
            );
          }
        },
      );
  });
};

const withdrawUnbonded = () => {
  // Handle the bonding process here
  console.log(`Withdrawing`);
  web3FromAddress(accountStore.getAddress).then((injector) => {
    api.tx.teerDays
      .withdrawUnbonded()
      .signAndSend(
        accountStore.getAddress,
        { signer: injector.signer },
        (result) => {
          console.log(`Current status is ${result.status}`);
          if (result.status.isInBlock) {
            console.log(
              `Transaction included at blockHash ${result.status.asInBlock}`,
            );
          } else if (result.status.isFinalized) {
            console.log(
              `Transaction finalized at blockHash ${result.status.asFinalized}`,
            );
          }
        },
      );
  });
};

const refreshCounter = useInterval(1000);

watch(refreshCounter, async () => {
  //console.log("ping: " + refreshCounter.value);
  currentBond.value?.updateTeerDays();
});

class Bond {
  teerBonded: number;
  lastUpdated: Date;
  accumulatedTeerDays: number;

  constructor(
    teerBonded: number = 0,
    lastUpdated: Date = new Date(),
    accumulatedTeerDays: number = 0,
  ) {
    this.teerBonded = teerBonded;
    this.lastUpdated = lastUpdated;
    this.accumulatedTeerDays = accumulatedTeerDays;
  }

  updateTeerDays() {
    const now = new Date();
    const elapsed = now.getTime() - this.lastUpdated.getTime(); //milliseconds
    this.accumulatedTeerDays += (this.teerBonded * elapsed) / 86400 / 1000;
    this.lastUpdated = now;
  }

  getTeerDays() {
    return this.accumulatedTeerDays.toFixed(4);
  }

  getTeerBonded() {
    return this.teerBonded.toFixed(4);
  }
}

class PendingUnlock {
  teerToUnlock: number;
  due: Date;

  constructor(teerToUnlock: number = 0, due: Date = new Date()) {
    this.teerToUnlock = teerToUnlock;
    this.due = due;
  }

  getDueDateStr() {
    return this.due.toISOString();
  }

  getTeerToUnlock() {
    return this.teerToUnlock > 0 ? this.teerToUnlock.toFixed(4) : null;
  }

  canWithdraw() {
    return this.due < new Date();
  }
}
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
