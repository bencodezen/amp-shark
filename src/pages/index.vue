<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useAuthenticator } from '@aws-amplify/ui-vue'
import { useGameStore } from '@/stores/GameStore'
import { useRouter } from 'vue-router'

const awsAuthenticator = useAuthenticator()
const gameStore = useGameStore()
const router = useRouter()

useHead({
  title: 'Home Page',
  meta: [
    {
      name: 'description',
      content: 'This is the home page'
    }
  ]
})

function startGame() {
  gameStore.setGameState('Start')
  router.push('/play')
}
</script>

<template>
  <div class="home-page">
    <img :src="`/images/nes-amp-shark-logo.png`" alt="" style="width: 300px" />
    <h1>AmpShark</h1>
    <ul>
      <li>
        <RouterLink
          @click.prevent="startGame"
          to="/play"
          class="nes-btn is-primary"
          >Play</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/high-score" class="nes-btn is-warning">
          High Scores
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/sign-in" class="nes-btn"> Sign-in </RouterLink>
        <button class="nes-btn" @click="awsAuthenticator.signOut">
          Sign Out
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 960px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    margin-bottom: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
