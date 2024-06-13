<template>
  <div class="home-section">
    <Main />
    <Rules />
    <Prizes />
    <Socials />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Main from "~/components/Index/Main.vue";
import Prizes from "~/components/Index/Prizes.vue";
import Rules from "~/components/Index/Rules.vue";
import Footer from "~/components/Footer/index.vue";
import Socials from "~/components/Socials/Section.vue";
import { generateSEO } from "~/helpers/generateSEO";

generateSEO({
  title: "Incognitee - Home",
  description:
    "Transfer digital assets privately. Welcome to Incognitee - an exclusive and discreet hub in the heart of Web3.",
});
</script>

<style lang="scss">
.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}
</style>
