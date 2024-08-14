<template>
  <div class="mt-3 text-center sm:mt-5">
    <span as="h3" class="text-base font-semibold leading-6 text-white"
      >TEERdays
    </span>

    <div class="mt-2">
      <p class="text-sm text-gray-400 text-justify">
        blabla
      </p>
      <!-- this is necessary to avoid the footer overlapping the text -->
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { onMounted, ref, watch } from "vue";

onMounted(() => {
  web3Enable('Integritee Dapp')
    .then((extensions) => {
      console.log(extensions);
      return web3Accounts();
    })
    .then((accounts) => {
      console.log(accounts);
    })
    .catch((error) => {
      console.error('Error in web3Enable or web3Accounts:', error);
    });
});
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
</style>
