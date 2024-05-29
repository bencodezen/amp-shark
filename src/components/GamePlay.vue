<script setup lang="ts">
import { ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'

const sequencePosition = ref(0)
const validKeys = ref(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'])
const roundSequence = ref(generateArrowSequence())

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
