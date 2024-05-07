<template>
  <div class="container flex flex-col">
    <div class="">
      <h2 class="title title_h2 partner__title text-left">Campaign</h2>
    </div>
    <div class="">
      <UTabs v-model="currentTabIndex" :items="items" class="w-full">
        <template #default="{ item, index, selected }">
          <div
            :class="{ 'text-gray-400': !selected }"
            class="relative truncate"
            @click="currentTabIndex = index"
          >
            <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
            <span
              v-if="selected"
              class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
            />
          </div>
        </template>
      </UTabs>
    </div>
    <div class="tab-content mt-4">
      <component
        :is="items[currentTabIndex].component"
        @change-tab="(i) => (currentTabIndex = i)"
      />
    </div>
  </div>
</template>

<script>
import CheckWalletTab from "~/components/CheckWalletTab.vue";
import CreateWalletTab from "~/components/CreateWalletTab.vue";
import InviteFriendTab from "~/components/InviteFriendTab.vue";
import PublishonxTab from "~/components/PublishonxTab.vue";
import UnshieldTab from "~/components/UnshieldTab.vue";

export default {
  components: {
    CreateWalletTab,
    CheckWalletTab,
    InviteFriendTab,
    UnshieldTab,
    PublishonxTab,
  },
  data() {
    return {
      currentTabIndex: 0,
      items: [
        {
          label: "Create",
          component: CreateWalletTab,
        },
        {
          label: "Shield",
          component: CheckWalletTab,
        },
        {
          label: "Invite",
          component: InviteFriendTab,
        },
        {
          label: "Unshield",
          component: UnshieldTab,
        },
        {
          label: "Share",
          component: PublishonxTab,
        },
      ],
    };
  },
  mounted() {
    this.currentComponent = this.items[0].component;
  },
  methods: {
    onTabChanged(tabIndex) {
      this.currentComponent = this.items[tabIndex].component;
    },
  },
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
