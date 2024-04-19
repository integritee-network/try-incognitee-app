<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class='grid grid-rows-3 grid-flow-col gap-4'>
          <div class='text-4xl mt-10'>Publish on X</div>
          <div class='text-lg'>By clicking the ”Check” button, you will be redirected to the Rococo Subscan Portal,
            where you have to check for your unshielding event. Take a screenshot of this event and post it on X
            including the hashtag #incognitee together with a nice comment. ​
          </div>
          <div class='mt-5'>

            <!-- Use a conditional rendering to show/hide the link based on the disabled state -->
            <template v-if="!isLinkDisabled">
              <NuxtLink :to="linkUrl" target="blank" class="btn btn_gradient">Check</NuxtLink>
            </template>
            <template v-else>
              <NuxtLink to="" target="blank" class="btn btn_border">loading...</NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useAccount} from '@/store/account.ts'

const accountStore = useAccount()

const linkUrl = ref("https://paseo.subscan.io");
const isLinkDisabled = ref(true);

watch(
    accountStore,
    () => {
      if (accountStore.account) {
        const url = `https://paseo.subscan.io/account/${accountStore.getAddress}?tab=transfer`
        console.log("setting publish link to " + url)
        linkUrl.value = url
        isLinkDisabled.value = false
      }
    },
)

</script>
