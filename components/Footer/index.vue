<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column footer__column_about">
          <NuxtLink to="/" class="footer__logo">
            <LogoIntegritee />
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
                class="footer__column-link text-link"
              >
                Kraken
              </a>
              <a
                :href="GATE_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Gate.io
              </a>
              <a
                :href="COIN_MARKET_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                CoinMarketCap
              </a>
              <a
                :href="COIN_GECKO_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                CoinGecko
              </a>
              <a
                :href="TRADING_LINK"
                target="_blank"
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
                class="footer__column-link text-link"
              >
                Governance
              </a>
              <a
                :href="SUBSCAN_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Integritee Subscan
              </a>
              <a
                :href="INTEGRITEE_NETWORK_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Integritee Network
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Resources</div>
            <div class="footer__column-list">
              <a
                :href="TOKENOMICS_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Tokenomics
              </a>
              <a
                :href="DOCS_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Documentation
              </a>
              <a
                :href="LIGHTPAPER_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Lightpaper
              </a>
              <a
                :href="HELP_CENTER_LINK"
                target="_blank"
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
                :href="WATERCOOLER_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Watercooler
              </a>
              <a
                :href="SUBSOCIAL_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Subsocial
              </a>
              <a
                :href="YOUTUBE_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                YouTube
              </a>
              <a
                :href="MEDIUM_LINK"
                target="_blank"
                class="footer__column-link text-link"
              >
                Medium
              </a>
              <a
                :href="REDDIT_LINK"
                target="_blank"
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
                target="_blank"
                class="footer__column-link text-link"
              >
                Jobs
              </NuxtLink>
              <NuxtLink
                to="https://www.integritee.network/about#roadmap"
                target="_blank"
                class="footer__column-link text-link"
              >
                Roadmap
              </NuxtLink>
              <a
                :href="LINKEDIN_LINK"
                target="_blank"
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
            to="https://www.integritee.network/privacy-policy"
            class="blue paragraph_medium"
            >Imprint and Privacy Policy</NuxtLink
          >
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Socials from "@/components/Socials/index.vue"
import {
  COIN_GECKO_LINK,
  COIN_MARKET_LINK,
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
  SUBSOCIAL_LINK,
  TOKENOMICS_LINK,
  TRADING_LINK,
  WATERCOOLER_LINK,
  YOUTUBE_LINK,
} from "@/configs/app.config"
</script>

<style lang="scss" scoped>
.footer {
  &__logo {
    display: block;
    width: 191px;
    height: 40px;
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
    display: flex;
    gap: 48px;

    @include md {
      display: block;
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
    color: $gray;
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
