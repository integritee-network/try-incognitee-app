<template>
  <div class='container'>
    <div class='text-block'>
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang='scss'>
.text-block {
  width: 715px;
  @include lg {
    width: 645px;
  }
  @include slg {
    width: 605px;
  }
  @include md {
    margin-top: 154px;
    width: 100%;
  }
  :slotted(h1) {
    color: #FFF;
    font-family: 'WhyteInktrap';
    font-size: 4em;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 28px;
    @include slg {
      font-size: 3em;
    }
    @include sm {
      font-size: 2.25em;
      margin-bottom: 24px;
    }
  }
  :slotted(h2) {
    color: #FFF;
    font-family: 'Inter';
    font-size: 2em;
    font-weight: 500;
    line-height: 120%;
    margin-top: 54px;
    margin-bottom: 22px;
    @include slg {
      font-size: 2em;
      margin-top: 46px;
    }
    @include sm {
      font-size: 1.5em;
      margin-top: 32px;
      margin-left: 10px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  :slotted(p) {
    color: #FFF;
    font-family: 'Inter';
    font-size: 1.125em;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 15px;
    @include slg {
      font-size: 1em;
      margin-bottom: 12px;
    }
    @include sm {
      font-size: 0.875em;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.5em;
      font-weight: 500;
      @include sm {
        font-size: 0.875em;
      }
    }
  }
}
</style>
