<template>
  <div class="block simple">
    <div class="simple__text">
      <p class="simple__item-title margin_medium">
        {{ item.title }}
      </p>
      <p class="simple__item-text paragraph paragraph_medium">
        {{ item.text }}
      </p>
    </div>
    <div class="simple__image-wrapper">
      <div class="simple__image">
        <img :src="item.img" />
        <GlobalRadialGradient class="simple__image-gradient" />
      </div>
    </div>
    <!-- <component :is='item.img' /> -->
  </div>
</template>
<script setup lang="ts">
defineProps<{
  item: {
    title: string
    text: string
    img: string
  }
}>()
</script>
<style lang="scss" scoped>
.simple {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 75px;

  @include lg {
    gap: 50px;
  }

  @include sm {
    flex-direction: column-reverse;
    gap: 0;
  }

  &__text {
    width: 600px;
    flex-shrink: 0;

    @include lg {
      width: 560px;
    }

    @include slg {
      width: 480px;
    }

    @include md {
      width: 350px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__item-title {
    position: relative;
    z-index: 2;
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $tDef;
    line-height: 110%;
    color: #ffffff;

    @include slg {
      font-size: $sm_tMd;
    }

    @include sm {
      font-size: 1.688em;
    }
  }

  &__item-text {
    position: relative;
    z-index: 2;
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @include sm {
      position: relative;
      text-align: center;
      margin-bottom: 40px;
    }

    img {
      width: 100%;
      max-height: 420px;
      z-index: 2;
      object-fit: contain;

      @include lg {
        max-height: 390px;
      }

      @include slg {
        max-height: 350px;
      }

      @include md {
        max-height: 310px;
      }

      @include sm {
        position: relative;
        height: 100%;
        max-width: 80%;
        max-height: 300px;
        width: auto;
      }
    }
  }

  &__image-gradient {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 900px;
    height: 900px;

    @include lg {
      width: 850px;
      height: 850px;
    }

    @include slg {
      width: 800px;
      height: 800px;
    }

    @include md {
      width: 600px;
      height: 600px;
    }
  }
}
</style>
