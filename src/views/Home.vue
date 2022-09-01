<template>
  <div class="home">
    <div class="banner h-screen">
      <img class="h-screen object-cover"
           src="https://oss.kuriyama.top/static/nakiri.png"
           alt="头图">
    </div>

    

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
}
.banner {
  position: relative;
}
.banner::before {
  content: '';
  background-image: url('https://oss.kuriyama.top/static/apps/blog/dot.gif');
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-attachment: fixed;
}
</style>
