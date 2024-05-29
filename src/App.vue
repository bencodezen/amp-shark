<script setup lang="ts">
import { useAuthenticator } from '@aws-amplify/ui-vue'

const awsAuthenticator = useAuthenticator()
</script>

<template>
  <p>{{ awsAuthenticator.user }}</p>
  <RouterView />
</template>
