import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
