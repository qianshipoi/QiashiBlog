<script setup lang="ts">
import Nav from './components/Nav.vue'


</script>

<template>
  <Nav />
  <main style="min-height: 100%; ">
    <router-view ref="el"></router-view>
  </main>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
