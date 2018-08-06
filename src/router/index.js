import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/mainpage/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: homepage
    }
  ]
})
