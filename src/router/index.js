import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/mainpage/homepage'
import message from '@/mainpage/message'
import DaTuan from '@/mainpage/datuan'
import User from '@/mainpage/user'

import MessageContent from '@/independentpage/MessageContent'
import myOrder from '@/independentpage/myOrder'
import myWallet from '@/independentpage/myWallet'
import myCoupon from '@/independentpage/myCoupon'
import Authentication from '@/independentpage/Authentication'
import Recommend from '@/independentpage/Recommend'
import serviceAndHelp from '@/independentpage/serviceAndHelp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: homepage,
      alias: '/',
      children: [
        {
          path: 'message',
          name: 'Message',
          component: message
        }, {
          path: 'datuan',
          name: 'DaTuan',
          component: DaTuan,
          alias: '/',
        }, {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/message/:id',
      name: 'MessageContent',
      component: MessageContent
    }, {
      path: '',
      name: 'myOrder',
      component: myOrder
    }, {
      path: '',
      name: 'myWallet',
      component: myWallet
    }, {
      path: '',
      name: 'myCoupon',
      component: myCoupon
    }, {
      path: '',
      name: 'Authentication',
      component: Authentication
    }, {
      path: '',
      name: 'Recommend',
      component: Recommend
    }, {
      path: '',
      name: 'serviceAndHelp',
      component: serviceAndHelp
    }
  ]
})
