<template>

  <div class="text-center py-4 lg:px-4">
    <div class="p-2 incognitee-bg items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert">
      <span class="flex rounded-full incognitee-blue uppercase px-2 py-1 text-xs font-bold mr-3">Note</span>
      <span class="text-xs mr-2 text-left flex-auto">You need some signer extension to use this page. Please make
        sure to enable your extension and reload the page in case the connect button doesn't work.</span>
    </div>
  </div>

  <div class="py-24 sm:py-32 container">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="title text-4xl font-bold tracking-tight text-white sm:text-6xl">Incognitee TEERdays</h2>
          <p class="mt-6 text-gray-300">Collect TEERdays now and get the pole position for the Incognitee Go-Live.
            Collect TEERdays now and get the pole position for the Incognitee Go-Live. Collect TEERdays now and get the
            pole position for the Incognitee Go-Live. Collect TEERdays now and get the pole position for the Incognitee
            Go-Live.​</p>
          <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-x-3 gap-y-3 sm:max-w-xl sm:grid-cols-4 sm:gap-x-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <a href="https://talisman.xyz/download"><img class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
                src="/img/index/talisman-logo.svg" alt="talisman" /></a>
            <a href="https://novawallet.io/"><img class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
                src="/img/index/nova-wallet-logo.svg" alt="nova wallet" /></a>
            <a href="https://www.subwallet.app/"><img class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
                src="/img/index/sub-wallet-logo.svg" alt="sub wallet" /></a>
            <a href="https://polkadot.js.org/extension/"><img
                class="col-span-1 max-h-7 w-full object-contain lg:col-span-1" src="/img/index/polkadotjs-logo.svg"
                alt="polkajs" /></a>
          </div>
          <div v-if="accounts.length < 1" class="mt-10 flex">
            <button @click="connect"
              class="incognitee-bg rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Connect
              Wallet</button>
          </div>
        </div>

      </div>

    </div>


    <div v-if="accounts.length" class="py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <h1 class="title mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Wallet Details
          </h1>

          <div class="mt-5">

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-10">
              <div class="sm:col-span-3">
                <label for="account.address" class="text-sm font-medium leading-6 text-gray-300">Select your
                  account</label>
                <div class="mt-2">
                  <select v-model="selectedAccount" id="account.address" name="account.address"
                    placeholder="account.address"
                    class="w-full rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6">
                    <option v-for="account in accounts" :key="account.address" :value="account.address">
                      {{ account.meta.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="text-sm font-medium leading-6 text-gray-300">Selected Address</label>
                <div class="mt-2">
                  <span class="text-sm text-gray-300">{{ accountStore.getAddress }}</span>
                </div>
              </div>
            </div>

            <div v-if="selectedAccount">
              <div v-if="isFetchingTeerBalance">
                <div
                  class="spinner border-t-transparent border-solid animate-spin rounded-full border-gray-400 border-4 h-8 w-8">
                </div>
              </div>

              <div v-else class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div>
                    <div class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-5">
                      <dl class="flex flex-wrap">
                        <div class="w-full flex flex-col md:flex-row justify-between px-6 pt-6">
                          <div class="flex-auto mb-4 md:mb-0">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">Current bond</dt>
                            <dd class="mt-1 text-base font-semibold leading-6 text-white">
                              {{ currentBond ? currentBond.getTeerBonded() : 0 }} TEER
                            </dd>
                          </div>

                          <div class="flex-auto text-left md:text-right">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">Accumulated TEERdays</dt>
                            <dd class="mt-1 text-base font-semibold leading-6 text-white">
                              {{ currentBond ? currentBond.getTeerDays() : 0 }} TEERdays
                            </dd>
                          </div>
                        </div>

                        <div class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-6">
                          <dt class="text-sm font-semibold leading-6 text-gray-300">Reserved</dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31">{{ accountStore.getHumanReserved }} TEER</time>
                          </dd>
                        </div>

                        <div class="flex w-full flex-none gap-x-4 px-6">
                          <dt class="text-sm font-semibold leading-6 text-gray-300">Frozen</dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31">{{ accountStore.getHumanFrozen }} TEER</time>
                          </dd>
                        </div>

                        <div class="flex w-full flex-none gap-x-4 px-6">
                          <dt class="text-sm font-semibold leading-6 text-gray-300">Free</dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31">{{ accountStore.getHumanFree }} TEER</time>
                          </dd>
                        </div>

                        <div v-if="pendingUnlock" class="w-full flex justify-between flex-col md:flex-row px-6 pt-6">
                          <div class="flex-auto mb-4 md:mb-0">
                            <div class="flex w-full flex-none gap-x-4">
                              <dt class="text-sm font-semibold leading-6 text-gray-300">Pending unlock</dt>
                              <dd class="text-sm leading-6 text-gray-400">
                                <time datetime="2023-01-31">{{ pendingUnlock ? pendingUnlock.getTeerToUnlock() : 0 }}
                                  TEER</time>
                              </dd>
                            </div>

                            <div class="flex w-full flex-none gap-x-4">
                              <dt class="text-sm font-semibold leading-6 text-gray-300">Unlocked on</dt>
                              <dd class="text-sm leading-6 text-gray-400">
                                <time datetime="2023-01-31">{{ pendingUnlock?.getDueDateStr() }}</time>
                              </dd>
                            </div>
                          </div>

                          <div v-if="pendingUnlock?.canWithdraw()" class="flex-auto text-left md:text-right gap-x-4">
                            <button @click="withdrawUnbonded"
                              class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white btn btn_gradient">
                              Withdraw!
                            </button>
                          </div>
                        </div>

                      </dl>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div class="text-sm font-medium leading-6 text-gray-300">Bond TEER to accumulate TEERdays</div>
                      <div v-if="accountStore.getTransferrable < Math.pow(10, 9)" class="text-sm text-red-500">
                        Not enough transferrable TEER. Please get free test TEER at our
                        <a :href="'https://substratefaucet.xyz/integritee/' + accountStore.getAddress" target="_blank"
                          class="text-indigo-500 underline">testnet faucet</a>.
                      </div>

                      <form @submit.prevent="bondAmount" class="space-y-2">
                        <div class="flex flex-col sm:flex-row sm:space-x-2">
                          <input type="number" v-model="amountToBond" placeholder="Enter amount to bond" required
                            class="flex-grow rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6" />
                          <button type="submit"
                            class="w-full sm:w-40 mt-5 sm:mt-0 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 btn btn_gradient">
                            Bond!
                          </button>
                        </div>
                      </form>

                    </div>

                    <div class="form-container mt-8" v-if="currentBond">
                      <div class="text-sm font-medium leading-6 text-gray-300">Unbond TEER</div>

                      <div v-if="pendingUnlock" class="text-sm text-red-500">
                        Not possible until pending unlock expired and withdrawn.
                      </div>


    

                      <div v-else class="space-y-2">
                        
                        <form @submit.prevent="unbondAmount" class="space-y-2">
                          <div class="flex flex-col sm:flex-row sm:space-x-2">
                            <input type="number" v-model="amountToUnbond" placeholder="Enter amount to unbond" required
                              class="flex-grow rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6" />
                            <button type="submit"
                              class="w-full sm:w-40 mt-5 sm:mt-0 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 btn btn_gradient">
                              Unbond!
                            </button>
                          </div>
                        </form>
                        <p class="mt-2 text-xs text-gray-500" id="email-description">Unbonded TEER will be locked for 7
                          days.</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <h1 class="title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">TEERdays Statistics</h1>
          <dl
            class="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/5 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-300">{{ stat.name }}</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

    </div>

    <div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1 class="title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">TEERdays Intro​</h1>
              <p class="mt-6 text-gray-300">By bonding your TEER now, you can accumulate TEERdays for the launch of
                Incognitee. TEERdays are calculated by the amount of TEER * with the number of days bonded. You can
                unbond your TEER anytime within 7 days, but you will lose 90%-100% of the accumulated TEERdays as a
                penalty. During the unlock period, you're not accumulating TEERdays. TEERdays are non-transferable.
                Start now to get the best position for the Incognitee launch. ​</p>
            </div>
          </div>
        </div>

        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect width="316" height="684" rx="36" />
              </clipPath>
            </defs>
            <path fill="#4B5563"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
            <path fill="#343E4E"
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
            <foreignObject width="316" height="684" transform="translate(24 24)"
              clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
              <img src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png" alt="" />
            </foreignObject>
          </svg>
        </div>

      </div>
    </div>

    <div class="relative isolate overflow-hidden px-6 py-5 sm:py-5 lg:overflow-visible lg:px-0">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <!-- Text on the Right -->
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1 class="title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Why collect TEERdays?​</h1>
            <p class="mt-6 text-gray-300">TEERdays can be used to increase your revenue share for the launch of
              Incognitee on Polkadot/Kusama and will also increase your governance voting power for future decisions
              related to Incognitee. ​</p>
          </div>
        </div>
        <!-- Image on the Left -->
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
        </div>
      </div>
    </div>


    <div class="relative isolate overflow-hidden py-20 lg:overflow-visible lg:px-0">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1 class="title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">How to participate?​​</h1>



              <p class="mt-6 text-gray-300">1. First you need to possess some TEER. Grab them at one of the avenues like
                Kraken, Gate or Basilisk. ​<br>

                2. Download the Polkadot JS browser Extension and connect your wallet. ​​<br>

                3. Transfer TEER to your wallet. ​​<br>

                4. Bond your TEER here ( link to wallet)​​<br>

                5. Start automatically collecting TEERdays​​<br>

                6. Refer a friend ​</p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl">

      <div class="px-4 sm:px-6 lg:px-8">
        <div class="mt-5 flow-root">

          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <h1 class="title text-3xl font-bold tracking-tight text-white sm:text-4xl">Leaderboard​​</h1>
              <table class="min-w-full divide-y divide-gray-700 mt-10">
                <thead>
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">Rank
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">TEERdays</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Wallet</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">TEER bonded</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-800">
                  <tr v-for="leaderboard in leaderboard">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">{{
                      leaderboard.rank }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{{ leaderboard.teerdays }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{{ leaderboard.wallet }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{{ leaderboard.teerbonded }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1 class="title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Rules​​</h1>
              <ul class="list-disc list-outside text-gray-300 mt-6">
                <li>You can bond as many TEER as you like​</li>
                <li>You can unbond any time with a 7-day unbonding period​</li>
                <li>You will not accumulate any TEERdays during the unbonding period​</li>
                <li>You will lose a % of your TEERdays if you unbond your TEER pro rata of the unbonded amount​</li>
                <li>TEERdays are non-transferable​</li>
                <li>TEERdays are calculated as follows:​<br>
                  Amount of TEER * with the number of days bonded = TEERdays​<br>
                  Example: 20 TEER * 7 days = 140 TEERdays​</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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


const stats = [
  { id: 1, name: 'TEERday holder', value: '400' },
  { id: 2, name: 'Total TEER bonded​', value: '1000' },
  { id: 4, name: 'Total TEERdays ​active​', value: '100 000' },
]

import { ref } from 'vue'
const leaderboard = [
  { rank: '1', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '2', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '3', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '4', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '5', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '6', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '7', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  { rank: '8', teerdays: '12345', wallet: 'x0sdkgfskdfhskjdflshdfkjsdkf', teerbonded: '12345' },
  // More people...
]

import { XMarkIcon } from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<style scoped>
.incognitee-bg {
  background: linear-gradient(84.58deg, #24ad7c, #1845b9);
}

.incognitee-blue {
  background: #1845b9;
}

.incognitee-green {
  background: #24ad7c;
}

/* Hide the arrows for number input fields */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
  /* Hides the arrows in Firefox */
}
</style>
