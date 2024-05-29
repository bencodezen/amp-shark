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
    <div class="nes-table-responsive">
      <table class="nes-table is-bordered is-centered">
        <thead>
          <tr>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="score in scores" :key="score.id">
            <td>{{ score.handle }}</td>
            <td>{{ score.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
