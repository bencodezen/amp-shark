<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onKeyStroke } from '@vueuse/core'

const route = useRoute()

const cheatPosition = ref(0)
const konami = ref([
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
])

onKeyStroke(true, e => {
  if (e.key === konami.value[cheatPosition.value]) {
    cheatPosition.value++
  }

  if (cheatPosition.value === konami.value.length) {
    alert('Konami Code Activated!')
    window.location = 'https://www.youtube.com/watch?v=mx86-rTclzA'
  }
})
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
