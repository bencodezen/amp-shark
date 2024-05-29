<script setup lang="ts">
import useTimer from '@/composables/useTimer'

const { startStopTimer, totalTimeInMs } = useTimer

startStopTimer()
</script>

<template>
  <div>
    <h1>Complete</h1>
    <p>Your time is: {{ totalTimeInMs }} ms</p>
  </div>
</template>

<style lang="scss" scoped></style>
