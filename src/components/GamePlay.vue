<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import { useGameStore } from '@/stores/GameStore'

const route = useRoute()
const router = useRouter()
const gameStore = useGameStore()

const sequencePosition = ref(0)
const validKeys = ref(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'])
const roundSequence = ref(generateArrowSequence())
const nextRound = computed(() => {
  return Number(route.params.id) + 1
})

const endOfRound = computed(
  () => sequencePosition.value === roundSequence.value.length
)

const endOfGame = computed(() => {
  return nextRound.value > 3
})

function checkArrowSequence(key: string) {
  if (key === roundSequence.value[sequencePosition.value][0]) {
    roundSequence.value[sequencePosition.value][1] = true
    sequencePosition.value++
  } else {
    console.log('Game over')
    roundSequence.value[sequencePosition.value][1] = false
    sequencePosition.value = 0
  }
}

function generateArrowSequence(length: number = 6): Array<[string, boolean]> {
  const sequence = []
  for (let i = 0; i < length; i++) {
    sequence.push([
      validKeys.value[Math.floor(Math.random() * validKeys.value.length)],
      null
    ])
  }
  return sequence
}

function generateArrowColor(state: boolean | null) {
  if (state == null) {
    return 'gray'
  }

  return state ? 'green' : 'red'
}

onKeyStroke(true, e => {
  checkArrowSequence(e.key)
  console.log(roundSequence.value)
  generateArrowColor(e.key, roundSequence.value[sequencePosition.value][0])
})

watch(endOfRound, value => {
  if (endOfGame.value) {
    console.log('End of game')
    gameStore.setGameState('Complete')
    router.push('/play/complete')
  }

  if (value) {
    console.log('End of round')
    console.log(Number(route.params.id) + 1)
    router.push(`/play/round-${nextRound.value}`)
    sequencePosition.value = 0
    roundSequence.value = generateArrowSequence()
  }
})
</script>

<template>
  <div style="display: flex">
    <ArrowSymbol
      v-for="sequence in roundSequence"
      :direction="sequence[0]"
      :color="generateArrowColor(sequence[1])"
    />
  </div>
</template>

<style lang="scss" scoped></style>
