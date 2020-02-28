import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../components/AdminLogin.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/', redirect: '/login'},
  {path: '/login', component: AdminLogin}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
