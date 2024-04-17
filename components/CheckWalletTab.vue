<!-- components/CreateWalletTab.vue -->
<template>
   <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class='grid grid-rows-3 grid-flow-col gap-4'>
          <div class='text-4xl mt-10'>Shield PAS tokens to Incognitee</div>
    <div class='text-lg'>1. If you don’t own any ROC yet, follow the button below to obtain some ROC for free.
     <br/> ​​2. if you already have some ROC you can shield them now to Incognitee. ​​</div>
     <div class="grid grid-cols-2 gap-4 ">
      <div class='mt-4'>
		<NuxtLink to="https://faucet.polkadot.io/paseo" target="blank" class="btn btn_gradient">Get free PAS tokens</NuxtLink></div>
    <div class='mt-4'>
      <UButton class="btn btn_gradient" @click="shield">Shield PAS to pPAS</UButton>
  </div>
  </div></div></div></div></section>
</template>

<script setup lang="ts">

const shield = () => {
  console.log('shielding all your PAS');
};
</script>
