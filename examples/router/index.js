import Vue from 'vue'
import VueRouter from "vue-router"
import Button from '../pages/button'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Button',
    component: Button,
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
