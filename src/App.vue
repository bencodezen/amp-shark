<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthenticator } from '@aws-amplify/ui-vue'
import routes from './router/routes'

const awsAuthenticator = useAuthenticator()
const route = useRoute()
</script>

<template>
  <p>{{ awsAuthenticator.user }}</p>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <RouterLink :to="route.path">{{ route.path }}</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView :key="route.fullPath" />
</template>
