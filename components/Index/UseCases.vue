<template>
  <section id="usecases">
    <div class="block usecases">
      <div class="container">
        <div class="column">
          <h2 class="title title_h2 usecases__title">
            Use cases that matter
          </h2>
          <p class="paragraph paragraph_medium margin_large usecases__description">
            <ul><li>Vote without a show of hands: Cast your vote in a black ballot box without being doxxed.</li>
<li>Transfer in confidence: Keep your transaction history private for sensitive actions – you dont want your neighbor to know what you are buying right?</li>
</ul>
Unlike other platforms, our privacy sidechain is built for responsible concealment. Selective disclosure, compliance adherence, auditable yet confidential transactions, and a governance that includes you — it's privacy designed with accountability at its core.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.usecases {
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
