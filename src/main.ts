import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

const app = createApp(App)

// Vue Router
import { router } from '@/router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

// @unhead/vue
import { createHead } from '@unhead/vue'
const head = createHead()
app.use(head)

Amplify.configure(outputs)

app.mount('#app')
