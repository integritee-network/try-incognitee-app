<template>
  <section id="delegator">
    <div class="block delegator">
      <div class="container">
        <div class="column column_medium delegator__column">
          <h2 class="title title_h2 delegator__title">
            Become a delegator
          </h2>
          <p class="paragraph paragraph_medium margin_large delegator__description">
            Earn from locking your TEER: Validators receive transaction fees and can share them with TEER holders via Delegation.
Join the Delegator Program: TEER holders can delegate their TEER tokens to existing Validators to help securing Incognitee’s backbone.
          </p>
          <NuxtLink to="https://docs.incognitee.io
/4.-want-to-join-or-support-incognitee/4.2-become-a-delegator" class="btn btn_gradient">Become a delegator</NuxtLink>
        </div>
        <div class="delegator__image-wrapper">
          <!-- <img src="/img/index/delegator/polygons.svg" class="delegator__image" alt="Polygons" /> -->
          <img src="/img/index/delagator/become-a-delegator-picture.svg" class="delegator__image" alt="Polygons" />
          <GlobalRadialGradient class="work__image-gradient" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.delegator {
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
    width: 653px;
    height: 520px;

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
