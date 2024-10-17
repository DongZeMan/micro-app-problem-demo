<template>
  <div class="page-container">
    <micro-app
      name="child-app-1"
      url="http://localhost:5678"
      iframe
      activeRoute="/child-app-1"
      keep-alive
    ></micro-app>
  </div>
</template>

<script lang="ts" setup>
// import microApp from '@micro-zoe/micro-app';
// import { onMounted } from 'vue';

// const iframeSrc = window.origin + '/empty.html';
</script>
<style lang="scss" scoped></style>
