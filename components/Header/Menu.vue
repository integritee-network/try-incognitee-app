<template>
  <Transition name="menu-toggle">
    <div v-show="active" class="menu">
      <nav class="menu__nav">
        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_one">Wallet Address </span>
          <p>xxxxxxxx...</p></NuxtLink
        >

        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_two">Paseo Balance </span>
          <p>0.0000000 PAS</p></NuxtLink
        >

        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_one">Incognitee Balance </span>
          <p>0.0000000 PAS</p></NuxtLink
        >

        <NuxtLink class="text-link paragraph_smll">
          <span class="gradient gradient_two">Incognitee Status </span>
          <p><UBadge label="Online" /></p
        ></NuxtLink>
      </nav>
    </div>
  </Transition>
</template>
<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  clickHandler: {
    type: Function,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: $darkBlue;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;

  &__button {
    font-size: $pDef;
  }

  &__nav {
    a {
      display: block;
      text-align: center;
      font-size: $pDef;
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
