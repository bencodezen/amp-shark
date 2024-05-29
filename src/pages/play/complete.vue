<script setup lang="ts">
import useTimer from '@/composables/useTimer'
import useScoreApi from '@/composables/useScoreApi'
import { useRouter } from 'vue-router'

const router = useRouter()
const { startStopTimer, totalTimeInMs, resetTimer } = useTimer
const { addUpdateHighScore, hasScore } = useScoreApi

async function submitScore() {
  await addUpdateHighScore(totalTimeInMs.value)
  router.push('/high-score')
  resetTimer()
}

startStopTimer()
</script>

<template>
  <div class="complete-page">
    <h1>Complete</h1>
    <p>Your time is: {{ totalTimeInMs }}!</p>
    <button @click="submitScore" class="nes-btn is-success">
      Submit score
    </button>
  </div>
</template>

<style lang="scss" scoped>
.complete-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.5rem;
  }
}
</style>
