import Vue from 'vue'
import VueRouter from 'vue-router'
import RowSpan from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'rowspan',
    component: RowSpan
  },
  {
    path: '/single',
    name: 'single',
    component: () => import('../views/Single.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../views/More.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
