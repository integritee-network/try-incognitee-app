<template>
  <div>
    <UTabs :items="tabs" v-model:selected="currentTabIndex" class="w-full">
      <template #default="{ item, selected }">
        <div @click="changeTab(item.index)" :class="{ 'bg-gray-200': selected }" class="cursor-pointer px-4 py-2">{{ item.label }}</div>
      </template>
    </UTabs>

    <component :is="currentTabComponent" @change-tab="changeTab"/>

  </div>
</template>

<script setup>
import CheckWalletTab from '~/components/CheckWalletTab.vue'
import CreateWalletTab from '~/components/CreateWalletTab.vue'
import InviteFriendTab from '~/components/InviteFriendTab.vue'
import PublishonxTab from '~/components/PublishonxTab.vue'
import UnshieldTab from '~/components/UnshieldTab.vue'
import { ref, computed } from 'vue';

const currentTabIndex = ref(0);
const tabs = [
  { label: 'Create Wallet', component: CreateWalletTab, index: 0 },
  { label: 'Check Balance', component: CheckWalletTab, index: 1 },
  // Add more tabs as needed
];

const currentTabComponent = computed(() => tabs[currentTabIndex.value].component);

const changeTab = (index) => {
  console.log("changeTab called")
  currentTabIndex.value = index;
};
</script>

<style lang="scss">
.steps {
  .container {
    position: relative;
    display: flex;
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
