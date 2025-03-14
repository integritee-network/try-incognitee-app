<template>
  <div class="py-24 sm:py-32 container">
    <div class="mx-auto max-w-7xl">
      <div
        class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"
      >
        <div class="mx-auto w-full max-w-xl lg:mx-0 mt-10">
          <h2
            class="title text-4xl font-bold tracking-tight text-white mt-16 sm:mt-15 lg:mt-7 sm:text-6xl"
          >
            Secure. <br />
            Anonymous. <br />
            Decentralized.
          </h2>
          <p class="mt-6 text-gray-300">
            A new era of digital currency transfer is about to come. Our
            <a class="text-incognitee-green" href="https://incognitee.io"
              >Incognitee</a
            >
            Web3 solution empowers you to make secure, private, and anonymous
            transactions without compromising control over your assets.
            <br /><br />
            Collect TEERdays now and save the pole position for the Incognitee
            (stable) Go-Live.
          </p>
          <div
            class="wallet-grid mx-auto mt-10 grid max-w-lg grid-cols-2 gap-x-3 gap-y-3 sm:max-w-xl sm:grid-cols-4 sm:gap-x-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            <a href="https://talisman.xyz/download"
              ><img
                class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
                src="/img/index/talisman-logo.svg"
                alt="talisman"
            /></a>
            <a href="https://novawallet.io/"
              ><img
                class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
                src="/img/index/nova-wallet-logo.svg"
                alt="nova wallet"
            /></a>
            <a href="https://www.subwallet.app/"
              ><img
                class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
                src="/img/index/sub-wallet-logo.svg"
                alt="sub wallet"
            /></a>
            <a href="https://polkadot.js.org/extension/"
              ><img
                class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
                src="/img/index/polkadotjs-logo.svg"
                alt="polkajs"
            /></a>
          </div>
        </div>
        <div class="hidden sm:block sm:pl-40 mx-auto w-full max-w-xl lg:mx-0">
          <img
            class="col-span-1 w-80 w-full object-contain lg:col-span-1"
            src="/img/index/incognitee-wallet.png"
            alt="polkajs"
          />
        </div>
      </div>
      <div class="mt-10 flex">
        <a href="/?app=teerdays" target="_blank">
          <button
            class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white mr-5"
          >
            Start Collecting
          </button>
        </a>

        <a href="https://incognitee.io" target="_blank">
          <button
            class="incognitee-blue ring-1 ring-inset ring-incognitee-green rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-incognitee-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-incognitee-green"
          >
            What is Incognitee?
          </button>
        </a>
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
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div
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
          <dt class="text-base font-normal text-gray-300">Total TEER bonded</dt>
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div
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
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div
              class="flex items-baseline text-2xl font-semibold text-incognitee-green"
            >
              {{ formatBigDecimalBalance(summaryTeerDays) }}
            </div>
          </dd>
        </div>
      </dl>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-10">
      <div
        class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20"
      >
        <div class="flex items-center">
          <div class="flex-1">
            <h1
              class="title text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              TEERdays Intro
            </h1>
            <p class="mt-4 text-gray-300">
              By bonding your TEER now, you can already accumulate TEERdays
              prior to the launch of
              <a class="text-incognitee-green" href="https://incognitee.io"
                >Incognitee</a
              >. TEERdays are calculated by multiplying the amount of TEER by
              the number of days bonded. You can unbond your TEER anytime within
              7 days, but you will lose a fraction of the accumulated TEERdays
              if you do. TEERdays are non-transferable. Start now to get the
              best position for the Incognitee launch. ​
            </p>
          </div>
        </div>
      </div>

      <div
        class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20"
      >
        <div class="flex items-center">
          <div class="flex-1">
            <h1
              class="title text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Why collect TEERdays?​
            </h1>
            <p class="mt-4 text-gray-300">
              TEERdays can be used to increase your revenue share for the launch
              of
              <a class="text-incognitee-green" href="https://incognitee.io"
                >Incognitee</a
              >
              on Polkadot/Kusama and will also increase your governance voting
              power for future decisions related to Incognitee.
            </p>
          </div>
        </div>
      </div>

      <div
        class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20"
      >
        <div class="flex items-center">
          <div class="flex-1">
            <h1
              class="title text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              How to participate?​​
            </h1>
            <p class="mt-6 text-gray-300">
              1. First, you need to possess some TEER. Grab them at one of the
              avenues like
              <a
                class="text-incognitee-green"
                href="https://www.kraken.com/prices/integritee?quote=usd&interval=24h"
                >Kraken</a
              >,
              <a
                class="text-incognitee-green"
                href="https://www.gate.io/de/trade/TEER_USDT"
                >Gate</a
              >
              or
              <a
                class="text-incognitee-green"
                href="https://app.basilisk.cloud/trade?assetIn=1&assetOut=17"
                >Basilisk</a
              >​<br />

              2. Get one of the supported wallets and connect your wallet​​<br />

              3. Transfer TEER to your wallet​​<br />

              4. Bond your TEER using this current page<br />

              5. Start automatically collecting TEERdays<br />

              6. Refer a friend (coming soon)
            </p>
          </div>
        </div>
      </div>

      <div
        class="sm:col-span-3 rounded-xl p-6 border border-incognitee-green bg-cover bg-no-repeat shadow-2xl shadow-blue-500/20"
      >
        <div class="flex items-center">
          <div class="flex-1">
            <h1
              class="title text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Rules
            </h1>
            <ul class="list-disc list-outside text-gray-300 mt-6 px-4">
              <li>You can bond as many TEER as you like​</li>
              <li>You can unbond any time with a 7-day unbonding period​</li>
              <li>
                You will not accumulate any TEERdays during the unbonding period
              </li>
              <li>
                You can’t bond any additional TEER during the unbonding period
              </li>
              <li>
                You will lose a % of your TEERdays if you unbond your TEER pro
                rata of the unbonded amount​
              </li>
              <li>TEERdays are non-transferable</li>
              <li>
                TEERdays are calculated as follows:<br />
                Amount of TEER times the number of days bonded = TEERdays<br />
                Example: 20 TEER * 7 days = 140 TEERdays
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 mx-auto max-w-7xl">
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
                <tbody class="text-left">
                  <tr
                    v-for="(entry, index) in allBonds.slice(0, 10)"
                    :key="index"
                    :class="{
                      'bg-gray-700': index % 2 === 0, // Jede zweite Zeile grau
                      'bg-gray-800': index % 2 !== 0, // Jede andere Zeile dunkelgrau
                    }"
                    class="rounded-lg shadow text-left"
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

  <footer class="footer mt-5">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column footer__column_about">
          <NuxtLink to="/" class="footer__logo">
            <Logo />
          </NuxtLink>
          <p class="footer__description">
            The fastest, most scalable and secure Web3 network bringing the
            vision of a trustless, decentralized future for all.
          </p>
          <Socials />
        </div>
        <div class="footer__columns-row">
          <div class="footer__column">
            <div class="footer__column-title">TEER Token</div>
            <div class="footer__column-list">
              <a
                :href="KRAKEN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Kraken
              </a>
              <a
                :href="GATE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Gate.io
              </a>
              <a
                :href="BASILISK_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Basilisk
              </a>
              <a
                :href="COIN_MARKET_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                CoinMarketCap
              </a>
              <a
                :href="COIN_GECKO_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                CoinGecko
              </a>
              <a
                :href="TRADING_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                TradingView
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Network</div>
            <div class="footer__column-list">
              <a
                :href="GOVERNANCE_FOOTER_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Governance
              </a>
              <a
                :href="SUBSCAN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Integritee Subscan
              </a>
              <a
                :href="INTEGRITEE_NETWORK_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Integritee Network
              </a>
              <a
                :href="BUGBOUNTY_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Bug Bounty
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Resources</div>
            <div class="footer__column-list">
              <a
                :href="TOKENOMICS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Tokenomics
              </a>
              <a
                :href="DOCS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Documentation
              </a>
              <a
                :href="LIGHTPAPER_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Lightpaper
              </a>
              <a
                :href="HELP_CENTER_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Help Center
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Community</div>
            <div class="footer__column-list">
              <a
                :href="TELEGRAM_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Telegram
              </a>
              <a
                :href="TWITTER_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Twitter
              </a>
              <a
                :href="DISCORD_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Discord
              </a>
              <a
                :href="YOUTUBE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                YouTube
              </a>
              <a
                :href="MEDIUM_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Medium
              </a>
              <a
                :href="REDDIT_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                Reddit
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Company</div>
            <div class="footer__column-list">
              <NuxtLink
                to="https://www.integritee.network/about#join"
                class="footer__column-link text-link"
              >
                Jobs
              </NuxtLink>
              <NuxtLink
                to="https://www.integritee.network/about#roadmap"
                class="footer__column-link text-link"
              >
                Roadmap
              </NuxtLink>
              <a
                :href="LINKEDIN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__column-link text-link"
              >
                LinkedIn
              </a>
              <!--              <a href="/" target="_blank" class="footer__column-link text-link">-->
              <!--                Contacts-->
              <!--              </a>-->
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="paragraph_medium"
          >©{{ new Date().getFullYear() }} Integritee, Inc.</span
        >
        <span>
          <NuxtLink
            to="https://integritee.network/privacy-policy"
            class="blue paragraph_medium"
            >Imprint and Privacy Policy</NuxtLink
          >
        </span>
      </div>
    </div>
  </footer>

  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo/index.vue";
import Socials from "@/components/Socials/index.vue";
import {
  BASILISK_LINK,
  BUGBOUNTY_LINK,
  COIN_GECKO_LINK,
  COIN_MARKET_LINK,
  DISCORD_LINK,
  DOCS_LINK,
  GATE_LINK,
  GOVERNANCE_FOOTER_LINK,
  HELP_CENTER_LINK,
  INTEGRITEE_NETWORK_LINK,
  KRAKEN_LINK,
  LIGHTPAPER_LINK,
  LINKEDIN_LINK,
  MEDIUM_LINK,
  REDDIT_LINK,
  SUBSCAN_LINK,
  TELEGRAM_LINK,
  TOKENOMICS_LINK,
  TRADING_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from "@/configs/app.config";

import { ApiPromise, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAccount } from "@/store/account.ts";
import { chainConfigs, TEER_DECIMALS } from "@/configs/chains.ts";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { loadEnv, teerdaysNetwork } from "@/lib/environmentConfig";
import { Bond } from "@/lib/teerDays";
import ChooseWalletOverlay from "~/components/overlays/ChooseWalletOverlay.vue";
import InfoBanner from "~/components/ui/InfoBanner.vue";
import { definePageMeta } from "#imports";
import { formatBigDecimalBalance } from "@/helpers/numbers.ts";

// don't use header and footer. plain layout with just a logo in the top left corner
definePageMeta({
  layout: "landing",
});

const accountStore = useAccount();
const router = useRouter();
const accounts = ref([]);
const allBonds = ref([]);
const summaryHolders = ref(0);
const summaryTeerBonded = ref(0);
const summaryTeerDays = ref(0);

let api: ApiPromise | null = null;

const subscribeToTeerDayStats = async () => {
  const wsProvider = new WsProvider(chainConfigs[teerdaysNetwork.value].api);
  console.log(
    "trying to init api at " + chainConfigs[teerdaysNetwork.value].api,
  );
  api = await ApiPromise.create({ provider: wsProvider });
  accountStore.setDecimals(Number(api.registry.chainDecimals));
  accountStore.setSS58Format(Number(api.registry.chainSS58));
  accountStore.setSymbol(String(api.registry.chainTokens));
  console.log("api initialized");
  allBonds.value = [];
  cryptoWaitReady().then(() => {
    api.query.teerDays.teerDayBonds.entries().then((entries) => {
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
  });
};

onMounted(async () => {
  loadEnv();
  subscribeToTeerDayStats();
});
</script>

<style scoped>
.wallet-address {
  display: block;
  white-space: nowrap; /* Verhindert Zeilenumbruch */
  overflow: hidden; /* Versteckt überlaufenden Text */
  text-overflow: ellipsis; /* Zeigt '...' bei zu langem Text an */
  max-width: 10ch; /* Maximale Länge: 10 Zeichen */
}

/* Für größere Bildschirme (ab 641px) */
@media (min-width: 641px) {
  .wallet-address {
    max-width: 10ch; /* Begrenze auch hier auf 10 Zeichen */
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
    gap: 50px;

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
