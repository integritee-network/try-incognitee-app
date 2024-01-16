<template>
  <a :href="link" class="line-link" target="_blank">
    <span class="line-link__text paragraph_large">{{ text }}</span>
    <LinkIcon class="line-link__icon" />
    <div class="line-link__underline" />
  </a>
</template>
<script setup>
import LinkIcon from '@/assets/img/link.svg'

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})
</script>
<style lang="scss" scoped>
.line-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-bottom: 32px;

  @include sm {
    padding-bottom: 24px;
  }

  &:hover {
    .line-link__underline {
      &:before {
        width: 100%;
      }
    }
  }

  &__icon {
    width: 32px;
    height: 32px;

    @include sm {
      width: 18px;
      height: 18px;
    }
  }

  &__underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    transition: .6s ease;

    &:before {
      position: absolute;
      content: '';
      inset: 0;
      width: 0%;
      height: 100%;
      transition: width .6s ease;
      background: linear-gradient(90deg, #B000FD 0.01%, #B000FD 0.02%, #30DAFF 97.96%);
    }
  }
}
</style>