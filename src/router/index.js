import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main Screen',
    component: () => import('../views/MainScreen.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token) {
        next()
      }
      else {
        next({ name: 'Login' })
      }
    }
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token) {
        next({ name: 'Main Screen' })
      }
      else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: "Register",
    component: () => import('../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token) {
        next({ name: 'Main Screen' })
      }
      else {
        next()
      }
    }
  },
  {
    path: "*",
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')

//   if (token.length <= 0) {
//     next({name: "Login"})
//   }
//   else {
//     next()
//   }
// })

export default router
