<template>
  <div class="text-center py-4 lg:px-4">
    <div class="p-2 incognitee-bg items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert">
      <span class="flex rounded-full incognitee-blue uppercase px-2 py-1 text-xs font-bold mr-3">Note</span>
      <span class="text-xs mr-2 text-left flex-auto">You need some signer extension to use this page. Please make sure
        to
        enable your extension and reload the page in case the connect button
        doesn't work.</span>
    </div>
  </div>

  <div class="py-24 sm:py-32 container">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        " />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-2 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="title text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Secure. <br>
            Anonymous. <br>
            Decentralized.
          </h2>
          <p class="mt-6 text-gray-300">
            A new era of digital currency transfer is about to come. Our Incognitee Web3 wallet empowers you to make
            secure, private, and anonymous transactions without compromising control over your assets. <br><br>
            Collect TEERdays now and save the pole position for the Incognitee Go-Live.
          </p>
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
              class="incognitee-bg rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              Connect Wallet
            </button>
          </div>
        </div>
        <div class="sm:pl-40 mx-auto w-full max-w-xl lg:mx-0">
          <img class="col-span-1 w-80 w-full object-contain lg:col-span-1" src="/img/index/incognitee-wallet.png"
            alt="polkajs" />
        </div>
      </div>
    </div>

    <hr class="my-20 border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent">



    <div class="my-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div class="relative overflow-hidden">
              <dt>
                <div class="absolute rounded-md bg-gray-800 p-3">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <p class="ml-16 truncate text-xs font-medium text-gray-400">TEERday holder</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-4xl font-semibold text-white">{{ summaryHolders }}</p>
              </dd>
            </div>

            <div class="relative overflow-hidden">
              <dt>
                <div class="absolute rounded-md bg-gray-800 p-3">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <p class="ml-16 truncate text-xs font-medium text-gray-400">Total TEER bonded</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-4xl font-semibold text-white">{{ summaryTeerBonded.toFixed(2) }}</p>
              </dd>
            </div>

            <div class="relative overflow-hidden">
              <dt>
                <div class="absolute rounded-md bg-gray-800 p-3">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <p class="ml-16 truncate text-xs font-medium text-gray-400">Total TEERdays active</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-4xl font-semibold text-white">{{ summaryTeerDays.toFixed(2) }}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div v-if="accounts.length" class="py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <h1 class="title mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Wallet Details
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
                  <span class="text-sm text-gray-300">{{
                    accountStore.getAddress
                  }}</span>
                </div>
              </div>
            </div>

            <div v-if="selectedAccount">
              <div v-if="isFetchingTeerBalance">
                <div
                  class="spinner border-t-transparent border-solid animate-spin rounded-full border-gray-400 border-4 h-8 w-8">
                </div>
              </div>

              <div v-else class=" mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div>
                    <div class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-5">
                      <dl class="flex flex-wrap">
                        <div class="w-full flex flex-col md:flex-row justify-between px-6 pt-6">
                          <div class="flex-auto mb-4 md:mb-0">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">
                              Current bond
                            </dt>
                            <dd class="mt-1 text-base font-semibold leading-6 text-white">
                              {{
                                currentBond ? currentBond.getTeerBonded() : 0
                              }}
                              TEER
                            </dd>
                          </div>

                          <div class="flex-auto text-left md:text-right">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">
                              Accumulated TEERdays
                            </dt>
                            <dd class="mt-1 text-base font-semibold leading-6 text-white">
                              {{ currentBond ? currentBond.getTeerDays() : 0 }}
                              TEERdays
                            </dd>
                          </div>
                        </div>

                        <div class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-6">
                          <dt class="text-sm font-semibold leading-6 text-gray-300">
                            Transferrable
                          </dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31">{{
                              accountStore.getHumanTransferrable
                              }}
                              TEER</time>
                          </dd>
                        </div>

                        <div v-if="accountStore.frozen > 0" class="flex w-full flex-none gap-x-4 px-6">
                          <dt class="text-sm font-semibold leading-6 text-gray-300">
                            Locked
                          </dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31">{{ accountStore.getHumanFrozen }} TEER</time>
                          </dd>
                        </div>

                        <div v-if="accountStore.reserved > 0" class="flex w-full flex-none gap-x-4 px-6">
                          <dt class="text-sm font-semibold leading-6 text-gray-300">
                            Reserved
                          </dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31">{{ accountStore.getHumanReserved }} TEER</time>
                          </dd>
                        </div>

                        <div v-if="pendingUnlock" class="w-full flex justify-between flex-col md:flex-row px-6 pt-6">
                          <div class="flex-auto mb-4 md:mb-0">
                            <div class="flex w-full flex-none gap-x-4">
                              <dt class="text-sm font-semibold leading-6 text-gray-300">
                                Pending unlock
                              </dt>
                              <dd class="text-sm leading-6 text-gray-400">
                                <time datetime="2023-01-31">{{
                                  pendingUnlock
                                    ? pendingUnlock.getTeerToUnlock()
                                    : 0
                                }}
                                  TEER</time>
                              </dd>
                            </div>

                            <div class="flex w-full flex-none gap-x-4">
                              <dt class="text-sm font-semibold leading-6 text-gray-300">
                                Unlocked on
                              </dt>
                              <dd class="text-sm leading-6 text-gray-400">
                                <time datetime="2023-01-31">{{
                                  pendingUnlock?.getDueDateStr()
                                }}</time>
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
                      <div class="text-sm font-medium leading-6 text-gray-300">
                        Bond TEER to accumulate TEERdays
                      </div>
                      <div v-if="accountStore.getTransferrable < Math.pow(10, 9)" class="text-sm text-red-500">
                        Not enough transferrable TEER. Please get free test TEER
                        at our
                        <a :href="'https://substratefaucet.xyz/integritee/' +
                          accountStore.getAddress
                          " target="_blank" class="text-indigo-500 underline">testnet faucet</a>.
                      </div>
                      <div v-else-if="pendingUnlock" class="text-sm text-red-500">
                        Can't bond more during unbonding period
                      </div>
                      <div v-else>
                        <form @submit.prevent="bondAmount" class="space-y-2">
                          <div class="flex flex-col sm:flex-row sm:space-x-2">
                            <input type="number" v-model="amountToBond" placeholder="Enter amount to bond" required
                              class="flex-grow rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6" />
                            <button type="submit"
                              class="w-full sm:w-40 mt-5 sm:mt-0 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 btn btn_gradient">
                              Bond!
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="form-container mt-8" v-if="currentBond">
                      <div class="text-sm font-medium leading-6 text-gray-300">
                        Unbond TEER
                      </div>

                      <div v-if="pendingUnlock" class="text-sm text-red-500">
                        Not possible until pending unlock expired and withdrawn.
                      </div>

                      <div v-else class="space-y-2">
                        <form @submit.prevent="unbondAmount" class="space-y-2">
                          <div class="flex flex-col sm:flex-row sm:space-x-2">
                            <input type="number" v-model="amountToUnbond" placeholder="Enter amount to unbond" required
                              class="flex-grow rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6" />
                            <button type="submit"
                              class="w-full sm:w-40 mt-5 sm:mt-0 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 btn btn_gradient">
                              Unbond!
                            </button>
                          </div>
                        </form>
                        <p class="mt-2 text-xs text-gray-500" id="email-description">
                          Unbonded TEER will be locked for 7 days.
                        </p>
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



    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-10">
<div class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20">
  <div class="flex items-center">
    <div class="flex-1">
      <h1 class="title text-3xl font-bold tracking-tight text-white sm:text-4xl">
        TEERdays Intro​
      </h1>
      <p class="mt-4 text-gray-300">
        By bonding your TEER now, you can accumulate TEERdays for the
        launch of Incognitee. TEERdays are calculated by the amount of
        TEER * with the number of days bonded. You can unbond your TEER
        anytime within 7 days, but you will lose 90%-100% of the
        accumulated TEERdays as a penalty. During the unlock period,
        you're not accumulating TEERdays. TEERdays are non-transferable.
        Start now to get the best position for the Incognitee launch. ​
      </p>
    </div>
  </div>
</div>


<div class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20">

        <div class="flex items-center">
          <div class="flex-1">
            <h1 class="title text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why collect TEERdays?​
            </h1>
            <p class="mt-4 text-gray-300">
              TEERdays can be used to increase your revenue share for the launch of Incognitee on Polkadot/Kusama and
              will also increase your governance voting power for future decisions related to Incognitee. ​
            </p>
          </div>

        </div>
      </div>

      <div class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20">
        <div class="flex items-center">
          <div class="flex-1">
            <h1 class="title text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How to participate?​​
            </h1>
            <p class="mt-6 text-gray-300">
              1. First you need to possess some TEER. Grab them at one of the
              avenues like Kraken, Gate or Basilisk. ​<br />

              2. Download the Polkadot JS browser Extension and connect your
              wallet. ​​<br />

              3. Transfer TEER to your wallet. ​​<br />

              4. Bond your TEER here ( link to wallet)​​<br />

              5. Start automatically collecting TEERdays​​<br />

              6. Refer a friend ​
            </p>
          </div>

        </div>
      </div>

      <div class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20">
        <div class="flex items-center">
          <div class="flex-1">
            <h1 class="title text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rules
            </h1>
            <ul class="list-disc list-outside text-gray-300 mt-6 px-4">
              <li>You can bond as many TEER as you like​</li>
              <li>You can unbond any time with a 7-day unbonding period​</li>
              <li>
                You will not accumulate any TEERdays during the unbonding
                period​
              </li>
              <li>
                You will lose a % of your TEERdays if you unbond your TEER pro
                rata of the unbonded amount​
              </li>
              <li>TEERdays are non-transferable​</li>
              <li>
                TEERdays are calculated as follows:​<br />
                Amount of TEER * with the number of days bonded = TEERdays​<br />
                Example: 20 TEER * 7 days = 140 TEERdays​
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    
    
   
    <div class="mt-20 mx-auto max-w-7xl">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="title text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Leaderboard​​
      </h1>
      <!-- Wrapper-Div für 10px Padding links und rechts -->
      <div class=" mt-10"> <!-- px-2 entspricht 10px Padding -->
        <table class="min-w-full divide-y divide-gray-700 border border-gray-800 rounded-lg">
          <thead>
            <tr>
              <th scope="col" class="px-4 py-4 text-left text-sm font-semibold text-white">
                Rank
              </th>
              <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-white">
                TEERdays
              </th>
              <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-white">
                Wallet
              </th>
              <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-white">
                TEER bonded
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-800">
            <tr v-for="(entry, index) in allBonds" :key="index">
              <td class="whitespace-nowrap px-4 py-4 text-sm font-medium text-white">
                {{ index + 1 }}
              </td>
              <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-300">
                {{ entry[2].toFixed(2) }}
              </td>
              <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-300">
                {{ entry[0] }}
              </td>
              <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-300">
                {{ entry[1].toFixed(2) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
  <hr class="my-20 border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent">


  <footer class="w-full" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <img class="h-7" src="/img/index/incognitee-mask.svg" alt="Incognitee">

      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Insights</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Guides</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">API Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Press</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Claim</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 class="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
        <p class="mt-2 text-sm leading-6 text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
      </div>
      <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label for="email-address" class="sr-only">Email address</label>
        <input type="email" name="email-address" id="email-address" autocomplete="email" required class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6" placeholder="Enter your email">
        <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button type="submit" class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
      </form>
    </div>
    <div class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
      <div class="flex space-x-6 md:order-2">
        <a href="#" class="text-gray-500 hover:text-gray-400">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-400">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-400">
          <span class="sr-only">X</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-400">
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-400">
          <span class="sr-only">YouTube</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">&copy; 2020 Your Company, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { onMounted, ref, watch } from "vue";
import { useAccount } from "@/store/teerAccount.ts";
import { useInterval } from "@vueuse/core";

const accountStore = useAccount();

const accounts = ref([]);
const selectedAccount = ref(null);
const currentBond = ref(null);
const pendingUnlock = ref(null);
const allBonds = ref([]);
const summaryHolders = ref(0);
const summaryTeerBonded = ref(0);
const summaryTeerDays = ref(0);

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

onMounted(async () => {
  console.log("trying to init api");
  const wsProvider = new WsProvider("wss://paseo.api.integritee.network");
  api = await ApiPromise.create({ provider: wsProvider });
  console.log("api initialized");
  allBonds.value = [];
  cryptoWaitReady().then(() => {
    api.query.teerDays.teerDayBonds.entries().then((entries) => {
      entries.forEach(([key, maybeBond]) => {
        console.log(key.args + " " + maybeBond);
        let account = key.args[0];
        let lastUpdated = new Date(0);
        let bond = maybeBond.unwrap();
        lastUpdated.setUTCMilliseconds(bond.lastUpdated.toNumber());
        let mybond = new Bond(
          bond.value / Math.pow(10, 12),
          lastUpdated,
          bond.accumulatedTokentime / Math.pow(10, 12) / 86400 / 1000,
        );
        mybond.updateTeerDays();
        console.log(mybond);
        allBonds.value.push([
          account,
          mybond.teerBonded,
          mybond.accumulatedTeerDays,
          42,
        ]);
      });
      // sort descending by value
      allBonds.value = allBonds.value.sort((a, b) => b[2] - a[2]);
      console.log(allBonds.value);
      summaryTeerBonded.value = allBonds.value.reduce(
        (acc, val) => acc + val[1],
        0,
      );
      summaryTeerDays.value = allBonds.value.reduce(
        (acc, val) => acc + val[2],
        0,
      );
      summaryHolders.value = allBonds.value.length;
      console.log(summaryHolders.value);
    });
  });
});

const isFetchingTeerBalance = ref(true);

watch(accountStore, async () => {
  //todo! only reinitialize if account changes
  if (accountStore.getAddress === "none") {
    console.log("skipping api init. no address");
    return;
  }
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
    if (currentBond.value?.getTeerBonded() > 0) {
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
  const amount = amountToUnbond.value * Math.pow(10, 12);
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

import { ref } from "vue";

import { XMarkIcon } from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";



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
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  /* Hides the arrows in Firefox */
}

.evervault-card {
  background-color: #1c1c26;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

</style>
