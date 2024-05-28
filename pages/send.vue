<template>
  <div class="container">
    <div>Send</div>
    <div class="mt-8">
      <form @submit.prevent="submitForm" class="form-container">
        <label for="address">Recipient:</label>
        <input id="address" v-model="address" type="text" required>
        <UButton class="btn btn_gradient" @click="openQrScanner">
          scan QR
        </UButton>
        <label for="amount" class="mt-8">Amount:</label>
        <p>available balance {{accountStore.getIncogniteeHumanBalance}}</p>
        <input id="amount" v-model="amount" type="number" step="0.01" min="0" required>
        <p>fee: 0.001 PAS</p>
        <button type="submit" class="btn btn_gradient">transfer</button>
      </form>
    </div>
    <div>

    </div>
    <div>
      <NuxtLink to="/wallet" class="btn btn_gradient mt-8">cancel</NuxtLink>
    </div>
  </div>
  <div v-if="showQrScanner" class="scanner-overlay">
    <div class="scanner">
      <h1 class="mb-8">Scan QR code</h1>

      <div class="qrcode-container">
        <qrcode-stream @detect="onDecode"></qrcode-stream>
      </div>
      <div><p>QRcode result: {{ result }}</p></div>
      <button @click="closeQrScanner" class="mt-8">cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import your components and add your setup logic here
import Qrcode from "vue-qrcode";
import {useAccount} from "@/store/account.ts";
import {QrcodeStream} from "vue-qrcode-reader";
import {ref} from "vue";

const address = ref('');

const submitForm = () => {
  // Handle the form submission here
  console.log(address.value);
};

const accountStore = useAccount();

const showQrScanner = ref(false);
const openQrScanner = () => {
  showQrScanner.value = true;
};
const closeQrScanner = () => {
  showQrScanner.value = false;
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

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.form-container input {
  background-color: #333;
  color: #fff; /* You might want to change the text color to ensure it's readable against the dark background */
}
.form-container input#amount {
  font-size: 2em; /* Make the font size twice as large */
  text-align: center; /* Center the text */
  width: 50%; /* Reduce the width by 50% */
}

.scanner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.scanner {
  background: #222;
  padding: 20px;
  width: 90%;
  border-radius: 10px;
}
</style>
