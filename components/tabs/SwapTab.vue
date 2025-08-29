<template>
  <div class="p-3">
    <h2 class="flex text-2xl font-bold tracking-tight text-white sm:text-2xl">
      Private Swaps
    </h2>

    <p class="my-4 mb-5 text-sm text-gray-400">
        COMING SOON<sup>TM</sup>
    </p>
    <p class="my-4 mb-10 text-sm ">
        Whenever you use a centralized exchange (CEX), you trust them to operate
        a fair market and protect your data. Even worse, you hand over custody
        over your assets to them. The upside is: fast trading and something like
        privacy (in the best case your exposing your data and behavior to one
        entity only, not to the public)
    </p>
    <p class="my-4 mb-5 text-sm ">
      If you need more autonomy, you may want to use decentralized exchanges
        (DEX). There, you keep custody over your assets and no single entity has
        the power to deny you access to the trading platform. However, this
        freedom comes with downsides: High latency and front-running
    </p>

    <p class="my-4 mb-10 text-sm ">
      Incognitee can support shielding of various digital assets and offer
        automated market makers (AMM, similar to uniswap) on L2. This will
        prevent front-running because no one can see the transactions before
        they are executed. It also offers enhanced speed because of subsecond
        block times on Incognitee
    </p>

  
  </div>
</template>
<script setup lang="ts">
import { eventBus } from "@/helpers/eventBus";
import { useResponsive } from '@/helpers/useResponsive';

const { isMobile, isMediumScreen } = useResponsive()

</script>
<style scoped>
h1 {
  font-size: 2em; /* Adjust as needed */
  padding: 10px 0px;
  font-weight: bold; /* Makes the text bold */
  color: #999; /* Change color as needed */
  text-align: center; /* Centers the text */
  margin-bottom: 20px; /* Adds space below the heading */
}

p {
  padding: 0px 0px; /* Adds 10px padding top and bottom, 20px padding left and right */
  line-height: 1.5; /* Increases the space between lines of text */
  color: #999; /* Change color as needed */
  text-align: justify;
}
</style>
