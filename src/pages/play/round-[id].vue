<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
const sequence = ref([
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight'
])
</script>

<template>
  <p>{{ route }}</p>
  <ul style="display: flex">
    <li v-for="arrow in sequence">
      <ArrowSymbol :direction="arrow.substring(5).toLowerCase()" color="#ccc" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
