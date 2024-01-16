<template>
  <section id="scalability">
    <div class="block scalability">
      <div class="container">
        <div class="row scalability__row">
          <div class="column column_medium scalability__column scalability__column_left">
            <h2 class="title title_h2 scalability__title">
              Scalability <br /> and performance without sacrificing trust
            </h2>
            <p class="paragraph paragraph_medium margin_large">
              Integritee utilizes the blockchain to create security and trust
              without the computational compromises.
              Centralized approaches to data-driven services tend to be fast and
              convenient, but involve big compromises of user privacy and data
              security.
            </p>
            <NuxtLink to="/technology" class="btn btn_gradient">Learn more</NuxtLink>
          </div>
          <div class="column scalability__column_icons">
            <div class="scalability__item margin_large">
              <div class="scalability__item-icon margin_small">
                <Guard />
              </div>
              <h3 class="scalability__item-title title_sub margin_medium">
                Privacy & security
              </h3>
              <p class="paragraph paragraph_medium scalability__item-description">
                The security and trust of the blockchain with the speed and
                power of enterprise grade confidential computing hardware.
              </p>
            </div>
            <div class="scalability__item">
              <div class="scalability__item-icon margin_small">
                <Speed />
              </div>
              <h3 class="scalability__item-title title_sub margin_medium">
                Speed & scalabillity
              </h3>
              <p class="paragraph paragraph_medium scalability__item-description">
                The scalability of second-layer technology based on substrate
                for building state of the art data-driven dApps and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Guard from '@/assets/img/index/scalability/guard.svg'
import Speed from '@/assets/img/index/scalability/speed.svg'
</script>
<style lang="scss">
.scalability {
  margin-bottom: 200px;

  @include lg {
    margin-bottom: 170px;
  }

  @include slg {
    margin-bottom: 140px;
  }

  @include md {
    margin-bottom: 100px;
  }

  &__item {
    @include md {
      margin-bottom: 48px;
    }

    @include sm {
      margin-bottom: 32px;
    }

    @include xsm {
      margin-bottom: 24px;
    }
  }

  &__item-icon {
    width: 64px;
    height: 64px;

    @include md {
      width: 48px;
      height: 48px;
    }
  }

  &__item-title {
    @include md {
      font-size: $pLg;
    }
  }

  &__row {
    gap: 135px;

    @include lg {
      gap: 55px;
    }

    @include slg {
      gap: 100px;
    }

    @include md {
      gap: 52px;
    }

    @include sm {
      display: block;
    }
  }

  &__column_left {
    @include lg {
      width: 560px;
    }

    @include slg {
      width: 480px;
    }

    @include md {
      width: 420px;
    }

    @include sm {
      width: 100%;
      margin-bottom: 42px;
    }
  }
}
</style>
