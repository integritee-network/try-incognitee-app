<template>
  <div class='home-section'>
    <Main />
    <Work />
    <Validator />
    <Delegator />
    <Partner />
    <Hunter />
    <UseCases />
    <Socials />
  </div>
</template>

<script setup lang="ts">
import Main from '~/components/Index/Main.vue'
import Work from '~/components/Index/Work.vue'
import Validator from '~/components/Index/Validator.vue'
import Delegator from '~/components/Index/Delegator.vue'
import Partner from '~/components/Index/Partner.vue'
import Hunter from '~/components/Index/Hunter.vue'
import UseCases from '~/components/Index/UseCases.vue'
import Socials from '~/components/Socials/Section.vue'
import { generateSEO } from '~/helpers/generateSEO'

generateSEO({
  title: 'Incognitee - Home',
  description: 'Transfer digital assets privately. Welcome to Incognitee - an exclusive and discreet hub in the heart of Web3.'
})
</script>

<style lang='scss'>
.home-section {
  overflow: hidden;
}
</style>
