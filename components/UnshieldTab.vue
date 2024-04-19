<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class='grid grid-rows-3 grid-flow-col gap-4'>
          <div class='text-4xl mt-10'>Unshield</div>
    <div class='text-lg'>By clicking the ”Unshield” button, you perform a transfer of 30% of your incognitee balance to your Rococo wallet.</div>
    <div>
      <UButton class="btn btn_gradient" @click="unshieldFunds">Unshield Funds</UButton> </div></div>
  </div></div></section>
</template>

<script setup lang="ts">
import {formatBalance} from "@polkadot/util";

import { useAccount } from '@/store/account.ts'
import { useIncognitee } from '@/store/incognitee.ts'
const accountStore = useAccount()
const incogniteeStore = useIncognitee()

const emit = defineEmits(['change-tab'])

formatBalance.setDefaults({
  decimals: 10,
  unit: 'PAS'
});
const unshieldFunds = () => {
  console.log('will unshield 30% of your private funds to same account on L1');
  const balance = accountStore.incogniteeBalance
  // todo! instead of sending 30% we should check fees explicitly and handle edge cases
  const amount = 0.30 * balance
  const signer = accountStore.account
  console.log(`sending ${formatBalance(amount)} from ${signer.address} privately to self on L1 (shard: ${incogniteeStore.shard}`)
  incogniteeStore.api.balanceUnshieldFunds(
      signer,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      signer.address,
      signer.address,
      amount
  ).then((hash) => {
    console.log(`trustedOperationHash: ${hash}`)
    // todo! wait for evidence on L1
    emit('change-tab',4);
  });

  // todo! remove this and only change tab upon success above
  emit('change-tab',4);
};

</script>
