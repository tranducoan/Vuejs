import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import TodoDetailsView from '@/views/todoDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/Create',
      name: 'Create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CreateView 
    },
    {
      path: '/todo/:id',
      name: 'todoDetails',
      component: TodoDetailsView 
    },
  ]
})

export default router
