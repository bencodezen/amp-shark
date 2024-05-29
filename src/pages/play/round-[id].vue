<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <p>{{ route }}</p>
</template>

<style lang="scss" scoped></style>
