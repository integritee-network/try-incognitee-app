<template>
  <section id="partner">
    <div class="block partner">
      <div class="container">
        <div class="column column_medium partner__column">
          <h2 class="title title_h2 partner__title">
            Become a partner
          </h2>
          <p class="paragraph paragraph_medium margin_large partner__description">
            If you are a wallet provider, an exchange or an vaildator operator, get in touch with us.
          </p>
          <NuxtLink to="https://docs.incognitee.io
/4.-want-to-join-or-support-incognitee/4.3-become-a-partner" class="btn btn_gradient">Contact</NuxtLink>
        </div>
        <div class="partner__image-wrapper">
          <!-- <img src="/img/index/partner/polygons.svg" class="partner__image" alt="Polygons" /> -->
          <img src="/img/index/partner/become-a-partner-picture.svg" class="partner__image" alt="Polygons" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.partner {
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @include md {
      gap: 15px;
    }

    @include sm {
      flex-direction: column-reverse;
    }
  }

  &__image {
    width: 100%;

    @include sm {
      width: 90%;
    }
  }

  &__image-wrapper {
    position: relative;

    @include sm {
      text-align: center;
      margin-bottom: 70px;
    }

    @include xsm {
      margin-bottom: 50px;
    }
  }

  &__image-gradient {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 950px;
    height: 445px;

    @include slg {
      height: 338px;
      width: 676px;
    }

    @include md {
      height: 309px;
      width: 618px;
    }

    @include sm {
      height: 330px;
      width: 660px;
    }

    @include xsm {
      height: 258px;
      width: 516px;
    }
  }

  &__column {
    flex-shrink: 0;

    @include lg {
      width: 560px;
    }

    @include slg {
      width: 480px;
    }

    @include slg {
      width: 410px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__title {
    @include slg {
      br {
        display: none;
      }
    }
  }
}
</style>
