import { computed, ref, toValue } from 'vue'
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
}

async function createScore(timeScore) {
  const { data, errors } = await client.models.Score.create(
    {
      handle: awsAuthenticator.user.username,
      time: timeScore
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

async function updateScore(timeScore) {
  await client.models.Score.update(
    {
      id: userScore.value.id,
      handle: awsAuthenticator.user.username,
      time: timeScore
    },
    {
      authMode: 'userPool'
    }
  )

  await listScores()
}

async function addUpdateHighScore(score) {
  const timeScore = toValue(score)

  if (hasScore.value) {
    await updateScore(timeScore)
  } else {
    await createScore(timeScore)
  }
}

export default {
  scores,
  hasScore,
  userScore,
  timeScore,
  listScores,
  addUpdateHighScore,
  deleteScore
}
