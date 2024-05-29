import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

const app = createApp(App)

// Vue Router
import { router } from '@/router'
app.use(router)

Amplify.configure(outputs)

app.mount('#app')
