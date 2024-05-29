import HomePage from '@/pages/index.vue'

export default [
  { path: '/', component: HomePage },
  {
    path: '/sign-in',
    component: () => import('@/pages/sign-in.vue')
  }
]
