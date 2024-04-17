<template>
  <section id="main">
    <div class="block main">
      <div class="container">
        <div class="column column_large main__column">
          <h1 class="title title_hero main__title margin_medium">
            <span class="gradient gradient_one">Welcome to</span> our<br />
            Incognitee <span class="gradient gradient_two"> Beta</span> <br/>
            <span class="gradient gradient_one">Test</span> Campaign
          </h1>
          <p class="paragraph paragraph_medium main__description margin_large">
            Become one of the first users to help improving Incognitee and get a chance to win one of the juicy prices.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main {
  padding-top: 90px;

  @include xsm {
    padding-top: 70px;
  }

  .container {
    @include sm {
      display: flex;
    }
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  &__title {
    line-height: 110%;
  }

  &__description {
    @include md {
      br {
        display: none;
      }
    }
  }


  .gradient {
    display: inline-block;

    &_one {
      background: linear-gradient(90deg, #24ad7c -12.5%, #1845b9 41%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &_two {
      background: linear-gradient(90deg, #1845b9, #24ad7c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__scheme {
    position: absolute;
    right: 38px;
    top: -5px;
    width: 284px;

    @include slg {
      right: -380px;
      top: -81px;
      width: 741px
    }

    @include md {
      right: -411px;
      top: -50px;
    }

    @include sm {
display: none;
    }


    @include xsm {
      width: 550px;
      left: 150px;
    }
  }

  &__img-gradient {
    width: 456px;
    height: 456px;
    left: -320px;
    top: -30px;

    @include slg {
      width: 407px;
      height: 407px;
      left: -400px;
      top: -70px;
    }

    @include md {
      left: -370px;
      top: -40px;
    }

    @include sm {
      left: 20px;
    }
  }

  &__column {
    @include lg {
      width: 730px;
    }

    @include slg {
      width: 600px;
    }

    @include md {
      width: 440px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__img-wrapper {
    position: relative;

    @include sm {
      display: none;
    }

    @include xsm {
      height: 320px;
    }
  }
}
</style>
