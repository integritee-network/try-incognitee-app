<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <UModals />
  </div>
</template>

<style lang="scss">
.page-wrapper {
  position: relative;
  padding-top: 200px;
}

.wrapper {
  position: relative;
  overflow: hidden;
}

.image-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  overflow: hidden;
}

.container {
  position: relative;
}

.top-lines {
  position: absolute;
  right: -152px;
  top: 436px;
  width: 1061px;
  transform: rotate(-159.84deg);
  z-index: -1;

  @include lg {
    width: 1417px;
  }

  @include slg {
    width: 873px;
    right: -250px;
    top: -270px;
  }

  @include md {
    width: 838px;
    right: -208px;
    top: -180px;
  }

  @include sm {
    width: 530px;
    right: -141px;
    top: -70px;
  }

  @include xsm {
    right: -171px;
    top: -7px;
  }
}

.bottom-lines {
  position: absolute;
  left: -198px;
  top: -1858px;
  width: 936px;
  transform: rotate(159.84deg) scale(-1, 1);
  z-index: -1;

  @include lg {
    width: 1023px;
    left: -245px;
    top: -992px;
  }

  @include slg {
    width: 740px;
    left: -185px;
    top: -620px;
  }

  @include sm {
    width: 634px;
    left: -115px;
    top: -216px;
  }
}

.cookie-wrapper {
  font-family: "Inter";
  .cookieControl__BarContainer {
    border-radius: 24px;
    background: rgba(81, 81, 81, 0.25);
    backdrop-filter: blur(38px);
    padding: 40px;
    align-items: center;
    @include slg {
      display: block;
    }
    @include sm {
      padding: 30px;
    }
    svg {
      width: 64px;
      @include slg {
        width: 48px;
        margin-bottom: 24px;
      }
      @include sm {
        width: 32px;
      }
    }
    & > div {
      &:first-child {
        display: flex;
        align-items: center;
        gap: 24px;
        @include slg {
          display: block;
        }
      }
    }
  }
  .cookieControl__BarButtons {
    gap: 18px;
    @include sm {
      flex-direction: row;
      justify-content: flex-start;
    }
    button {
      border-radius: 12px;
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      margin: 0;
      padding: 17px 20px;
      @include sm {
        font-size: 14px;
        width: auto;
        padding: 11px 15px;
      }
      &:first-child {
        background: linear-gradient(45deg, #559cff 0%, #9e20fe 100%);
      }
      &:nth-child(2) {
        background: none;
        border: 2px solid var(--transparent-white-20, rgba(255, 255, 255, 0.2));
      }
      &:last-child {
        display: none;
      }
    }
  }
  .cookieControl__Bar {
    max-width: 1240px;
    margin: 0 auto;
    bottom: 100px;
    @include lg {
      max-width: 1120px;
      bottom: 80px;
    }

    @include slg {
      max-width: 980px;
      bottom: 60px;
    }

    @include md {
      max-width: 800px;
      bottom: 40px;
    }
    @include sm {
      max-width: 100%;
      width: 100%;
      padding: 0 20px;
      bottom: 20px;
    }
    @include xsm {
      padding: 0 12px;
      bottom: 12px;
    }

    p {
      margin: 0;
      font-size: 24px;
      font-weight: 500;
      @include slg {
        margin-bottom: 24px;
      }
      @include sm {
        font-size: 18px;
      }
    }
  }
}
</style>
