<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header>
    <RouterLink class="header-link" to="/">🦈 AmpShark</RouterLink>
  </header>
  <RouterView :key="route.fullPath" />
</template>

<style>
@import url('@/design/nes.css');

@font-face {
  font-family: 'Press Start 2P';
  src: url('@/assets/fonts/kongtext.ttf');
}

.header-link {
  display: block;
  padding: 8px;
}
</style>
