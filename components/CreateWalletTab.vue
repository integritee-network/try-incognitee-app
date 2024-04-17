<!-- components/CreateWalletTab.vue -->
<template>
 <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class='grid grid-rows-3 grid-flow-col gap-4'>
          <div class='text-4xl mt-10'>Create a Wallet</div>
    <div class='text-lg'>By clicking the “Create Wallet” button, you will create a new wallet on Rococo and Incognitee.</div>
<div>
		<UButton class="btn btn_gradient" @click="createWallet">Create a Wallet</UButton>
  </div>
  </div></div></div></section>
</template>

<script setup lang="ts">
import {Keyring} from '@polkadot/keyring'
import {mnemonicGenerate, mnemonicToMiniSecret} from '@polkadot/util-crypto'
import {u8aToHex} from "@polkadot/util";
import { ref } from 'vue';
import type {KeyringPair} from "@polkadot/keyring/types";
import { useAccount } from '@/store/account.ts'

const accountStore = useAccount()

const currentAccount = ref<KeyringPair | null>(null);
const createWallet = () => {
  // Your function logic goes here
  console.log('Button clicked!');

  const generatedMnemonic = mnemonicGenerate();
  //setMnemonic(generatedMnemonic); // Storing the mnemonic in state (hypothetically)
  const localKeyring = new Keyring({type: 'sr25519', ss58Format: 42});

  // Add account from mnemonic
  const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {name: 'fresh'});
  currentAccount.value = newAccount;
  // Create valid Substrate-compatible seed from mnemonic
  const seed = mnemonicToMiniSecret(generatedMnemonic);

  // Convert the private key to a hexadecimal string
  const privateKeyHex = u8aToHex(seed);
  console.log(`Private Key in Hex: ${privateKeyHex}`);

  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set('seed', privateKeyHex);
  const path = window.location.pathname;
  window.history.pushState({}, '', `${path}?${queryParams}`);

  accountStore.setAccount(newAccount)
  // Log the updated URL
  console.log('Updated URL:', window.location.href);
};

const getSeedFromURI = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('seed');
};

</script>
