import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './routes'

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
