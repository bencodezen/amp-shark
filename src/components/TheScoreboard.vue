<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { useAuthenticator } from '@aws-amplify/ui-vue'

const client = generateClient<Schema>({})
const awsAuthenticator = useAuthenticator()

// create a reactive reference to the array of scores
const scores = ref<Array<Schema['Score']['type']>>([])
const timeScore = ref<Schema['Score']['type']['time']>(0)

const userScore = computed(() => {
  return scores.value.find(
    score => score.owner === awsAuthenticator.user.userId
  )
})

const hasScore = computed(() => {
  return scores.value.some(
    score => score.owner === awsAuthenticator.user.userId
  )
})

async function listScores() {
  const { data, errors } = await client.models.Score.list({
    authMode: 'userPool'
  })

  scores.value = data ?? []

  console.log(data, errors)
}

async function createScore() {
  const { data, errors } = await client.models.Score.create(
    {
      handle: awsAuthenticator.user.username,
      time: timeScore.value
    },
    {
      authMode: 'userPool'
    }
  )

  await listScores()
}

async function deleteScore(id: Schema['Score']['type']['id']) {
  const { data, errors } = await client.models.Score.delete(
    {
      id
    },
    {
      authMode: 'userPool'
    }
  )

  await listScores()
}

async function updateScore() {
  await client.models.Score.update(
    {
      id: userScore.value.id,
      handle: awsAuthenticator.user.username,
      time: timeScore.value
    },
    {
      authMode: 'userPool'
    }
  )

  await listScores()
}

async function addUpdateHighScore() {
  if (hasScore.value) {
    await updateScore()
  } else {
    await createScore()
  }
}

// fetch scores when the component is mounted
onMounted(() => {
  listScores()
})
</script>

<template>
  <main>
    <h1>Scoreboard</h1>
    <p>Has Score: {{ hasScore }} - {{ userScore }}</p>
    <input v-model="timeScore" type="number" />
    <button @click="addUpdateHighScore">Add / Update Score</button>
    <ul>
      <li v-for="score in scores" :key="score.id">
        {{ score }} - {{ score.time }}
        <button @click="deleteScore(score.id)">🗑️</button>
      </li>
    </ul>
  </main>
</template>
