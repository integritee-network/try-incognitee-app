<template>
  <div class="container">
    <header class="header">
      <div class="header-content">
        <Incognitee class="logo" />
      </div>
    </header>
    <main class="main">
      <NuxtPage />
    </main>
    <footer class="footer">
      <!-- Footer content -->
    </footer>
  </div>
</template>

<script setup lang="ts">
// Import any necessary components or utilities here
import Incognitee from "assets/img/incognitee-mask.svg";
</script>

<style scoped>
/* Add your styles for the GTN layout here */
.gtn-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header,
.footer {
  background: #11111a;
  width: 100%;
}

.header {
  flex-shrink: 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  height: 50px;
  width: 50px;
}
.main {
  flex-grow: 1;
  overflow-y: auto;
}

.footer {
  flex-shrink: 0;
}
</style>
