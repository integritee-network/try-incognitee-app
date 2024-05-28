<template>
  <div class="container">
    <div>Receive</div>
    <div class="qrcode-container">
      <qrcode class="qrcode" :value="accountStore.getAddress"></qrcode>
    </div>
    <div>
      <p>your address: {{accountStore.getAddress}} <button @click="copyToClipboard">⧉</button></p>
    </div>
    <div>
      <a
        href="https://faucet.polkadot.io/paseo"
        target="_blank"
        class="btn btn_gradient"
      >
        Get free PAS tokens from faucet (L1)
      </a>
    </div>
    <NuxtLink
      to="/wallet"
      class="btn btn_gradient mt-8"
    >back
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Import your components and add your setup logic here
import Qrcode from "vue-qrcode";
import {useAccount} from "@/store/account.ts";
const accountStore = useAccount();


const copyToClipboard = () => {
  navigator.clipboard
    .writeText(accountStore.getAddress)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please paste it into the address field on the Paseo faucet.",
      ),
    );
};

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 20vh); /* Adjust based on your header and footer height */
}

.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 20vh); /* Adjust based on your header and footer height */
}
.qrcode {
  width: min(90vw, 80vh);
  height: min(90vw, 80vh);
}
</style>
