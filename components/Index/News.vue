<template>
  <section id="news">
    <div class="block news">
      <div class="container">
        <h2 class="title title_h2 news__title margin_large">
          Network <NuxtLink to="/blog" class="color_blue">news</NuxtLink>
        </h2>
        <div class="row news__list">
          <New v-for="post in data" :post="post" class="news__item" :key="post.id" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useWpApi } from '@/api/wordpress'
import New from '@/components/Blog/New.vue'

const wpApi = useWpApi()

const { data, error } = await wpApi.getPosts({
  limit: 3,
})
</script>
<style lang="scss">
.news {
  &__title {
    a {
      display: inline-block;
    }
  }

  &__list {
    gap: 20px;

    @include md {
      gap: 10px;
    }

    @include sm {
      display: block;
    }
  }

  &__item {
    @include sm {
      margin-bottom: 18px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
