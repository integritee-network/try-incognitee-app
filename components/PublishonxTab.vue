<template>
  <section id="steps">
    <div class="block steps">
      <div class="container">
        <div class="">
          <div class="text-4xl mt-10 mb-10">Tell the World - or Stay Anon</div>
          <div class="text-lg">
            <div v-if="accountStore.incogniteeBalance == 0">
              <i
                ><b
                  >You have no balance on Incognitee. Please go back to step 2
                  to collect more points</b
                ></i
              >
            </div>
            <div v-if="accountStore.paseoBalance == 0">
              <i
                ><b
                  >You have no balance on Paseo. Please go back to step 2 to
                  collect more points</b
                ></i
              >
            </div>
          </div>
          <div class="text-lg">
            To be eligible for our prices, please either tweet or send us a
            message over SimpleX. Tell the world about your successful test
            using the button below. Make sure to include hashtag #incognitee and
            your account
            <div class="mt-5">
              <template v-if="!isTwitterLinkDisabled">
                <NuxtLink
                  :to="twitterLinkUrl"
                  target="blank"
                  class="btn btn_gradient"
                  >tweet about your success
                </NuxtLink>
              </template>
              <template v-else>
                <NuxtLink to="" target="blank" class="btn btn_border"
                  >No account with a balance yet</NuxtLink
                >
              </template>
            </div>
            <div class="mt-5">
              If X is too centralized for you, we also accept posts on Nostr
              mentioning our profile and your test account
            </div>
            <div class="mt-5">
              <template v-if="!isTwitterLinkDisabled">
                <NuxtLink
                  to="https://njump.me/npub1teerer7l6q4aweperlunlgrn9jd5y956cuxkrpju6tmj3qsulvast0weax"
                  target="blank"
                  class="btn btn_gradient"
                  >post a note on nostr
                </NuxtLink>
                <div class="mt-5">
                  <textarea readonly class="template-textarea">
I have successfully tested #incognitee private token transfers on https://try.incognitee.io by @integritee with my account {{
                      accountStore.getAddress
                    }}</textarea
                  >
                </div>
              </template>
              <template v-else>
                <NuxtLink to="" target="blank" class="btn btn_border"
                  >No account with a balance yet</NuxtLink
                >
              </template>
            </div>

            <div class="mt-5">
              Or, if you prefer to stay anonymous, use one of the best private
              messengers out there.
            </div>
            <div class="mt-5">
              <template v-if="!isTwitterLinkDisabled">
                <NuxtLink
                  to="https://simplex.chat/contact#/?v=2-5&smp=smp%3A%2F%2F1OwYGt-yqOfe2IyVHhxz3ohqo3aCCMjtB-8wn4X_aoY%3D%40smp11.simplex.im%2FbXnLZ9ksJdcW3G_yRoo_0GZefWNjVzMI%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAkEgKgkeLKpJi-1y8iW19tvIIRYL6CiObZbp7pWR-4UE%253D%26srv%3D6ioorbm6i3yxmuoezrhjk6f6qgkc4syabh7m3so74xunb5nzr4pwgfqd.onion"
                  target="blank"
                  class="btn btn_gradient"
                  >send us a simpleX message
                </NuxtLink>
                <div class="mt-5">
                  <textarea readonly class="template-textarea">
Dear Integritee team. I have participated in the incognitee beta campaign with account {{
                      accountStore.getAddress
                    }}
                </textarea
                  >
                </div>
              </template>
              <template v-else>
                <NuxtLink to="" target="blank" class="btn btn_border"
                  >No account with a balance yet</NuxtLink
                >
              </template>
            </div>
            <div class="mt-5">
              In case of a win, we will reach out to you over the same channel
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useAccount } from "@/store/account.ts";

const accountStore = useAccount();

const indexerLinkUrl = ref("");
const twitterLinkUrl = ref("");
const isIndexerLinkDisabled = ref(true);
const isTwitterLinkDisabled = ref(true);

const updateLinks = () => {
  if (accountStore.account) {
    const url = `https://paseo.subscan.io/account/${accountStore.getAddress}?tab=transfer`;
    console.log("setting publish link to " + url);
    indexerLinkUrl.value = url;
    isIndexerLinkDisabled.value = false;

    const incogniteeUrl = encodeURIComponent("https://try.incognitee.io");
    const text = encodeURIComponent(
      `Just aced the #incognitee private token transfers test with my account ${accountStore.getAddress}! Join me and explore the beta test campaign run by @integri_t_e_e. Let's shape the future of @polkadot #privacy together!`,
    );
    // todo! upload a tweet image using twitter API
    twitterLinkUrl.value = `https://twitter.com/intent/tweet?url=${incogniteeUrl}&text=${text}`;
    isTwitterLinkDisabled.value = false;
  }
};
watch(accountStore, updateLinks);

onMounted(updateLinks);
</script>
<style scoped>
.template-textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  border-left: 10px solid #ccc;
  border-top: none;
  border-right: none;
  border-bottom: none;
  background-color: transparent;
  font-style: italic;
  font-size: 1em;
  line-height: 1.6;
  resize: none;
}
</style>
