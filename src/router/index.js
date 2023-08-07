import Vue from 'vue'
import Vuex from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'kanban',
    component: ()=> import('../views/KanbansView.vue')
  },
  {
    path: '/Table',
    name: 'table',
    component: ()=> import('../views/DataTableView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
