<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { useAuthenticator } from '@aws-amplify/ui-vue'

const client = generateClient<Schema>()
const awsAuthenticator = useAuthenticator()

// create a reactive reference to the array of scores
const scores = ref<Array<Schema['Score']['type']>>([])
const timeScore = ref<Schema['Score']['type']['time']>(0)

function listScores() {
  client.models.Score.observeQuery().subscribe({
    next: ({ items, isSynced }) => {
      scores.value = items
    }
  })
}

function createTodo() {
  client.models.Score.create({
    handle: awsAuthenticator.user.username,
    time: timeScore.value
  }).then(() => {
    // After creating a new todo, update the list of scores
    listScores()
  })
}

// fetch scores when the component is mounted
onMounted(() => {
  listScores()
})
</script>

<template>
  <main>
    <h1>Scoreboard</h1>
    <input v-model="timeScore" type="number" />
    <button @click="createTodo">+ new</button>
    <ul>
      <li v-for="score in scores" :key="score.id">
        {{ score.handle }} - {{ score.time }}
      </li>
    </ul>
    <div>
      🥳 App successfully hosted. Try creating a new todo.
      <br />
      <a
        href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/"
      >
        Review next steps of this tutorial.
      </a>
    </div>
  </main>
</template>
