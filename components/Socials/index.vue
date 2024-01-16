<template>
  <div class="socials">
    <a :href="DISCORD_LINK" target="_blank">
      <Discord />
    </a>
    <a :href="TWITTER_LINK" target="_blank">
      <Twitter />
    </a>
    <a :href="TELEGRAM_LINK" target="_blank">
      <Telegram />
    </a>
  </div>
</template>

<script setup lang='ts'>
import Discord from '@/assets/img/socials/discord.svg'
import Twitter from '@/assets/img/socials/twitter.svg'
import Telegram from '@/assets/img/socials/telegram.svg'
import { TELEGRAM_LINK, TWITTER_LINK, DISCORD_LINK } from '@/configs/app.config'
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    display: inline-block;
    width: 24px;
    transition: 0.3s ease;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      svg {
        fill-opacity: 1;
      }
    }
  }
}
</style>
