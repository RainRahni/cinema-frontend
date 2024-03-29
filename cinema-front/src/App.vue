<script setup>
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
