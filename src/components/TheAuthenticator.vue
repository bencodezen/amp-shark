<script setup lang="ts">
import { Authenticator as AWSAuthenticator } from '@aws-amplify/ui-vue'
import { Amplify } from 'aws-amplify'
import outputs from '../../amplify_outputs.json'

Amplify.configure(outputs)

const authenticatorOptions = {
  signUp: {
    username: {
      placeholder: 'Enter your username',
      order: 1
    }
  }
}
</script>

<template>
  <AWSAuthenticator :form-fields="authenticatorOptions">
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </AWSAuthenticator>
</template>

<style>
@import url('@aws-amplify/ui-vue/styles.css');
</style>
