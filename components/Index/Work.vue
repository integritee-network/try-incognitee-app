<template>
  <section id="work">
    <div class="block work">
      <div class="container">
        <div class="column column_medium work__column">
          <h2 class="title title_h2 work__title">How does it work</h2>
          <p class="paragraph paragraph_medium margin_large work__description">
            Alice would like to transfer funds to Bob privately or participate
            in on-chain Governance without revealing her pseudonym. She uses
            Incognitee to obtain a privacy shield without traces back to her
            account. Our TEE technology keeps sensitive data away from the chain
            and provides full privacy without security concerns.
          </p>
        </div>
        <div class="work__image-wrapper">
          <!-- <img src="/img/index/work/polygons.svg" class="work__image" alt="Polygons" /> -->
          <img
            src="/img/index/work/how-does-it-work-picture.svg"
            class="work__image"
            alt="Polygons"
          />
          <GlobalRadialGradient class="work__image-gradient" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.work {
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
