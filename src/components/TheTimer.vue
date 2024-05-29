<script setup lang="ts">
// @ts-nocheck
// Inspired by https://codepen.io/UmairAnis99/pen/abNYgMz

import { useRouter } from 'vue-router'
import timer from '@/composables/useTimer'

const router = useRouter()

const { ctaState, h, m, s, ms, startStopTimer, resetTimer } = timer

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

console.log(timer)
</script>

<template>
  <div>
    <h1>The Timer</h1>
    <div class="container">
      <h1 class="title">Stopwatch</h1>
      <div class="timer">
        {{ formatTimeUnit(h) }} : {{ formatTimeUnit(m) }} :
        {{ formatTimeUnit(s) }} : {{ formatTimeUnit(ms) }}
      </div>
      <div class="buttonsBlock">
        <button @click="startGame" type="button">
          {{ ctaState }}
        </button>
        <button @click="resetTimer" type="button">Reset</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
