<template>
  <section id="community">
    <div class="block community">
      <div class="container blur-gradient row jcsb community__row">
        <div class="column column_medium community__column">
          <h2 class="title title_h2 community__title">
            Join our developer community <br /> and start your Integritee journey
          </h2>
          <div class="community__text">
            <p class="paragraph paragraph_medium margin_large">
              Developers are building amazing DApps that utilize our expanding
              suite of tools.
              Join us on Discord where we’re building a community of forward
              thinking devs like you.
            </p>
          </div>
          <a :href="DISCORD_LINK" target='_blank' class="btn btn_gradient">Join Discord</a>
        </div>
        <img class='community__image' src='/img/index/community/image.jpg' />
      </div>
    </div>
  </section>
</template>
<script setup lang='ts'>
import { DISCORD_LINK } from '@/configs/app.config'
</script>
<style lang="scss">
.community {
  &__title {
    @include slg {
      br {
        display: none;
      }
    }
  }

  &__column {
    @include slg {
      width: 480px;
    }

    @include md {
      width: 420px;
    }

    @include sm {
      width: 100%;
      order: 2;
    }
  }

  &__row {
    @include sm {
      flex-wrap: wrap;
    }
  }

  &__image {
    display: block;
    width: 580px;
    height: 530px;
    border: 1px dashed #000;
    object-fit: cover;
    border-radius: 24px;

    @include lg {
      width: 505px;
      height: 462px;
    }

    @include slg {
      width: 433px;
      height: 394px;
    }

    @include md {
      width: 339px;
      height: 310px;
    }

    @include sm {
      max-width: 540px;
      height: auto;
      width: 100%;
      margin-bottom: 24px;
      order: 1;
    }
  }
}
</style>
