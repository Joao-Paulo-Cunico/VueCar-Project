import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Classicos from '../views/Classicos.vue'
import Esportivos from '../views/Esportivos.vue'
import Luxo from '../views/Luxo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/classicos',
      component: Classicos
    },
    {
      path: '/esportivos',
      component: Esportivos
    },
    {
      path: '/luxo',
      component: Luxo
    }
  ]
})

export default router