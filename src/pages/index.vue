<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home Page',
  meta: [
    {
      name: 'description',
      content: 'This is the home page'
    }
  ]
})
</script>

<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<style lang="scss" scoped></style>
