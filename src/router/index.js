import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/mainpage/homepage'
import message from '@/mainpage/message'
import DaTuan from '@/mainpage/datuan'
import User from '@/mainpage/user'
import Login from '@/mainpage/login'
import Register from '@/mainpage/register'

import independentPage from '@/independentpage/independentpage'
import subpage from '@/independentpage/subpage'

import MessageContent from '@/independentpage/MessageContent'

import myOrder from '@/independentpage/myOrder/index'

import myWallet from '@/independentpage/myWallet/index'
import PutForward from '@/independentpage/myWallet/PutForward'

import myCoupon from '@/independentpage/myCoupon/index'
import Authentication from '@/independentpage/Authentication/index'
import Recommend from '@/independentpage/Recommend/index'
import serviceAndHelp from '@/independentpage/serviceAndHelp/index'

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
        }, {
          path: 'login',
          name: 'Login',
          component: Login,
        },{
          path: 'register',
          name: 'Register',
          component: Register,
        }
      ]
    }, {
      path: '/message/:id',
      name: 'MessageContent',
      component: MessageContent
    }, {
      path: '/independentpage',
      name: 'independentPage',
      component: independentPage,
      children: [
        {
          path: 'myOrder',
          name: 'myOrder',
          component: myOrder
        }, {
          path: 'myWallet',
          name: 'myWallet',
          component: myWallet
        }, {
          path: 'myCoupon',
          name: 'myCoupon',
          component: myCoupon
        }, {
          path: 'Authentication',
          name: 'Authentication',
          component: Authentication
        }, {
          path: 'Recommend',
          name: 'Recommend',
          component: Recommend
        }, {
          path: 'serviceAndHelp',
          name: 'serviceAndHelp',
          component: serviceAndHelp
        }, {
          path: 'PutForward',
          name: 'PutForward',
          component: PutForward
        }
      ]
    }, {
      path: '/subpage',
      name: 'subpage',
      component: subpage,
      children: [
        {
          path: 'PutForward',
          name: 'PutForward',
          component: PutForward
        }
      ]
    }
  ]
})
