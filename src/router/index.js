import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/mainpage/homepage'
import message from '@/mainpage/message'
import DaTuan from '@/mainpage/datuan'
import User from '@/mainpage/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: homepage,
      children: [
        {
          path: 'message',
          name: 'Message',
          component: message
        }, {
          path: 'datuan',
          name: 'DaTuan',
          component: DaTuan
        }, {
          path: 'user',
          name: 'User',
          component: User
        }, {
          path: '*',
          name: 'DaTuan',
          component: DaTuan
        }
      ]
    }
  ]
})
