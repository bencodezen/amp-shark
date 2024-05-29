import HomePage from '@/pages/index.vue'

export default [
  { path: '/', component: HomePage },
  {
    path: '/sign-in',
    component: () => import('@/pages/sign-in.vue')
  },
  {
    path: '/high-score',
    component: () => import('@/pages/high-score.vue')
  },
  {
    path: '/play',
    component: () => import('@/pages/play/index.vue')
  },
  {
    path: '/round-:id',
    component: () => import('@/pages/play/round-[id].vue')
  }
]
