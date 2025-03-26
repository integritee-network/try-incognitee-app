<template>
  <div class="mt-3 sm:mt-5 px-3">
    <button
      @click="eventBus.emit('toggleSidebar')"
      class="lg:hidden text-white focus:outline-none text-2xl"
      id="sidebar-open"
    >
      ☰
    </button>
  </div>
  <div class="mt-3 text-center sm:mt-5 px-3">
    <span as="h3" class="text-base font-semibold leading-6 text-white"
      >Private Swaps
    </span>

    <div class="mt-2">
      <div class="text-sm text-gray-400 text-justify">
        COMING SOON<sup>TM</sup>
      </div>
      <div class="text-sm text-gray-400 text-justify my-3">
        Whenever you use a centralized exchange (CEX), you trust them to operate
        a fair market and protect your data. Even worse, you hand over custody
        over your assets to them. The upside is: fast trading and something like
        privacy (in the best case your exposing your data and behavior to one
        entity only, not to the public)
      </div>
      <div class="text-sm text-gray-400 text-justify my-3">
        If you need more autonomy, you may want to use decentralized exchanges
        (DEX). There, you keep custody over your assets and no single entity has
        the power to deny you access to the trading platform. However, this
        freedom comes with downsides: High latency and front-running
      </div>
      <div class="text-sm text-gray-400 text-justify my-3">
        Incognitee can support shielding of various digital assets and offer
        automated market makers (AMM, similar to uniswap) on L2. This will
        prevent front-running because no one can see the transactions before
        they are executed. It also offers enhanced speed because of subsecond
        block times on Incognitee
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { eventBus } from "@/helpers/eventBus";
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
</style>
