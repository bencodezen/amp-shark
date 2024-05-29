import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useGameStore = defineStore('GameStore', () => {
  const timeScore = useStorage('ampshark-time-score', 0)
  const gameState = useStorage('ampshark-game-state', 'New')

  function setGameState(state: string) {
    gameState.value = state
  }

  return { timeScore, gameState, setGameState }
})
