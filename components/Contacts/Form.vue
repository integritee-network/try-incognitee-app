<template>
  <form class="form" @submit.prevent="onSubmit()">
    <div class="form__row row jcsb">
      <div class="form__field" :class="{
        error: v$.$errors.length > 0 && v$.$errors[0].$property === 'name',
        active: formData.name !== '',
      }">
        <input @input="onFieldChange('name', $event.target.value)" :value="formData.name" type="text"
          class="paragraph_medium form__input" />
        <label :class="{ active: formData.name !== '' }" class="form__label paragraph_medium">Name</label>
        <div class="form__field_caption">
          {{ v$.$errors.length > 0 && v$.$errors[0].$message }}
        </div>
      </div>
      <div class="form__field" :class="{
        error: v$.$errors.length > 0 && v$.$errors[0].$property === 'email',
        active: formData.email !== '',
      }">
        <input @input="onFieldChange('email', $event.target.value)" :value="formData.email" type="text"
          class="paragraph_medium form__input" />
        <label :class="{ active: formData.email !== '' }" class="form__label paragraph_medium">Email</label>
        <div class="form__field_caption">
          {{ v$.$errors.length > 0 && v$.$errors[0].$message }}
        </div>
      </div>
      <div class="form__field" :class="{
        error: v$.$errors.length > 0 && v$.$errors[0].$property === 'subject',
        active: formData.subject !== '',
      }">
        <input maxlength="80" @input="onFieldChange('subject', $event.target.value)" :value="formData.subject" type="text"
          class="paragraph_medium form__input" />
        <label :class="{ active: formData.subject !== '' }" class="form__label paragraph_medium">Subject</label>
        <div class="form__field_caption">
          {{ v$.$errors.length > 0 && v$.$errors[0].$message }}
        </div>
        <span class="form__count">{{ getCount(formData.subject) }}/80</span>
      </div>
      <div class="form__field" :class="{
        error: v$.$errors.length > 0 && v$.$errors[0].$property === 'message',
        active: formData.message !== '',
      }">
        <textarea maxlength="200" @input="onFieldChange('message', $event.target.value)" :value="formData.message"
          class="paragraph_medium form__textarea scrollbar" />
        <label :class="{ active: formData.message !== '' }" class="form__label paragraph_medium">Message</label>
        <div class="form__field_caption">
          {{ v$.$errors.length > 0 && v$.$errors[0].$message }}
        </div>
        <span class="form__count">{{ getCount(formData.message) }}/200</span>
      </div>
      <div class="btn__row row">
        <button type="submit" class="btn btn_gradient form__button" :disabled="isSending">
          Submit
        </button>
        <div :class="{ active: isSuccess }" class="form__success">
          <div class="form__success-icon" />
          <div class="form__success-text">Form completed. Thanks!</div>
          <div @click="onCloseHandler" class="form__success-close" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email, maxLength } from '@vuelidate/validators'

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    let isSuccess = ref(false)
    let isSending = ref(false)

    const rules = {
      name: { required, minLength: minLength(2) },
      email: { required, email },
      subject: { required, minLength: minLength(2) },
      message: { required, minLength: minLength(2) },
    }

    const v$ = useVuelidate(rules, formData)

    const resetForm = () => {
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
      v$.value.$reset()
    }

    const onSubmit = async () => {
      const result = await v$.value.$validate()
      if (result) {
        isSending.value = true
        try {
          await $fetch('/api/mail', {
            method: 'POST',
            body: formData.value
          })
          resetForm()
          isSuccess.value = true
        } catch (err) {
          console.log(err)
        } finally {
          isSending.value = false
        }
      }
    }

    const onCloseHandler = () => {
      isSuccess.value = false
    }

    const getCount = (str) => {
      return str.length
    }

    const onFieldChange = (propertyName, value) => {
      formData.value = { ...formData.value, [propertyName]: value }
    }

    return {
      formData,
      isSuccess,
      v$,
      onSubmit,
      onCloseHandler,
      getCount,
      onFieldChange,
    }
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 60px;
  width: 700px;
  background: rgba(81, 81, 81, 0.246);
  backdrop-filter: blur(38.335px);
  border-radius: 24px;

  @include lg {
    padding: 60px;
    width: 600px;
  }

  @include slg {
    width: 540px;
  }

  @include md {
    width: 100%;
    margin-top: 48px;
  }

  @include sm {
    padding: 40px;
    margin-top: 32px;
  }

  &__row {
    flex-wrap: wrap;
  }

  &__field {
    position: relative;
    margin-bottom: 86px;
    width: 100%;
    transition: 0.4s;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @include sm {
      margin-bottom: 76px;
    }

    &:nth-child(1),
    &:nth-child(2) {
      width: 274px;

      @include lg {
        width: 224px;
      }

      @include slg {
        width: 100%;
      }
    }

    &:last-child {
      margin-bottom: 57px;

      @include sm {
        margin-bottom: 54px;
      }
    }

    &_caption {
      font-family: 'Inter';
      width: 100%;
      position: absolute;
      top: 110%;
      left: 0;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 150%;
      color: #e54f45;
      opacity: 0;
      transition: 0.4s;
    }

    &.error {
      border-bottom: 1px solid rgba(229, 79, 69, 0.2);

      input,
      textarea {
        color: #e54f45;
      }

      .form__field_caption {
        opacity: 1;
      }
    }

    &.active {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      input,
      textarea {
        color: #fff;
      }
    }

    &:focus-within {
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
  }

  &__label {
    position: absolute;
    bottom: 32px;
    left: 0;
    transition: 0.4s;
    pointer-events: none;

    @include sm {
      bottom: 18px;
    }

    &.active {
      bottom: calc(100% + 8px);
      font-size: 14px;
      opacity: 0.4;

      @include sm {
        bottom: calc(100% + 4px);
        font-size: 12px;
      }
    }
  }

  &__input,
  &__textarea {
    width: 100%;
    background: transparent;
    padding-bottom: 32px;
    border: 0;
    outline: none;
    color: #fff;

    @include sm {
      padding-bottom: 18px;
    }

    &:focus {
      +label {
        bottom: calc(100% + 8px);
        font-size: 14px;
        opacity: 0.4;

        @include sm {
          bottom: calc(100% + 4px);
          font-size: 12px;
        }
      }
    }
  }

  &__textarea {
    height: 81px;
    resize: none;

    @include lg {
      height: 108px;
    }

    @include sm {
      height: 63px;
    }
  }

  button {
    position: relative;
    color: #fff;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  &__success {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 18px;
    gap: 8px;
    width: 267px;
    height: 40px;
    background: rgba(81, 81, 81, 0.8);
    backdrop-filter: blur(35px);
    border-radius: 12px;
    margin-left: 18px;
    transition: 0.4s;
    opacity: 0;

    @include sm {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 9px 12px;
      width: 222px;
      height: 36px;
      border-radius: 10px;
      margin-left: 0;
    }

    &.active {
      opacity: 1;
    }
  }

  &__success-text {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    width: 170px;
    text-align: center;

    @include sm {
      width: 146px;
      font-size: 12px;
    }
  }

  &__success-icon {
    width: 21px;
    height: 21px;
    background: url('@/assets/img/contacts/success-icon.svg');
    background-size: cover;

    @include sm {
      width: 18px;
      height: 18px;
    }
  }

  &__success-close {
    width: 24px;
    height: 24px;
    background: url('@/assets/img/contacts/close-icon.svg');
    background-size: cover;
    cursor: pointer;

    @include sm {
      width: 18px;
      height: 18px;
    }
  }

  &__count {
    position: absolute;
    bottom: -25px;
    right: 0;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    color: #ffffff;
    opacity: 0.4;

    @include sm {
      bottom: -22px;
      font-size: 12px;
    }
  }

  &__button {
    @include sm {
      width: 100%;
    }
  }
}

.btn__row {
  position: relative;
  width: 100%;
  align-items: center;
}

.scrollbar::-webkit-scrollbar {
  width: 1px;
}

.scrollbar::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.3);
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 1);
}
</style>
