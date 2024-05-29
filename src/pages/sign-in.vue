<script setup lang="ts">
import TheAuthenticator from '@/components/TheAuthenticator.vue'
</script>

<template>
  <main class="sign-in-page">
    <h1>Sign-in</h1>
    <TheAuthenticator />
  </main>
</template>

<style lang="scss" scoped>
.sign-in-page {
  width: 960px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
