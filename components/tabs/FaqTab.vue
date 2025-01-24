<template>
  <div class="mt-3 sm:mt-5 px-3">
    <div class="flex justify-between items-center">
      <button
        @click="eventBus.emit('toggleSidebar')"
        class="lg:hidden text-white focus:outline-none text-2xl"
      >
        ☰
      </button>
      <div class="lg:hidden">
        <HealthIndicator />
      </div>
      <div class="lg:hidden">
        <WalletIndicator />
      </div>
      <div class="lg:hidden">
        <TokenIndicator />
      </div>
    </div>
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
        class="flex text-lg font-bold tracking-tight text-incognitee-blue sm:text-lg mb-5"
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
            <p class="text-sm text-gray-400" v-html="faq.answer"></p>
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
import { eventBus } from "@/helpers/eventBus";
import HealthIndicator from "~/components/ui/HealthIndicator.vue";
import TokenIndicator from "~/components/ui/TokenIndicator.vue";
import WalletIndicator from "~/components/ui/WalletIndicator.vue";

export default {
  computed: {
    eventBus() {
      return eventBus;
    },
  },
  components: {
    TokenIndicator,
    WalletIndicator,
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
                "Incognitee is a decentralized platform that enables secure and private messages and transfers of digital assets using blockchain technology. Built on the Polkadot network, it leverages Trusted Execution Environments to offer convenient privacy enhancements for an unmatched digital asset experience.",
            },
            {
              question:
                "Why did you choose Polkadot as the underlying blockchain?",
              answer:
                "Polkadot provides unmatched scalability, interoperability, and security. Its unique parachain architecture allows Incognitee to operate efficiently while benefiting from the shared security of the Polkadot relay chain.",
            },
            {
              question: "Who can use Incognitee?",
              answer:
                "Incognitee is designed for individuals, businesses, and organizations seeking a secure and private way to transfer assets and messages. Whether you're a tech-savvy crypto user or new to blockchain, our platform is accessible to everyone.",
            },
            {
              question:
                "How is this different from other blockchain transfer solutions?",
              answer:
                "Unlike traditional solutions, Incognitee prioritizes privacy by default. We use Trusted Execution Environments and the Polkadot ecosystem to ensure that your transactions remain confidential and efficient.",
            },
          ],
        },
        {
          title: "Features and Benefits",
          questions: [
            {
              question: "What are the key features of Incognitee?",
              answer: `
          <ul>
            <li><strong>Privacy:</strong> Ensures complete confidentiality of transactions.</li>
            <li><strong>Scalability:</strong> Supports high transaction throughput with minimal latency.</li>
            <li><strong>Low Fees:</strong> Cost-efficient transactions compared to traditional systems.</li>
            <li><strong>Interoperability:</strong> Seamlessly integrates with other Polkadot parachains.</li>
          </ul>
        `,
            },
            {
              question: "How does Incognitee ensure private transactions?",
              answer:
                "We utilize special servers with hardware encryption called TEEs to protect the details of your transactions, including the sender, receiver, and amount.",
            },
            {
              question:
                "What benefits does this product offer over traditional transfer systems?",
              answer:
                "Our platform eliminates intermediaries, reducing costs and increasing speed. Transactions are secure, immutable, and private, unlike traditional systems which often compromise privacy.",
            },
            {
              question: "Can Incognitee handle high transaction volumes?",
              answer:
                "Yes, Incognitee is built to handle high volumes of transactions without compromising speed or security, thanks to Polkadot's and Integritee's scalable architecture.",
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
                "We use state-of-the-art hardware encryption and decentralized architecture to ensure that your transactions remain secure and tamper-proof without depending on a trusted third-party.",
            },
            {
              question: "Is my data private, and who has access to it?",
              answer:
                "Your data and metadata are completely private by default. No one else, including us, can access your transaction details, as they remain encrypted even while being processed.",
            },
            {
              question: "What happens if the blockchain is compromised?",
              answer:
                "Polkadot’s robust design and decentralized consensus mechanisms make it highly resilient to attacks. Additionally, our platform incorporates multi-layered security measures to safeguard your data.",
            },
          ],
        },
        {
          title: "Technical Details",
          questions: [
            {
              question: "What are Session Keys?",
              answer: `
          For a smooth experience with minimal signing interaction, we recommend that you authorize a session key. It will be cached confidentially on Incognitee and loaded automatically on your next visit from the same or a different device. You can choose from the following options:</br></br>
          <ul>
            <li>- Allow reading balance</li>
            <li>- Full read access → including transaction history and messages</li>
            <li>- Allow non-transfer actions → recommended, including sending messages</li>
            <li>- Allow all actions → including transactions of tokens. Only use on trusted devices.</li>
          </ul>
        `,
            },
            {
              question: "What is the transaction speed and cost?",
              answer:
                "Transactions on Incognitee are near-instantaneous thanks to one-second block times and cost just cents.",
            },
            {
              question: "Can this product integrate with existing systems?",
              answer:
                "Yes, Incognitee provides a json-rpc API and libraries for Rust and Typescript that make integration with existing systems and tools straightforward.",
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
                "Incognitee supports major wallets compatible with Polkadot, such as Polkadot.js, Talisman, Subwallet and Nova Wallet.",
            },
            {
              question: "Is there a mobile or desktop application available?",
              answer:
                "We offer a web app that supports both mobile and desktop views to ensure you can access Incognitee wherever you are.",
            },
            {
              question: "Which tokens or networks are supported?",
              answer: `
          Currently, we support the following Tokens and Networks as of 22.01.2025:
          <ul>
            <li>DOT - Asset Hub Polkadot (Beta)</li>
            <li>TEER - Integritee Network (Beta)</li>
            <li>PAS - Paseo Network (Testing)</li>
          </ul>
        `,
            },
            {
              question: "What are the fees of Incognitee?",
              answer: `
          Current fees:
          <ul>
            <li>Shielding: 0.175% of the amount</li>
            <li>Private Transfer: 0.01 DOT</li>
            <li>Unshielding: 0.03 DOT</li>
            <li>Session Proxy Deposit: 0.1 DOT</li>
          </ul>
        `,
            },
            {
              question: "Are there any limits or restrictions?",
              answer: `
          While in <i>beta</i> status, limits will apply to the amount of funds you can shield to Incognitee:
          <ul>
            <li>Shielding limit: 111 DOT</li>
            <li>Shielding limit: 1000 TEER</li>
          </ul>
        `,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped></style>
