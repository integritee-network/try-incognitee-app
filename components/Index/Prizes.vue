<template>
  <section id="prizes">
    <div class="block prizes">
      <div class="container">
        <div class="column column_medium prizes__column">
          <h2 class="title title_h2 prizes__title">
            Prizes
          </h2>

<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <img src="/img/index/prizes/prize1.svg" class="prize__image" alt="Polygons" />
          <img src="/img/index/prizes/prize2.svg" class="prize__image" alt="Polygons" />
          <img src="/img/index/prizes/prize3.svg" class="prize__image" alt="Polygons" />
      </div>
        </div>
        <div class="prizes__image-wrapper">
          <!-- <img src="/img/index/prizes/polygons.svg" class="prizes__image" alt="Polygons" /> -->
          <img src="/img/index/prizes/prizes.svg" class="prizes__image" alt="Polygons" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.prizes {
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

.prize {

  &__image {
      justify-content: space-between;
      padding-right: 20px;
  width: 200px;

    @include sm {
      width: 90%;
    }
  }
}
</style>
