<script setup>
import HomePage from './views/HomePage.vue'
import Nav from "@/components/Nav.vue";
</script>

<template>
  <header>
    <Nav/>
  </header>

  <main>
    <div class="wrapper">
      <router-view />
    </div>
  </main>
</template>

<style scoped>

</style>
