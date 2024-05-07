<template>
  <section id="hunter">
    <div class="block hunter">
      <div class="container">
        <div class="column column_medium hunter__column">
          <h2 class="title title_h2 hunter__title">Are you a bounty hunter?</h2>
          <p
            class="paragraph paragraph_medium margin_large hunter__description"
          >
            We want to make our platform as secure as possible, that's why we
            will launch a bug bounty to attract the best talents to battle test
            our solution.
          </p>
          <NuxtLink
            to="https://docs.incognitee.io
/4.-want-to-join-or-support-incognitee/4.4-become-a-bug-hunter"
            target="blank"
            class="btn btn_gradient"
            >Start Hunting</NuxtLink
          >
        </div>
        <div class="hunter__image-wrapper">
          <!-- <img src="/img/index/hunter/polygons.svg" class="hunter__image" alt="Polygons" /> -->
          <img
            src="/img/index/hunter/bounty-hunter-picture.svg"
            class="hunter__image"
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
.hunter {
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
