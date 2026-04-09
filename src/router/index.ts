import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import('../views/PublicationView.vue')
  },
  {
    path: '/joinus',
    name: 'joinus',
    component: () => import('../views/JoinusView.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/MemberView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]
