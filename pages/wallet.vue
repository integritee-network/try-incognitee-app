<template>
  <div class="wallet">
    <div class="currency-selector">
      <Polkadot class="currency-logo" />
      <Paseo class="currency-logo" />
      <USDC class="currency-logo" />
    </div>

    <div class="balance">
      <p>Balance: {{ balance }}</p>
    </div>

    <div class="buttons">
      <button class="receive">Receive</button>
      <button class="send">Send</button>
    </div>

    <div class="buttons">
      <button class="shield">Shield</button>
      <button class="unshield">Unshield</button>
    </div>

    <div class="balance">
      <p>Another Balance: {{ anotherBalance }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Polkadot from "@/assets/img/polkadot-logo.svg";
import Paseo from "@/assets/img/paseo-logo.svg";
import USDC from "@/assets/img/usdc-logo.svg";
// Import your components and add your setup logic here
// You will need to define and update the 'balance' and 'anotherBalance' variables
</script>

<style scoped>
.wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

.currency-selector {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.currency-logo {
  height: 50px; /* Adjust as needed */
  width: 50px; /* Adjust as needed */
}

.buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
