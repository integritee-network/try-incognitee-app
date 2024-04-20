<!-- components/CreateWalletTab.vue -->
<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class='grid grid-rows-3 grid-flow-col gap-4'>
          <div class='text-4xl mt-10'>Shield PAS tokens to Incognitee</div>
          <div class='text-lg'>1. If you don’t own any ROC yet, follow the button below to obtain some ROC for free on
            {{ accountStore.getAddress }}.
            <br/> 2. if you already have some ROC you can shield them now to Incognitee.
          </div>
          <div class="grid grid-cols-2 gap-4 ">
            <div class='mt-4'>
              <NuxtLink to="https://faucet.polkadot.io/paseo" target="blank" class="btn btn_gradient">Get free PAS
                tokens
              </NuxtLink>
            </div>
            <div class='mt-4'>
              <UButton class="btn btn_gradient" @click="shield">Shield PAS to pPAS</UButton>
              <div>{{txStatus}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useAccount} from '@/store/account.ts'
import {useIncognitee} from '@/store/incognitee.ts'
import {onMounted, ref, watch} from 'vue'
import {ApiPromise, WsProvider} from "@polkadot/api";
import {Keyring} from "@polkadot/keyring";
import {hexToU8a} from "@polkadot/util";

const txStatus = ref(null)
const accountStore = useAccount()
const incogniteeStore = useIncognitee()
const emit = defineEmits(['change-tab'])
const txResHandler = ({events = [], status, txHash}) => {
  status.isFinalized
      ? txStatus.value = `😉 Finalized. please proceed to the next tab and invite a friend`
      : txStatus.value = `Current transaction status: ${status.type}`

  // Loop through Vec<EventRecord> to display all events
  events.forEach(({_, event: {data, method, section}}) => {
    if ((section + ":" + method) === 'system:ExtrinsicFailed') {
      // extract the data for this event
      const [dispatchError, dispatchInfo] = data;
      console.log(`dispatchinfo: ${dispatchInfo}`)
      let errorInfo;

      // decode the error
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        // (For specific known errors, we can also do a check against the
        // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
        const mod = dispatchError.asModule
        const error = api.registry.findMetaError(
            new Uint8Array([mod.index.toNumber(), bnFromHex(mod.error.toHex().slice(0, 4)).toNumber()])
        )
        let message = `${error.section}.${error.name}${
            Array.isArray(error.docs) ? `(${error.docs.join('')})` : error.docs || ''
        }`

        errorInfo = `${message}`;
        console.log(`Error-info::${JSON.stringify(error)}`)
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        errorInfo = dispatchError.toString();
      }
      txStatus.value = `😞 Transaction Failed! ${section}.${method}::${errorInfo}`
    } else if (section + ":" + method === 'system:ExtrinsicSuccess') {
      txStatus.value`❤️️ Transaction successful! please proceed to the next tab and invite a friend`
    }
  });
}

const txErrHandler = err =>
    txStatus.value = `😞 Transaction Failed: ${err.toString()}`
const shield = async () => {
  console.log('shielding 90% of all your PAS')
  if (incogniteeStore.vault) {
    let balance = accountStore.paseoBalance
    // todo! instead of sending 90% we should check fees and ED explicitly and handle edge cases
    let amount = Math.floor(0.9 * balance)
    console.log(`sending ${amount} to vault: ${incogniteeStore.vault}`);
    const wsProvider = new WsProvider('wss://paseo.rpc.amforc.com');
    const api = await ApiPromise.create({provider: wsProvider});
    console.log("api initialized for shielding")
    await api.tx.balances.transferKeepAlive(incogniteeStore.vault, amount).signAndSend(accountStore.account,txResHandler)
        .catch(txErrHandler)
  }
};

</script>
