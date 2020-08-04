import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/red',
    name: 'Red',
    component: () => import(/* webpackChunkName: "red" */ '../views/Red.vue')
  },
  {
    path: '/blue',
    name: 'Blue',
    component: () => import(/* webpackChunkName: "blue" */ '../views/Blue.vue')
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: () => import(/* webpackChunkName: "yellow" */ '../views/Yellow.vue')
  },
  {
    path: '/green',
    name: 'Green',
    component: () => import(/* webpackChunkName: "green" */ '../views/Green.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
