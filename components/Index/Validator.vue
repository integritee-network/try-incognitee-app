<template>
  <section id="validator">
    <div class="block validator">
      <div class="container">
        <div class="column column_medium validator__column">
          <h2 class="title title_h2 validator__title">
            Become a validator
          </h2>
          <p class="paragraph paragraph_medium margin_large validator__description">
            Earn from Transactions: Validators receive a proportional amount of every transaction they validate, creating an opportunity for continual rewards in line with Incognitee’s activity.<br /><br />
Join the Validator Program: Aspiring validators have to participate in the Testnet phase to be eligible for the main net launch to become a part of Incognitee’s backbone.
          </p>
          <NuxtLink to="https://docs.incognitee.io
/4.-want-to-join-or-support-incognitee/4.1-become-a-validator" target="blank" class="btn btn_gradient">Become a Validator</NuxtLink>
        </div>
        <div class="validator__image-wrapper">
          <!-- <img src="/img/index/validator/polygons.svg" class="validator__image" alt="Polygons" /> -->
          <img src="/img/index/validator/become-a-validator-picture.svg" class="validator__image" alt="Polygons" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.validator {
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
