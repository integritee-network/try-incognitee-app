<!-- components/CreateWalletTab.vue -->
<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class=''>
          <div class='text-4xl mt-10 mb-10'>Invite a friend</div>
          <div class='text-lg'>
            By clicking the ”Invite Friend” button, you perform a private transfer of 30% of your
            available ROC from your Incognitee wallet to another wallet with an invite link. You can share this with
            your friends and let them participate.
          </div>
          <div class="flex flex-cols-2 ">
            <div class='mt-10 mr-8'>
              <UButton class="btn btn_gradient" @click="inviteFriend">Invite Friend</UButton>
            </div>
            <div class='mt-10'>
              <div class="flex items-center">
                <input type="text" ref="urlToShareWithFriend" class="dynamic-width border-2 border-gray-200 p-2"
                       style="color: black;" :value="inviteUrl" readonly>
                <button @click="copyToClipboard" class="button ml-10">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Keyring} from '@polkadot/keyring'
import {mnemonicGenerate, mnemonicToMiniSecret} from '@polkadot/util-crypto'
import {formatBalance, u8aToHex} from "@polkadot/util";
import { ref } from 'vue';

import { useAccount } from '@/store/account.ts'
import { useIncognitee } from '@/store/incognitee.ts'
const accountStore = useAccount()
const incogniteeStore = useIncognitee()

const inviteUrl = ref('click "invite friend" to generate a new wallet for them')

formatBalance.setDefaults({
  decimals: 10,
  unit: 'PAS'
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(inviteUrl.value).then(() => alert("copied invite url to clipboard. please share it with your friend"));
}
const inviteFriend = () => {
  console.log('creating wallet for your friend');
  const generatedMnemonic = mnemonicGenerate();
  const localKeyring = new Keyring({type: 'sr25519', ss58Format: 42});
  const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {name: 'fresh'});
  const seed = mnemonicToMiniSecret(generatedMnemonic);
  const privateKeyHex = u8aToHex(seed);
  console.log(`friend account ${newAccount.address} with private key in hex: ${privateKeyHex}`);
  inviteUrl.value = window.location.protocol + "//" + window.location.hostname + (window.location.port ? `:${window.location.port}` : '') + '/?seed=' + privateKeyHex

  console.log("sending 30% of your funds to your friend's account")
  let balance = accountStore.incogniteeBalance
  // todo! instead of sending 30% we should check fees explicitly and handle edge cases
  let amount = Math.floor(0.30 * balance)
  let signer = accountStore.account
  console.log(`sending ${formatBalance(amount)} from ${signer.address} privately to ${newAccount.address}`)
  incogniteeStore.api.trustedBalanceTransfer(
      signer,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      signer.address,
      newAccount.address,
      amount
  ).then((hash) => console.log(`trustedOperationHash: ${hash}`));
};
</script>

<style>
.button {
  display: flex;
padding: 14px 24px;
align-items: flex-start;
gap: 10px;
border-radius: 12px;
border: 2px solid var(--Transparent-White-20, rgba(255, 255, 255, 0.20));
backdrop-filter: blur(30px);
}

.dynamic-width::after {
  width: 500px;
    border-radius: 8px;
    border-color: #24ad7c;
    height: 55px;
}


  .dynamic-width {
    width: 500px;
    border-radius: 8px;
    border-color: #24ad7c;
    height: 55px;
}

</style>
