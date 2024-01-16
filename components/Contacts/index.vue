<template>
  <div class="contacts">
    <Desc>
      <template #title>
        <span>Build</span> and <span class="text-gradient_purple-blue">deploy</span> a new generation of data-driven
        platforms with Integritee
      </template>
    </Desc>
    <div class='block'>
      <div class='container'>
        <div class='contacts__row row jcsb'>
          <div class='contacts__column'>
            <Info>
              <template #title>
                <h2 class='title title_h2 margin_large'>Get in touch<br>
                  with Integritee</h2>
              </template>
              <template #items>
                <div class='info__row'>
                  <div class='info__item'>
                    <div class='contact__icon margin_medium' />
                    <p class='title_sub margin_medium'>Contact Us</p>
                    <p class='paragraph_large'>
                      <a href="mailto: hello@integritee.network" class="text-link info__link">hello@integritee.network</a>
                      <a href="mailto: support@integritee.network" class="text-link info__link">support@integritee.network</a>
                    </p>
                  </div>
                  <div class='info__item'>
                    <div class='address__icon margin_medium' />
                    <p class='title_sub margin_medium'>Integritee AG</p>
                    <p class='paragraph_large'>Technoparkstrasse 1, 8005 Zurich, Switzerland</p>
                  </div>
                </div>
              </template>
            </Info>
          </div>
          <Form />
        </div>
      </div>
    </div>
    <Socials />
  </div>
</template>

<script setup>
import Desc from "@/components/Desc";
import Info from "@/components/Contacts/Info.vue";
import Form from "@/components/Contacts/Form.vue";
import Socials from "@/components/Socials/Section.vue";
</script>
<style lang="scss" scoped>
.contacts {
  position: relative;

  &__row {
    @include md {
      display: block;
    }
  }

  &__column {
    width: 500px;

    @include slg {
      width: 350px;
    }

    @include md {
      width: 100%;
      br {
        display: none;
      }
    }
  }
}
</style>
