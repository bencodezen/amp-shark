<script setup lang="ts">
import useTimer from '@/composables/useTimer'
import useScoreApi from '@/composables/useScoreApi'

const { startStopTimer, totalTimeInMs } = useTimer
const { addUpdateHighScore, hasScore } = useScoreApi

async function submitScore() {
  await addUpdateHighScore(totalTimeInMs.value)
}

startStopTimer()
</script>

<template>
  <div>
    <h1>Complete</h1>
    <p>Your time is: {{ totalTimeInMs }} ms ({{ hasScore }})</p>
    <button @click="submitScore">Submit score</button>
  </div>
</template>

<style lang="scss" scoped></style>
