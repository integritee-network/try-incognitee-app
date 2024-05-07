<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class="grid gap-4">
          <div class="text-4xl mt-10">Unshield</div>
          <div class="text-lg">
            <div
              v-if="accountStore.incogniteeBalance < existential_deposit * 4"
            >
              <div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <ExclamationTriangleIcon
                      class="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm text-yellow-700">
                      Your balance on Incognitee is getting low. Please go back
                      to step 2 to top up
                      {{ " " }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              By clicking the ”Unshield” button, you perform a transfer of 30%
              of your Incognitee balance to your wallet on Paseo.
            </div>
            <div>
              <UButton class="mt-10 btn btn_gradient" @click="unshieldFunds"
                >Unshield Funds</UButton
              >
              <div>{{ topStatus }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatBalance } from "@polkadot/util";

import { useAccount } from "@/store/account.ts";
import { useIncognitee } from "@/store/incognitee.ts";
import { ref } from "vue";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const topStatus = ref("");
const existential_deposit = 10000000000;

const emit = defineEmits(["change-tab"]);

formatBalance.setDefaults({
  decimals: 10,
  unit: "PAS",
});
const unshieldFunds = () => {
  console.log("will unshield 30% of your private funds to same account on L1");
  topStatus.value =
    "⌛ will unshield 30% of your private funds to same account on L1";
  const balance = accountStore.incogniteeBalance;
  // todo! instead of sending 30% we should check fees explicitly and handle edge cases
  const amount = Math.floor(0.3 * balance);
  const signer = accountStore.account;
  console.log(
    `sending ${formatBalance(amount)} from ${
      signer.address
    } privately to self on L1 (shard: ${incogniteeStore.shard}`,
  );
  incogniteeStore.api
    .balanceUnshieldFunds(
      signer,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      signer.address,
      signer.address,
      amount,
    )
    .then((hash) => {
      topStatus.value =
        "😀 Triggered unshielding of funds successfully. please proceed to step 5";
      console.log(`trustedOperationHash: ${hash}`);
      // todo! wait for evidence on L1
      // emit('change-tab', 4);
    });

  // todo! remove this and only change tab upon success above
  // emit('change-tab', 4);
};
</script>
