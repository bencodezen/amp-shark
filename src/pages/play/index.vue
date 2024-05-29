<script setup lang="ts"></script>

<template>
  <main class="game-page">
    <h1>Play Game</h1>
    <TheTimer />
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.game-page {
  width: 960px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
