<script setup lang="ts">
import { onMounted } from 'vue'
import useScoreApi from '@/composables/useScoreApi'

const { scores, listScores, addUpdateHighScore, deleteScore, timeScore } =
  useScoreApi

// fetch scores when the component is mounted
onMounted(() => {
  listScores()
})
</script>

<template>
  <main>
    <ul>
      <li v-for="score in scores" :key="score.id">
        {{ score }} - {{ score.time }}
        <button @click="deleteScore(score.id)">🗑️</button>
      </li>
    </ul>
  </main>
</template>
