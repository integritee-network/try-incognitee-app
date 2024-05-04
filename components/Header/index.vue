<template>
  <header class="header" :class="{ 'header_no-bg': active }">
    <div class="container">
      <NuxtLink to="/" class="header__logo">
        <Logo/>
      </NuxtLink>
      <div class="header__nav grid grid-cols-4 gap-8 content-start ">

        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_one">Wallet Address</span>
          <p>{{ accountStore.getShortAddress }}</p>
        </NuxtLink>

        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_two">Paseo Balance</span>
          <div v-if="isFetchingPaseoBalance && accountStore.getShortAddress != 'none'" class="spinner"></div>
          <div v-else>{{ accountStore.getPaseoHumanBalance }}</div>
        </NuxtLink>

        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_one">Incognitee Balance</span>
          <div v-if="isFetchingIncogniteeBalance && accountStore.getShortAddress != 'none'" class="spinner"></div>
          <div v-else>{{ accountStore.getIncogniteeHumanBalance }}</div>
        </NuxtLink>

        <NuxtLink v-if="width > breakpoints.slg" class="text-link paragraph_smll">
          <span class="gradient gradient_two">Incognitee Status</span>
          <template v-if="incogniteeStore.apiReady">
            <p>
              <UBadge label="Online"/>
            </p>
          </template>
          <template v-else>
            <p>
              <UBadge label="checking..." color="orange"/>
            </p>
          </template>
        </NuxtLink>

      </div>
      <div v-if="width > breakpoints.slg" class="header__nav-right">
        <Socials/>

        <button v-if="width <= breakpoints.slg" class="header__burger" :class="{
          active: active,
        }" type="button" @click="toggleMenu()">
          <div class="header__burger-line"/>
          <div class="header__burger-line"/>
          <div class="header__burger-line"/>
        </button>
      </div>
    </div>
  </header>
  <Menu v-if="width <= breakpoints.slg" :active="active" :clickHandler='toggleMenu'/>
</template>

<script setup lang="ts">
import {useNuxtApp, useRoute} from '#imports'
import Menu from '@/components/Header/Menu.vue'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'
import {breakpoints} from '@/configs/app.config'
import {useWindowScroll, useWindowSize} from '@vueuse/core'
import {onMounted, ref, watch} from 'vue'
import {useAccount} from '@/store/account.ts'
import {useIncognitee} from '@/store/incognitee.ts'
import {useInterval} from '@vueuse/core'
import {ApiPromise, WsProvider} from "@polkadot/api";

const pollCounter = useInterval(2000)

const accountStore = useAccount()
const incogniteeStore = useIncognitee()

const active = ref(false)
const isFetchingPaseoBalance = ref(true)
const isFetchingIncogniteeBalance = ref(true)

const {width} = useWindowSize()
const {y} = useWindowScroll()

const {$lockScroll} = useNuxtApp()

const route = useRoute()

const toggleMenu = () => {
  active.value = !active.value
  $lockScroll(active.value)
}

watch(
    route,
    () => {
      active.value = false
      $lockScroll(false)
    },
)

watch(
    pollCounter,
    async () => {
      console.log("ping: " + pollCounter.value)
      await fetchIncogniteeBalance()
    }
)

const fetchIncogniteeBalance = async () => {
  if (!incogniteeStore.apiReady) return
  if (!accountStore.account) return
  incogniteeStore.api.getBalance(accountStore.account, incogniteeStore.shard)
      .then((balance) => {
        console.log(`current account balance L2: ${balance} on shard ${incogniteeStore.shard}`)
        accountStore.setIncogniteeBalance(balance)
        isFetchingIncogniteeBalance.value = false;
      });
}

watch(
    accountStore,
    async () => {
      //todo! only reinitilize if account changes
      if (accountStore.getAddress === 'none') {
        console.log("skipping api init. no address")
        return
      }
      console.log("trying to init api")
      const wsProvider = new WsProvider('wss://rpc.ibp.network/paseo');
      const api = await ApiPromise.create({provider: wsProvider});
      api.query.system.account(accountStore.account.address, ({data: {free: currentFree}}) => {
        console.log("paseo balance:" + currentFree)
        accountStore.paseoBalance = Number(currentFree)
        isFetchingPaseoBalance.value = false;
      });
      fetchIncogniteeBalance().then(() => console.log("fetched incognitee balance"))
    }
)

onMounted(() => {
  incogniteeStore.initializeApi()
})
</script>

<style lang="scss">
.header__button {
  display: block;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 9px;
  padding: 10px 16px;
}

.gradient {
  display: inline-block;

  &_one {
    background: linear-gradient(90deg, #24ad7c -12.5%, #1845b9 41%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &_two {
    background: linear-gradient(90deg, #1845b9, #24ad7c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: linear-gradient(180deg, #0a0a0f 0%, rgba(10, 10, 15, 0) 100%);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  z-index: 10;
  transition: 0.3s ease;

  @include slg {
    padding: 21px 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {


    @include xsm {
      width: 118px;
    }

    svg {
      width: 100%;
    }

    &:hover {
      svg {
        &.blue-hover {
          background: #5B92FF;
        }
      }
    }
  }

  &__nav {
    @include slg {
      display: none;
    }

    a {
      font-size: 0.875em;


      @include lg {
        margin-left: 18px;
      }

      &:first-child {
        margin-left: 0;
      }
    }

    a.router-link-active {
      color: #5B92FF;
    }
  }

  &__nav-right {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__burger {
    width: 17px;
    cursor: pointer;
    background: 0;
    border: 0;
    padding: 0;
    flex-shrink: 0;

    &.active {
      .header__burger-line {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 3px;
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 3px;
        }
      }
    }
  }

  &__burger-line {
    position: relative;
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    /* transition: .3s ease; */

    &:last-child {
      margin-bottom: 0;
    }
  }

  &_no-bg {
    background: rgba(81, 81, 81, 0) !important;
  }
}

.header__nav {
  display: flex;
  flex-direction: row; // default to horizontal layout

  @media screen and (max-width: 660px) {
    flex-direction: column; // switch to vertical layout on mobile
  }
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
