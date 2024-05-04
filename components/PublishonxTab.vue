<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class=''>
          <div class='text-4xl mt-10 mb-10'>Publish on X</div>
          <div class='text-lg'>
            <div v-if="accountStore.incogniteeBalance == 0">
              <i><b>You have no balance on Incognitee. Please go back to step 2</b></i>
            </div>
            <div v-if="accountStore.paseoBalance == 0">
              <i><b>You have no balance on Paseo. Please go back to step 2</b></i>
            </div>

            By clicking the ”Check” button, you will be redirected to the Paseo Subscan Portal,
            where you have to check for your unshielding event.
            <div class='mt-5'>
              <template v-if="!isIndexerLinkDisabled">
                <NuxtLink :to="indexerLinkUrl" target="blank" class="btn btn_gradient">Check Public History</NuxtLink>
              </template>
              <template v-else>
                <NuxtLink to="" target="blank" class="btn btn_border">loading...</NuxtLink>
              </template>
            </div>
          </div>
          <div class='text-lg'>

            To be eligible for our prices, please tweet about our successful test using the button below. Make sure to
            include hashtag #incognitee and your account
            <div class='mt-5'>
              <template v-if="!isTwitterLinkDisabled">
                <NuxtLink :to="twitterLinkUrl" target="blank" class="btn btn_gradient">tweet about your success
                </NuxtLink>
              </template>
              <template v-else>
                <NuxtLink to="" target="blank" class="btn btn_border">loading...</NuxtLink>
              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue';
import {useAccount} from '@/store/account.ts'

const accountStore = useAccount()

const indexerLinkUrl = ref("");
const twitterLinkUrl = ref("");
const isIndexerLinkDisabled = ref(true);
const isTwitterLinkDisabled = ref(true);

const updateLinks = () => {
  if (accountStore.account) {
    const url = `https://paseo.subscan.io/account/${accountStore.getAddress}?tab=transfer`
    console.log("setting publish link to " + url)
    indexerLinkUrl.value = url
    isIndexerLinkDisabled.value = false

    const incogniteeUrl = encodeURIComponent("https://incognitee.io")
    const text = encodeURIComponent(`I have successfully tested #incognitee private token transfers with my account ${accountStore.getAddress}`)
    // todo! upload a tweet image using twitter API
    twitterLinkUrl.value = `https://twitter.com/intent/tweet?url=${incogniteeUrl}&text=${text}`
    isTwitterLinkDisabled.value = false
  }
}
watch(
    accountStore,
    updateLinks,
)

onMounted(updateLinks)

</script>
