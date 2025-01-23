<template>
  <div class="mt-3 sm:mt-5 px-3">
    <button
      @click="eventBus.emit('toggleSidebar')"
      class="lg:hidden text-white focus:outline-none text-2xl"
    >
      ☰
    </button>
  </div>
  <div class="px-5 py-5 sm:py-5 lg:px-5 lg:py-5">
    <h2 class="flex text-2xl font-bold tracking-tight text-white sm:text-2xl">
      Frequently Asked Questions
    </h2>

    <div
      class="flex mt-5 text-xl font-bold tracking-tight text-white sm:text-xl"
    >
      Introduction
    </div>
    <p class="my-4 mb-10 text-sm text-gray-400">
      Welcome to the FAQ section for Incognitee, your blockchain-based solution
      for private transfers and messages on the Polkadot network. Below, you'll
      find answers to the most common questions about our product, its features,
      and how it can benefit you.
    </p>
    <div v-for="(section, index) in faqSections" :key="index" class="mt-8">
      <h3
        class="flex text-lg font-bold tracking-tight text-green-400 sm:text-lg mb-5"
      >
        {{ section.title }}
      </h3>

      <!-- Fragen und Antworten -->
      <dl class="space-y-6 divide-y divide-white/10 px-4 py-2">
        <Disclosure
          as="div"
          v-for="faq in section.questions"
          :key="faq.question"
          v-slot="{ open }"
        >
          <dt>
            <DisclosureButton
              class="flex w-full justify-between text-left text-white my-5"
            >
              <span class="font-semibold">{{ faq.question }}</span>
              <span class="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  v-if="!open"
                  class="w-6 h-6"
                  aria-hidden="true"
                />
                <MinusSmallIcon v-else class="w-6 h-6" aria-hidden="true" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 mb-5 pr-12">
            <p class="text-sm text-gray-400">{{ faq.answer }}</p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
    <div
      class="flex mt-5 text-xl font-bold tracking-tight text-white sm:text-xl"
    >
      Need More Help?
    </div>
    <p class="my-4 mb-10 text-sm text-gray-400">
      If you have any additional questions or need support, please contact us at
      <a
        href="mailto:support@incognitee.io"
        class="text-incognitee-green hover:underline"
        >support@integritee.network</a
      >
      or via the full documentation at<a
        href="https://docs.incognitee.io"
        target="_blank"
        rel="noopener noreferrer"
        class="text-incognitee-green hover:underline"
      >
        docs.incognitee.io</a
      >.
    </p>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import { eventBus } from "~/helpers/eventBus";
import HealthIndicator from "~/components/ui/HealthIndicator.vue";
import WalletNumber from "~/components/ui/WalletNumber.vue";
import TokenIndicator from "~/components/ui/TokenIndicator.vue";

export default {
  computed: {
    eventBus() {
      return eventBus;
    },
  },
  components: {
    TokenIndicator,
    WalletNumber,
    HealthIndicator,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MinusSmallIcon,
    PlusSmallIcon,
  },
  data() {
    return {
      faqSections: [
        {
          title: "General Questions",
          questions: [
            {
              question: "What is Incognitee, and how does it work?",
              answer:
                "Incognitee is a decentralized platform that enables secure and private messages and transfers of digital assets using blockchain technology.",
            },
            {
              question:
                "Why did you choose Polkadot as the underlying blockchain?",
              answer:
                "Polkadot provides unmatched scalability, interoperability, and security. Its unique parachain architecture allows Incognitee to operate efficiently.",
            },
          ],
        },
        {
          title: "Features and Benefits",
          questions: [
            {
              question: "What are the key features of Incognitee?",
              answer:
                "Privacy, scalability, low fees, and interoperability are key features of Incognitee.",
            },
            {
              question: "How does Incognitee ensure private transactions?",
              answer:
                "We utilize special servers with hardware encryption called TEEs to protect the details of your transactions.",
            },
          ],
        },
        {
          title: "Privacy and Security",
          questions: [
            {
              question:
                "How does Incognitee guarantee the security of transactions?",
              answer:
                "We use state-of-the-art hardware encryption and decentralized architecture to ensure that your transactions remain secure.",
            },
            {
              question: "Is my data private, and who has access to it?",
              answer:
                "Your data is completely private by default. No one else, including us, can access your transaction details.",
            },
          ],
        },
        {
          title: "Technical Details",
          questions: [
            {
              question: "What are Session Keys?",
              answer:
                "Session keys allow minimal signing interaction and provide a smooth experience. They can be cached confidentially.",
            },
            {
              question: "What is the transaction speed and cost?",
              answer:
                "Transactions on Incognitee are near-instantaneous thanks to one-second block times and cost just cents.",
            },
          ],
        },
        {
          title: "Usage and Accessibility",
          questions: [
            {
              question: "How do I get started with Incognitee?",
              answer:
                "Getting started is easy. Create an account, connect your wallet, and follow the setup guide to initiate your first private transfer.",
            },
            {
              question: "What wallets or tools do I need to use this product?",
              answer:
                "Incognitee supports major wallets compatible with Polkadot, such as Polkadot.js, Talisman, Subwallet, and Nova Wallet.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Additional styles */
</style>
