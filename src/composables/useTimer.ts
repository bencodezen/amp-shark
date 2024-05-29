import { ref } from 'vue'

let startStopFn: any

const ctaState = ref('Start')
const counter = ref(0)
const ms = ref(0)
const s = ref(0)
const m = ref(0)
const h = ref(0)

function startStopTimer() {
  if (ctaState.value === 'Stop') {
    clearInterval(startStopFn)
    ctaState.value = 'Start'
  } else if (ctaState.value === 'Start') {
    startStopFn = setInterval(() => {
      ms.value = counter.value % 100
      if (counter.value > 0 && ms.value === 0 && s.value < 60) {
        s.value++
      }
      if (counter.value > 0 && s.value === 60 && m.value < 60) {
        s.value = 0
        m.value++
      }
      if (counter.value > 0 && m.value === 60 && h.value < 24) {
        m.value = 0
        h.value++
      }
      if (h.value >= 24) {
        h.value = 0
      }
      counter.value++
    }, 10)

    ctaState.value = 'Stop'
  }
}

function resetTimer() {
  clearInterval(startStopFn)
  counter.value = 0
  ms.value = 0
  s.value = 0
  m.value = 0
  h.value = 0

  ctaState.value = 'Start'
}

export default {
  ctaState,
  counter,
  ms,
  s,
  m,
  h,
  resetTimer,
  startStopTimer
}
