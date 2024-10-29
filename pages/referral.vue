<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-10 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
    >
      <div class="w-full lg:w-4/5">
        <div class="mx-auto max-w-2xl lg:text-left">
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Invite Friends, Get Rewards!
          </p>
          <p class="mt-6 text-gray-300">
            Join our exclusive Incognitee TEERdays referral program! Share the
            love, invite your friends, and unlock amazing rewards in TEER. The
            more you refer, the more you earn. Don’t miss out—start sharing
            today and watch your perks pile up!
          </p>
        </div>
        <div class="mt-10 flex">
          <a href="https://try.incognitee.io/" target="_blank">
            <button
              class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white mr-5"
            >
              Try Incognitee
            </button>
          </a>

          <a href="/" target="_blank">
            <button
              class="incognitee-blue ring-1 ring-inset ring-incognitee-green rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-incognitee-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-incognitee-green"
            >
              Earn TEERdays
            </button>
          </a>
        </div>
        <dl
          class="grid grid-cols-2 border-t border-gray-700 my-8 sm:grid-cols-4"
        ></dl>

        <p class="text-xl font-bold tracking-tight text-white sm:text-xl">
          Current active referral campaign
        </p>
        <!-- Countdown Timer -->
        <div
          class="flex flex-wrap justify-between border-gray-700 pt-2 sm:grid sm:grid-cols-4"
        >
          <div class="flex flex-col items-center">
            <dt class="text-sm font-semibold leading-6 text-gray-400">Days</dt>
            <dd
              class="mt-2 text-3xl font-bold leading-10 tracking-tight text-white"
            >
              {{ countdown.days }}
            </dd>
          </div>
          <div class="flex flex-col items-center">
            <dt class="text-sm font-semibold leading-6 text-gray-400">Hours</dt>
            <dd
              class="mt-2 text-3xl font-bold leading-10 tracking-tight text-white"
            >
              {{ countdown.hours }}
            </dd>
          </div>
          <div class="flex flex-col items-center">
            <dt class="text-sm font-semibold leading-6 text-gray-400">
              Minutes
            </dt>
            <dd
              class="mt-2 text-3xl font-bold leading-10 tracking-tight text-white"
            >
              {{ countdown.minutes }}
            </dd>
          </div>
          <div class="flex flex-col items-center">
            <dt class="text-sm font-semibold leading-6 text-gray-400">
              Seconds
            </dt>
            <dd
              class="mt-2 text-3xl font-bold leading-10 tracking-tight text-white"
            >
              {{ countdown.seconds }}
            </dd>
          </div>
        </div>
      </div>

      <!-- Other content -->
      <div class="lg:pr-4">
        <div class="mx-auto max-w-2xl">
          <dl
            class="grid grid-cols-3 gap-x-8 gap-y-2 lg:gap-y-16 lg:grid-cols-3"
          >
            <div class="flex flex-col">
              <img
                class="col-span-1 h-40 lg:col-span-1"
                src="/img/index/prizes/prize1.svg"
                alt="prize1"
              />
            </div>
            <div class="flex flex-col">
              <img
                class="col-span-1 h-40 lg:col-span-1"
                src="/img/index/prizes/prize2.svg"
                alt="prize2"
              />
            </div>
            <div class="flex flex-col">
              <img
                class="col-span-1 h-40 lg:col-span-1"
                src="/img/index/prizes/prize3.svg"
                alt="prize3"
              />
            </div>
            <div class="flex flex-col">
              <img
                class="col-span-1 h-40 lg:col-span-1"
                src="/img/index/prizes/1000points.svg"
                alt="1000points"
              />
            </div>
            <div class="flex flex-col">
              <img
                class="col-span-1 h-40 lg:col-span-1"
                src="/img/index/prizes/400points.svg"
                alt="400points"
              />
            </div>
            <div class="flex flex-col">
              <img
                class="col-span-1 h-40 lg:col-span-1"
                src="/img/index/prizes/200points.svg"
                alt="200points"
              />
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="my-20">
      <div id="referralhero-dashboard-MFc4933b9201"></div>
    </div>

    <div class="my-20">
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Pointsystem
      </p>

      <div>
        <div class="mt-6 border-t border-white/10">
          <dl class="divide-y divide-white/10">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-white">
                200 Points
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
              >
                <span class="text-sm font-medium leading-6 text-white"
                  >Points conversion:</span
                >
                <br />
                <ul class="list-disc list-outside px-4">
                  <li>
                    an advocate earns when their referral reaches the confirmed
                    stage<br />
                  </li>
                </ul>
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-white">
                100 Points
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
              >
                <span class="text-sm font-medium leading-6 text-white"
                  >Points conversion:</span
                ><br />
                <ul class="list-disc list-outside px-4">
                  <li>
                    Points conversion: a person who has not been referred will
                    earn for signing up for your campaign<br />
                  </li>
                  <li>
                    Points conversion: a referral (i.e. a friend) will earn for
                    signing up for your campaign<br />
                  </li>
                  <li>
                    Points conversion: an advocate will earn for referring a
                    unique visitor<br />
                  </li>
                  <li>
                    Multi-level conversion: an advocate will earn for a
                    level-two confirmed referral<br />
                  </li>
                  <li>
                    Multi-level conversion: an advocate will earn for a
                    level-three confirmed referral
                  </li>
                </ul>
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-white">
                10 Points
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
              >
                <span class="text-sm font-medium leading-6 text-white"
                  >Points for social actions:</span
                >
                <br />
                <ul class="list-disc list-outside px-4">
                  <li>Join Discord<br /></li>
                  <li>Join Telegram<br /></li>
                </ul>
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-white">1 Point</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
              >
                <span class="text-sm font-medium leading-6 text-white"
                  >Points for social share action:</span
                ><br />
                <ul class="list-disc list-outside px-4">
                  <li>Twitter<br /></li>
                  <li>Telegram<br /></li>
                  <li>Linkedin<br /></li>
                  <li>Reddit<br /></li>
                  <li>Mail</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer">
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
              <NuxtLink to="/about#join" class="footer__column-link text-link">
                Jobs
              </NuxtLink>
              <NuxtLink
                to="/about#roadmap"
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
          <NuxtLink to="/privacy-policy" class="blue paragraph_medium"
            >Imprint and Privacy Policy</NuxtLink
          >
        </span>
      </div>
    </div>
  </footer>
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
import { ref, onMounted } from "vue";
import { definePageMeta } from "#imports";
// don't use header and footer. plain layout with just a logo in the top left corner
definePageMeta({
  layout: "landing",
});

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const startCountdown = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14); // Set countdown to 14 days from now

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = endDate.getTime() - now;

    // Time calculations for days, hours, minutes, and seconds
    countdown.value.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    countdown.value.minutes = Math.floor(
      (timeLeft % (1000 * 60 * 60)) / (1000 * 60),
    );
    countdown.value.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Stop the countdown when it reaches zero
    if (timeLeft < 0) {
      countdown.value.days = 0;
      countdown.value.hours = 0;
      countdown.value.minutes = 0;
      countdown.value.seconds = 0;
    }
  };

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
};

onMounted(() => {
  startCountdown();
});
</script>

<style scoped>
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
    display: block;
    /* Default for mobile */

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
</style>
