<template>
  <div class="p-3">
    <div class="flex mb-3 justify-between items-center">
      <button
        @click="eventBus.emit('toggleSidebar')"
        class="lg:hidden text-white focus:outline-none text-2xl"
        id="sidebar-open"
      >
        ☰
      </button>
      <div class="lg:hidden">
        <WalletNumber />
      </div>
    </div>
    <InfoBanner
      v-if="!accountStore.hasInjector"
      :isMobile="props.isMobile"
      textMobile="You need some signer extension to use this page securely. Please make sure to
        enable your extension and reload the page in case the connect button
        doesn't work."
      textDesktop="You need some signer extension to use this page securely. Please make sure to
        enable your extension and reload the page in case the connect button
        doesn't work."
    />

    <div class="container">
      <!-- interaction with the wallet -->
      <div
        v-if="accountStore.hasInjector"
        ref="walletSection"
        id="wallet"
        class="py-10 sm:py-10"
      >
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h1
              class="title mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              My TEERdays
            </h1>

            <div class="mt-5">
              <div v-if="isFetchingTeerBalance">
                <div
                  class="spinner border-t-transparent border-solid animate-spin rounded-full border-gray-400 border-4 h-8 w-8"
                ></div>
              </div>
              <div v-else class="mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div>
                    <div
                      class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-5"
                    >
                      <dl class="flex flex-wrap">
                        <div
                          class="w-full flex flex-col md:flex-row justify-between px-6 pt-6"
                        >
                          <div class="flex-auto mb-4 md:mb-0">
                            <dt
                              class="text-sm font-semibold leading-6 text-gray-300"
                            >
                              Current bond
                            </dt>
                            <dd
                              class="mt-1 text-base font-semibold leading-6 text-white"
                            >
                              {{
                                currentBond ? currentBond.getTeerBonded() : 0
                              }}
                              TEER
                            </dd>
                          </div>

                          <div class="flex-auto text-left md:text-right">
                            <dt
                              class="text-sm font-semibold leading-6 text-gray-300"
                            >
                              Accumulated TEERdays
                            </dt>
                            <dd
                              class="mt-1 text-base font-semibold leading-6 text-white"
                            >
                              {{ currentBond ? currentBond.getTeerDays() : 0 }}
                              TEERdays
                            </dd>
                          </div>
                        </div>

                        <div
                          class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-6"
                        >
                          <dt
                            class="text-sm font-semibold leading-6 text-gray-300"
                          >
                            Transferrable
                          </dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31"
                              >{{ transferableBalance }} TEER</time
                            >
                          </dd>
                        </div>

                        <div
                          v-if="
                            accountStore.getDecimalBalanceFrozen(
                              teerdaysChainNativeAsset,
                              12,
                            ) > 0
                          "
                          class="flex w-full flex-none gap-x-4 px-6"
                        >
                          <dt
                            class="text-sm font-semibold leading-6 text-gray-300"
                          >
                            Locked
                          </dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31"
                              >{{
                                accountStore.formatBalanceFrozen(
                                  teerdaysChainNativeAsset,
                                  12,
                                )
                              }}
                              TEER</time
                            >
                          </dd>
                        </div>

                        <div
                          v-if="
                            accountStore.getDecimalBalanceReserved(
                              teerdaysChainNativeAsset,
                              12,
                            ) > 0
                          "
                          class="flex w-full flex-none gap-x-4 px-6"
                        >
                          <dt
                            class="text-sm font-semibold leading-6 text-gray-300"
                          >
                            Reserved
                          </dt>
                          <dd class="text-sm leading-6 text-gray-400">
                            <time datetime="2023-01-31"
                              >{{
                                accountStore.formatBalanceReserved(
                                  teerdaysChainNativeAsset,
                                  12,
                                )
                              }}
                              TEER</time
                            >
                          </dd>
                        </div>

                        <div
                          v-if="pendingUnlock"
                          class="w-full flex justify-between flex-col md:flex-row px-6 pt-6"
                        >
                          <div class="flex-auto mb-4 md:mb-0">
                            <div class="flex w-full flex-none gap-x-4">
                              <dt
                                class="text-sm font-semibold leading-6 text-gray-300"
                              >
                                Pending unlock
                              </dt>
                              <dd class="text-sm leading-6 text-gray-400">
                                <time datetime="2023-01-31"
                                  >{{
                                    pendingUnlock
                                      ? pendingUnlock.getTeerToUnlock()
                                      : 0
                                  }}
                                  TEER</time
                                >
                              </dd>
                            </div>

                            <div class="flex w-full flex-none gap-x-4">
                              <dt
                                class="text-sm font-semibold leading-6 text-gray-300"
                              >
                                Unlocked on
                              </dt>
                              <dd class="text-sm leading-6 text-gray-400">
                                <time datetime="2023-01-31">{{
                                  pendingUnlock?.getDueDateStr()
                                }}</time>
                              </dd>
                            </div>
                          </div>

                          <div
                            v-if="pendingUnlock?.canWithdraw()"
                            class="flex-auto text-left md:text-right gap-x-4"
                          >
                            <button
                              @click="withdrawUnbonded"
                              class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white btn btn_gradient"
                            >
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
                      <div
                        v-if="transferableBalance < 0.0001"
                        class="text-sm text-red-500"
                      >
                        Not enough transferable TEER.
                      </div>
                      <div
                        v-else-if="pendingUnlock"
                        class="text-sm text-red-500"
                      >
                        Can't bond more during unbonding period
                      </div>
                      <div v-else>
                        <form @submit.prevent="bondAmount" class="space-y-2">
                          <div class="flex flex-col sm:flex-row sm:space-x-2">
                            <input
                              type="number"
                              v-model="amountToBond"
                              placeholder="Enter amount to bond"
                              step="0.1"
                              :min="0.1"
                              :max="transferableBalance - 0.1"
                              required
                              class="flex-grow rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6"
                            />
                            <button
                              type="submit"
                              class="w-full sm:w-40 mt-5 sm:mt-0 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 btn btn_gradient"
                            >
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
                            <input
                              type="number"
                              v-model="amountToUnbond"
                              placeholder="Enter amount to unbond"
                              step="0.1"
                              :min="0.1"
                              :max="currentBond.teerBonded"
                              required
                              class="flex-grow rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6"
                            />
                            <button
                              type="submit"
                              class="w-full sm:w-40 mt-5 sm:mt-0 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 btn btn_gradient"
                            >
                              Unbond!
                            </button>
                          </div>
                        </form>
                        <p
                          class="mt-2 text-xs text-gray-500"
                          id="email-description"
                        >
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

      <hr
        class="my-20 border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
      />

      <div class="mb-20">
        <dl
          class="mt-5 grid grid-cols-1 divide-y divide-gray-700 overflow-hidden rounded-lg bg-gray-800 shadow md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <div class="px-4 py-5 sm:p-6">
            <svg
              class="h-6 w-6 mb-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <dt class="text-base font-normal text-gray-300">TEERday holders</dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div v-if="summaryHolders === null" class="spinner"></div>
              <div
                v-else
                class="flex items-baseline text-2xl font-semibold text-incognitee-green"
              >
                {{ summaryHolders }}
              </div>
            </dd>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <svg
              class="h-6 w-6 mb-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <dt class="text-base font-normal text-gray-300">
              Total TEER bonded
            </dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div v-if="summaryTeerBonded === null" class="spinner"></div>
              <div
                v-else
                class="flex items-baseline text-2xl font-semibold text-incognitee-green"
              >
                {{ formatBigDecimalBalance(summaryTeerBonded) }}
              </div>
            </dd>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <svg
              class="h-6 w-6 mb-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            <dt class="text-base font-normal text-gray-300">
              Total TEERdays active
            </dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div v-if="summaryTeerDays === null" class="spinner"></div>
              <div
                v-else
                class="flex items-baseline text-2xl font-semibold text-incognitee-green"
              >
                {{ formatBigDecimalBalance(summaryTeerDays) }}
              </div>
            </dd>
          </div>
        </dl>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-10">
        <!-- Accordion 1: TEERdays Intro -->
        <div class="sm:col-span-6">
          <button
            class="accordion-header text-left text-white bg-gray-800 w-full p-4 rounded-md"
            @click="toggleAccordion(1)"
          >
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              TEERdays Intro
            </h2>
          </button>
          <transition name="smooth-accordion">
            <div
              v-show="activeAccordion === 1"
              class="accordion-content p-6 border border-incognitee-green bg-gray-900 rounded-md shadow-2xl shadow-blue-500/20"
            >
              <p class="text-gray-300 mt-4">
                By bonding your TEER now, you can already accumulate TEERdays
                prior to the launch of Incognitee. TEERdays are calculated by
                multiplying the amount of TEER by the number of days bonded. You
                can unbond your TEER anytime within 7 days, but you will lose a
                fraction of the accumulated TEERdays if you do. TEERdays are
                non-transferable. Start now to get the best position for the
                Incognitee launch.
              </p>
            </div>
          </transition>
        </div>

        <!-- Accordion 2: Why collect TEERdays? -->
        <div class="sm:col-span-6">
          <button
            class="accordion-header text-left text-white bg-gray-800 w-full p-4 rounded-md"
            @click="toggleAccordion(2)"
          >
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Why collect TEERdays?
            </h2>
          </button>
          <transition name="smooth-accordion">
            <div
              v-show="activeAccordion === 2"
              class="accordion-content p-6 border border-incognitee-green bg-gray-900 rounded-md shadow-2xl shadow-blue-500/20"
            >
              <p class="text-gray-300 mt-4">
                TEERdays can be used to increase your revenue share for the
                launch of Incognitee on Polkadot/Kusama and will also increase
                your governance voting power for future decisions related to
                Incognitee.
              </p>
            </div>
          </transition>
        </div>

        <!-- Accordion 3: How to participate? -->
        <div class="sm:col-span-6">
          <button
            class="accordion-header text-left text-white bg-gray-800 w-full p-4 rounded-md"
            @click="toggleAccordion(3)"
          >
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              How to participate?
            </h2>
          </button>
          <transition name="smooth-accordion">
            <div
              v-show="activeAccordion === 3"
              class="accordion-content p-6 border border-incognitee-green bg-gray-900 rounded-md shadow-2xl shadow-blue-500/20"
            >
              <p class="text-gray-300 mt-4">
                1. First, you need to possess some TEER. Grab them at one of the
                avenues like
                <a
                  href="https://www.kraken.com/prices/integritee?quote=usd&interval=24h"
                  class="text-blue-400 underline"
                  >Kraken</a
                >,
                <a
                  href="https://www.gate.io/de/trade/TEER_USDT"
                  class="text-blue-400 underline"
                  >Gate</a
                >, or
                <a
                  href="https://app.basilisk.cloud/trade?assetIn=1&assetOut=17"
                  class="text-blue-400 underline"
                  >Basilisk</a
                >. <br />
                2. Get one of the supported wallets and connect your wallet.
                <br />
                3. Transfer TEER to your wallet. <br />
                4. Bond your TEER using this current page. <br />
                5. Start automatically collecting TEERdays. <br />
                6. Refer a friend (coming soon).
              </p>
            </div>
          </transition>
        </div>

        <!-- Accordion 4: Rules -->
        <div class="sm:col-span-6">
          <button
            class="accordion-header text-left text-white bg-gray-800 w-full p-4 rounded-md"
            @click="toggleAccordion(4)"
          >
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Rules</h2>
          </button>
          <transition name="smooth-accordion">
            <div
              v-show="activeAccordion === 4"
              class="accordion-content p-6 border border-incognitee-green bg-gray-900 rounded-md shadow-2xl shadow-blue-500/20"
            >
              <ul class="list-disc list-outside text-gray-300 mt-6 px-4">
                <li>You can bond as many TEER as you like</li>
                <li>You can unbond any time with a 7-day unbonding period</li>
                <li>
                  You will not accumulate any TEERdays during the unbonding
                  period
                </li>
                <li>
                  You can’t bond any additional TEER during the unbonding period
                </li>
                <li>
                  You will lose a % of your TEERdays if you unbond your TEER pro
                  rata of the unbonded amount
                </li>
                <li>TEERdays are non-transferable</li>
                <li>
                  TEERdays are calculated as follows:<br />
                  Amount of TEER times the number of days bonded = TEERdays
                  <br />
                  Example: 20 TEER * 7 days = 140 TEERdays
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <div class="my-40 mx-auto max-w-7xl">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <div class="mt-10">
              <h1
                class="title text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Leaderboard​​
              </h1>
              <!-- Verwende kleinere obere Randabstände auf mobilen Geräten -->
              <div class="mt-4 sm:mt-10 overflow-x-auto">
                <table class="rounded-table min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left text-sm font-semibold text-white"
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-right text-sm font-semibold text-white"
                      >
                        TEERdays
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left text-sm font-semibold text-white"
                      >
                        Wallet
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-right text-sm font-semibold text-white"
                      >
                        TEER bonded
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(entry, index) in allBonds.slice(0, 10)"
                      :key="index"
                      :class="{
                        'bg-gray-700': index % 2 === 0, // Jede zweite Zeile grau
                        'bg-gray-800': index % 2 !== 0, // Jede andere Zeile dunkelgrau
                      }"
                      class="rounded-lg shadow"
                    >
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm font-medium text-white text-left"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm text-gray-300 text-right"
                      >
                        {{ formatBigDecimalBalance(entry[2]) }}
                      </td>
                      <td
                        class="wallet-address whitespace-nowrap px-4 py-4 text-sm text-gray-300 text-left"
                      >
                        {{ entry[0] }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm text-gray-300 text-right"
                      >
                        {{ formatBigDecimalBalance(entry[1]) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
        <transition
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="showStatusOverlay"
            class="bg-cover bg-no-repeat shadow-blue-500/20 pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-800 border-incognitee-green shadow-lg ring-1 ring-incognitee-green"
          >
            <div class="p-4">
              <div class="flex items-start">
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="mt-1 text-sm text-gray-300">{{ txStatus }}</p>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    @click="showStatusOverlay = false"
                    class="inline-flex rounded-md bg-gray-800 text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { web3FromAddress } from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { onMounted, onUnmounted, computed, ref, watch, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useAccount } from "~/store/account.ts";
import { formatDecimalBalance } from "~/helpers/numbers";
import { useSystemHealth } from "~/store/systemHealth.ts";
import { chainConfigs, TEER_DECIMALS } from "~/configs/chains.ts";
import { useInterval } from "@vueuse/core";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { eventBus } from "~/helpers/eventBus";
import {
  teerdaysNetwork,
  teerdaysChainNativeAsset,
} from "~/lib/environmentConfig";
import { Bond, PendingUnlock } from "~/lib/teerDays";
import InfoBanner from "~/components/ui/InfoBanner.vue";
import { formatBigDecimalBalance } from "~/helpers/numbers.ts";
import HealthIndicator from "~/components/ui/HealthIndicator.vue";
import TokenIndicator from "~/components/ui/TokenIndicator.vue";
import WalletNumber from "~/components/ui/WalletIndicator.vue";

const activeAccordion = ref(null);

const toggleAccordion = (index) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

const accountStore = useAccount();
const systemHealth = useSystemHealth();
const router = useRouter();
const currentBond = ref(null);
const pendingUnlock = ref(null);
const allBonds = ref([]);
const summaryHolders = ref(null);
const summaryTeerBonded = ref(null);
const summaryTeerDays = ref(null);

const dropSubscriptions = async () => {
  console.log("dropping subscriptions");
  integriteeNetworkApi?.disconnect();
  integriteeNetworkApi = null;
  isFetchingTeerBalance.value = false;
};

watch(
  () => accountStore.getAddress,
  async () => await onExtensionAccountChange(),
);
const onExtensionAccountChange = async () => {
  await dropSubscriptions();
  console.log(
    "re-subscribing to TEERday data using account:",
    accountStore.getAddress,
  );
  await subscribeToTeerDayStats();
  if (accountStore.getAddress === "none") {
    console.log("skipping api init. no address");
    return;
  }
  await integriteeNetworkApi.query.system.account(
    accountStore.getAddress,
    ({
      data: {
        free: currentFree,
        reserved: currentReserved,
        frozen: currentFrozen,
      },
    }) => {
      console.log("TEER balance:" + currentFree);
      console.log(
        "chainAssetId: " + JSON.stringify(teerdaysChainNativeAsset.value),
      );
      accountStore.setBalanceFree(
        BigInt(currentFree),
        teerdaysChainNativeAsset.value,
      );
      accountStore.setBalanceReserved(
        BigInt(currentReserved),
        teerdaysChainNativeAsset.value,
      );
      accountStore.setBalanceFrozen(
        BigInt(currentFrozen),
        teerdaysChainNativeAsset.value,
      );
      isFetchingTeerBalance.value = false;
    },
  );
  await integriteeNetworkApi.query.teerDays.teerDayBonds(
    accountStore.getAddress,
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
          bond.value / Math.pow(10, TEER_DECIMALS),
          lastUpdated,
          bond.accumulatedTokentime /
            Math.pow(10, TEER_DECIMALS) /
            86400 /
            1000,
        );
        currentBond.value.updateTeerDays();
      } else {
        console.log("TEERday bond not found");
        currentBond.value = null;
      }
    },
  );
  await integriteeNetworkApi.query.teerDays.pendingUnlock(
    accountStore.getAddress,
    ({ value: timestamp_amount }) => {
      console.log("TEER pending unlock:" + timestamp_amount);
      if (timestamp_amount[1]) {
        let unlockDate = new Date(0);
        const unlockEpoch = timestamp_amount[0].toNumber();
        unlockDate.setUTCMilliseconds(unlockEpoch);
        console.log("Unlock date:" + unlockDate + "epoch:" + unlockEpoch);
        pendingUnlock.value = new PendingUnlock(
          timestamp_amount[1] / Math.pow(10, TEER_DECIMALS),
          unlockDate,
        );
      } else {
        pendingUnlock.value = null;
      }
    },
  );
};

let integriteeNetworkApi: ApiPromise | null = null;

const subscribeToTeerDayStats = async () => {
  const wsProvider = new WsProvider(chainConfigs[teerdaysNetwork.value].api);
  console.log(
    "trying to init api at " + chainConfigs[teerdaysNetwork.value].api,
  );
  integriteeNetworkApi = await ApiPromise.create({ provider: wsProvider });
  console.log("api initialized");
  allBonds.value = [];
  cryptoWaitReady().then(() => {
    integriteeNetworkApi.query.teerDays.teerDayBonds
      .entries()
      .then((entries) => {
        entries.forEach(([key, maybeBond]) => {
          //console.debug(key.args + " " + maybeBond);
          let account = key.args[0];
          let lastUpdated = new Date(0);
          let bond = maybeBond.unwrap();
          lastUpdated.setUTCMilliseconds(bond.lastUpdated.toNumber());
          let mybond = new Bond(
            bond.value / Math.pow(10, TEER_DECIMALS),
            lastUpdated,
            bond.accumulatedTokentime /
              Math.pow(10, TEER_DECIMALS) /
              86400 /
              1000,
          );
          mybond.updateTeerDays();
          //console.debug(mybond);
          allBonds.value.push([
            account,
            mybond.teerBonded,
            mybond.accumulatedTeerDays,
            42,
          ]);
        });
        // sort descending by value
        allBonds.value = allBonds.value.sort((a, b) => b[2] - a[2]);
        //console.debug(allBonds.value);
        summaryTeerBonded.value = allBonds.value.reduce(
          (acc, val) => acc + val[1],
          0,
        );
        summaryTeerDays.value = allBonds.value.reduce(
          (acc, val) => acc + val[2],
          0,
        );
        summaryHolders.value = allBonds.value.length;
        //console.log(summaryHolders.value);
      });
    integriteeNetworkApi.rpc.chain.subscribeNewHeads((lastHeader) => {
      systemHealth.observeIntegriteeBlockNumber(lastHeader.number.toNumber());
    });
  });
};

onMounted(async () => {
  await onExtensionAccountChange();
});

onUnmounted(async () => {
  await dropSubscriptions();
});

const isFetchingTeerBalance = ref(true);

const amountToBond = ref(0);
const bondAmount = () => {
  // Handle the bonding process here
  const amount =
    BigInt(amountToBond.value) * BigInt(Math.pow(10, TEER_DECIMALS));
  console.log(`Bonding ${amount}`);
  txStatus.value = "⌛ Bonding. Please sign the transaction in your wallet.";
  openStatusOverlay();
  web3FromAddress(accountStore.getAddress).then((injector) => {
    if (currentBond.value?.getTeerBonded() > 0) {
      integriteeNetworkApi.tx.teerDays
        .bondExtra(amount)
        .signAndSend(
          accountStore.getAddress,
          { signer: injector.signer },
          txResHandlerIntegritee,
        )
        .catch(txErrHandlerIntegritee);
    } else {
      integriteeNetworkApi.tx.teerDays
        .bond(amount)
        .signAndSend(
          accountStore.getAddress,
          { signer: injector.signer },
          txResHandlerIntegritee,
        )
        .catch(txErrHandlerIntegritee);
    }
  });
};
const amountToUnbond = ref(0);
const unbondAmount = () => {
  // Handle the bonding process here
  const amount =
    BigInt(amountToUnbond.value) * BigInt(Math.pow(10, TEER_DECIMALS));
  console.log(`Unbonding ${amount}`);
  txStatus.value = "⌛ Unbonding. Please sign the transaction in your wallet.";
  openStatusOverlay();
  web3FromAddress(accountStore.getAddress).then((injector) => {
    integriteeNetworkApi.tx.teerDays
      .unbond(amount)
      .signAndSend(
        accountStore.getAddress,
        { signer: injector.signer },
        txResHandlerIntegritee,
      )
      .catch(txErrHandlerIntegritee);
  });
};

const withdrawUnbonded = () => {
  // Handle the bonding process here
  console.log(`Withdrawing`);
  txStatus.value =
    "⌛ Withdrawing. Please sign the transaction in your wallet.";
  openStatusOverlay();
  web3FromAddress(accountStore.getAddress).then((injector) => {
    integriteeNetworkApi.tx.teerDays
      .withdrawUnbonded()
      .signAndSend(
        accountStore.getAddress,
        { signer: injector.signer },
        txResHandlerIntegritee,
      )
      .catch(txErrHandlerIntegritee);
  });
};

const refreshCounter = useInterval(1000);

watch(refreshCounter, async () => {
  //console.log("ping: " + refreshCounter.value);
  currentBond.value?.updateTeerDays();
});

const transferableBalance = computed(() => {
  const balance = accountStore.getDecimalBalanceTransferable(
    teerdaysChainNativeAsset,
    12,
  );
  return formatDecimalBalance(balance);
});

const txStatus = ref("");
const showStatusOverlay = ref(false);

// Open the status overlay (notification)
const openStatusOverlay = () => {
  showStatusOverlay.value = true;
};

// Close the status overlay after a delay (e.g., 5 seconds)
const closeStatusOverlay = () => {
  setTimeout(() => {
    showStatusOverlay.value = false;
  }, 5000); // 5 seconds delay
};

const txResHandlerIntegritee = ({ events = [], status, txHash }) => {
  if (status.isFinalized) {
    txStatus.value = `😀 Finalized!`;

    // Close the overlay automatically after 5 seconds
    closeStatusOverlay();
  } else {
    txStatus.value = `⌛ Current transaction status: ${status.type}. Please be patient a few more seconds.`;
  }

  // Loop through Vec<EventRecord> to display all events
  events.forEach(({ _, event: { data, method, section } }) => {
    if (section + ":" + method === "system:ExtrinsicFailed") {
      // Extract the data for this event
      const [dispatchError, dispatchInfo] = data;
      console.log(`dispatchinfo: ${dispatchInfo}`);
      let errorInfo;

      // Decode the error
      if (dispatchError.isModule) {
        const mod = dispatchError.asModule;
        const error = integriteeNetworkApi.registry.findMetaError(
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
      txStatus.value = `😞 Transaction failed! ${section}.${method}::${errorInfo}.`;
    } else if (section + ":" + method === "system:ExtrinsicSuccess") {
      txStatus.value = `❤️️ Transaction successful!`;
      // Close the overlay automatically after 5 seconds if successful
      closeStatusOverlay();
    }
  });
};

const txErrHandlerIntegritee = (err) => {
  txStatus.value = `😞 Transaction failed: ${err.toString()}.`;
};

const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.accordion-header {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.accordion-header:hover {
  background-color: #1a1a1a;
}

.accordion-content {
  overflow: hidden;
}

.smooth-accordion-enter-active,
.smooth-accordion-leave-active {
  transition: max-height 0.3s ease;
}

.smooth-accordion-enter,
.smooth-accordion-leave-to {
  max-height: 0;
}

.smooth-accordion-enter-to,
.smooth-accordion-leave {
  max-height: 1000px; /* Set a large enough height for content expansion */
}

.wallet-address {
  display: block;
  white-space: nowrap; /* Verhindert Zeilenumbruch */
  overflow: hidden; /* Versteckt überlaufenden Text */
  text-overflow: ellipsis; /* Zeigt '...' bei zu langem Text an */
}

/* Für mobile Bildschirme (max-width: 640px) */
@media (max-width: 640px) {
  .wallet-address {
    max-width: 10ch; /* Zeigt nur die ersten 5 Zeichen */
  }
}

/* Für größere Bildschirme (ab 641px) */
@media (min-width: 641px) {
  .wallet-address {
    max-width: none; /* Zeigt die komplette Adresse an */
  }
}

.rounded-table {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: separate;
  /* Necessary for rounded corners */
  border-spacing: 0 10px;
  /* Space between rows */
}

.rounded-table thead th {
  /* Header background color */
  padding: 15px;
  color: #ffffff;
  /* Lighter text for header */
  font-weight: bold;
}

.rounded-table tbody tr {
  background-color: #1b1d26;
  /* Row background */
}

.rounded-table tbody td {
  padding: 15px;
  background-color: #1b1d26;
  /* Matches row background */
}

.rounded-table tbody tr td.rounded-left {
  border-top-left-radius: 10px;
  /* Top-left corner */
  border-bottom-left-radius: 10px;
  /* Bottom-left corner */
}

.rounded-table tbody tr td.rounded-right {
  border-top-right-radius: 10px;
  /* Top-right corner */
  border-bottom-right-radius: 10px;
  /* Bottom-right corner */
}

.rounded-table tbody tr td:nth-child(3),
.rounded-table tbody tr td:nth-child(4) {
  /* Align text to the right for points and prize */
}

.rounded-table tbody tr td .icon {
  margin-right: 10px;
  /* Space between icon and text */
  color: #8c8e9c;
  /* Icon color */
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

.footer {
  margin-top: 50px;
}

.footer {
  &__logo {
    display: block;

    margin-bottom: 19px;

    @include slg {
      width: 117px;
      height: 24px;
      margin-bottom: 26px;
    }

    @include md {
      margin-bottom: 0;
      width: 144px;
      height: 30px;
      flex-shrink: 0;
    }

    @include sm {
      margin-bottom: 24px;
      width: 117px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: auto;
    }
  }

  &__row {
    display: block; /* Default for mobile */

    /* Media Query for Desktop */
    @media (min-width: 768px) {
      /* Adjust the pixel value according to your breakpoint */
      display: flex;
      gap: 48px;
    }
  }

  &__column {
    @media screen and (max-width: 660px) {
      margin-bottom: 24px;
      width: 50%;

      &:first-child {
        width: 100%;

        .footer__column-list {
          display: flex;
          flex-wrap: wrap;
        }

        .footer__column-link {
          width: 50%;
        }
      }

      &:nth-last-child(1),
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }

    @include xsm {
      &:first-child {
        width: 100% !important;

        .footer__column-link {
          width: 125px;
        }

        .footer__column-list {
          justify-content: space-between;
        }
      }

      width: 125px !important;
    }

    &_about {
      flex-shrink: 0;
      max-width: 255px;
      font-size: 1.125em;

      @include slg {
        font-size: 0.875em;
      }

      @include md {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        width: 100%;
        gap: 24px;
        margin-bottom: 35px;
        font-size: 0.75em;
      }

      @include sm {
        display: block;
        margin-bottom: 24px !important;
        font-size: 0.875em;
      }
    }

    &:last-child {
      width: auto;

      @media screen and (max-width: 660px) {
        width: 50%;
      }
    }
  }

  &__column-link {
    display: block;
    line-height: 150%;
    margin-bottom: 14px;
    font-size: 1.125em;

    @include slg {
      font-size: 1em;
    }

    @include sm {
      font-size: 0.875em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__columns-row {
    display: flex;
    gap: 82px;

    @include lg {
      gap: 52px;
    }

    @include slg {
      gap: 32px;
    }

    @include md {
      justify-content: space-between;
    }

    @media screen and (max-width: 660px) {
      gap: 0;
      flex-wrap: wrap;
    }
  }

  &__description {
    line-height: 150%;
    margin-bottom: 19px;

    @include slg {
      margin-bottom: 26px;
    }

    @include md {
      margin-bottom: 0;
      max-width: 415px;
      margin-right: auto;
    }

    @include sm {
      margin-bottom: 24px;
      max-width: 100%;
    }
  }

  &__column-title {
    color: #88888c;
    margin-bottom: 32px;
    line-height: 150%;
    font-size: 1.125em;

    @include slg {
      margin-bottom: 24px;
    }

    @include md {
      margin-bottom: 16px;
    }

    @include sm {
      font-size: 0.875em;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 36px 0;
    margin-top: 36px;
    border-top: 2px solid $alphaGray;

    @include md {
      padding: 24px 0;
      margin-top: 24px;
    }

    a {
      transition: 0.3s ease;

      &:hover {
        color: #7ca8ff;
      }
    }
  }
}

@media (max-width: 640px) {
  .wallet-grid a:nth-child(3),
  .wallet-grid a:nth-child(4) {
    margin-top: 20px;
  }
}
</style>
