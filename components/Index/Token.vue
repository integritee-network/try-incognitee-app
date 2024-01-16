<template>
  <section id="token">
    <div class="block token">
      <div class="container">
        <div class="row jcsb token__row">
          <div class="column column_medium token__column">
            <h2 class="title title_h2 token__title">
              A network secured and governed <br />
              by our TEER token
            </h2>
            <p class="paragraph paragraph_medium margin_large token__description">
              The Integritee ecosystem is securely built and governed<br />
              by our trusted community of TEER token holders. Join<br />
              the movement for scaling a secure and fast Web3.
            </p>
            <NuxtLink to="/teer-token" class="btn btn_gradient">Learn more</NuxtLink>
          </div>
          <div class="token__right">
            <RadialGradient class="token__radial-gradient" />
            <!-- <img src="/img/index/token/polygon.svg" class="token__polygon" alt="Polygon" /> -->
            <img src="/assets/img/index/hunter/bounty-hunter-picture.svg" class="token__polygon1" alt="Polygon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang='ts'>
import RadialGradient from '~/components/Global/RadialGradient'
</script>
<style lang="scss">
.token {
  &__right {
    position: relative;

    @include sm {
      margin-bottom: 64px;
      width: 100%;
    }

    @include xsm {
      margin-bottom: 49px;
    }
  }

  &__radial-gradient {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 1049px;
    height: 1049px;
    z-index: -1;

    @include slg {
      width: 855px;
      height: 855px;
    }

    @include xsm {
      width: 644px;
      height: 644px;
    }
  }

  &__row {
    padding-right: 50px;
    align-items: flex-start;

    @include slg {
      padding-right: 30px;
    }

    @include sm {
      flex-direction: column-reverse;
      padding-right: 0;
    }
  }

  &__right-item {
    svg {
      width: auto;
      height: 32px;

      @include slg {
        width: 24px;
        height: auto;
      }
    }
  }

  &__logo-icon {
    margin-bottom: 32px;
    width: 44px;
    height: 48px;

    @include slg {
      margin-bottom: 24px;
    }

    @include xsm {
      width: 30px;
      height: 32px;
    }
  }

  &__column {
    @include lg {
      width: 560px;
    }

    @include slg {
      width: 480px;
    }

    @include md {
      width: 413px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__polygon1 {
    width: 429px;

    @include slg {
      width: 349px;
    }

    @include sm {
      display: block;
      margin: 0 auto;
    }


    @include xsm {
      width: 263px;
    }
  }

  &__right-title {
    text-align: center;
    margin-bottom: 45px;

    @include slg {
      margin-bottom: 32px;
      font-size: $pLg;
    }

    @include xsm {
      font-size: $sm_pLg;
      margin-bottom: 24px;
    }
  }

  &__right-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 19px;
    gap: 20px;

    @include slg {
      margin-bottom: 14px;
      gap: 15px;
    }


    @include xsm {
      gap: 8px;
    }

    &:last-child {
      margin-bottom: 0;
    }


    &:first-child {
      svg {
        height: 28px;

        @include xsm {
          height: 21px;
        }
      }
    }
  }

  &__right-item-name {
    @include slg {
      font-size: $sm_pLg;
    }

    @include xsm {
      font-size: $md_pDef;
    }
  }

  &__right-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  &__right-item-icon-wrp {
    width: 36px;

    @include xsm {
      width: 24px;
    }
  }

  &__description {
    @include md {
      br {
        display: none;
      }
    }
  }
}
</style>
