<script setup lang="ts">
// @ts-nocheck
// Inspired by https://codepen.io/UmairAnis99/pen/abNYgMz

import { useRouter } from 'vue-router'
import timer from '@/composables/useTimer'
import { useGameStore } from '@/stores/GameStore'

const router = useRouter()
const gameStore = useGameStore()

const { ctaState, h, m, s, ms, startStopTimer } = timer

async function startGame() {
  await router.push('/play/round-1')
  startStopTimer()
}

function formatTimeUnit(timeUnit) {
  return timeUnit.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}
</script>

<template>
  <div>
    <div class="container">
      <div class="timer">
        {{ formatTimeUnit(h) }} : {{ formatTimeUnit(m) }} :
        {{ formatTimeUnit(s) }} : {{ formatTimeUnit(ms) }}
      </div>
      <button
        v-if="gameStore.gameState !== 'Complete'"
        @click="startGame"
        class="nes-btn is-primary"
      >
        {{ ctaState }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.timer {
  margin-bottom: 30px;
  font-size: 2rem;
}
</style>
