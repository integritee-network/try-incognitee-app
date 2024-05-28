<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <Incognitee class="logo" />
        <p class="status">Connection Status: OK</p>
        <p class="address">Wallet Address: 0x1234</p>
      </div>
    </header>

    <main class="main">
      <NuxtPage />
    </main>

    <footer class="footer">
      <nav class="footer-content">
        <ul>
          <li><nuxt-link to="/wallet">Wallet</nuxt-link></li>
          <li><nuxt-link to="/swap">Swap</nuxt-link></li>
          <li><nuxt-link to="/gov">Gov</nuxt-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Incognitee from "@/assets/img/incognitee-mask.svg";

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header, .footer {
  background: #000;
  width: 100%;
}

.header {
  flex-shrink: 0; /* Prevents the header from shrinking */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
}

.logo {
  height: 50px;
  width: 50px;
}

.main {
  flex-grow: 1; /* Allows the main content to take up the remaining space */
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.footer {
  flex-shrink: 0; /* Prevents the footer from shrinking */
}
.footer-content {
  display: flex;
  justify-content: space-around;
}

.footer-content ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  list-style-type: none;
}
</style>
