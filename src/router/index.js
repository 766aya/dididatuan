import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/mainpage/homepage'
import message from '@/mainpage/message'
import DaTuan from '@/mainpage/datuan'
import User from '@/mainpage/user'
import Login from '@/mainpage/login'
import Register from '@/mainpage/register'

import independentPage from '@/independentpage/independentpage' // 独立页面
import subpage from '@/independentpage/subpage' // 底层页面

import MessageContent from '@/independentpage/MessageContent'

import myOrder from '@/independentpage/myOrder/index'

//角色管理
import myRoleControl from '@/independentpage/myRoleControl/index'
import addRole from '@/independentpage/myRoleControl/addRole'

// 我的钱包
import myWallet from '@/independentpage/myWallet/index'
import PutForward from '@/independentpage/myWallet/PutForward' // 提现
import TransactionRecord from '@/independentpage/myWallet/TransactionRecord' // 交易记录

// 优惠券
import myCoupon from '@/independentpage/myCoupon/index'
import Recommend from '@/independentpage/Recommend/index'

// 大神认证
import Authentication from '@/independentpage/Authentication/index'
import greatGod from '@/independentpage/Authentication/greatGod' // 大神认证
import method from '@/independentpage/Authentication/greatGod/method' // 使用方法学习
import assessment from '@/independentpage/Authentication/greatGod/assessment' // 规则考核
import standard from '@/independentpage/Authentication/greatGod/standard' // 管理规范
import authenticate from '@/independentpage/Authentication/greatGod/authenticate' // 角色认证
import groupHead from '@/independentpage/Authentication/groupHead' // 团长认证
import payDeposit from '@/independentpage/Authentication/payDeposit' // 缴纳保证金
import RealName from '@/independentpage/Authentication/RealName' // 实名认证
import Calculator from '@/independentpage/Authentication/Calculator' // 佣金计算器

// 客服与帮助
import serviceAndHelp from '@/independentpage/serviceAndHelp/index'
import bossAsk from '@/independentpage/serviceAndHelp/bossAsk' //老板问答
import godAsk from '@/independentpage/serviceAndHelp/godAsk'  //大神问答
import bossCourse from '@/independentpage/serviceAndHelp/bossCourse' // 老板教程
import headCourse from '@/independentpage/serviceAndHelp/headCourse' // 团长教程
import godCourse from '@/independentpage/serviceAndHelp/godCourse' // 大神教程
import didiTeam from '@/independentpage/serviceAndHelp/didiTeam' //滴滴团队
import callHelp from '@/independentpage/serviceAndHelp/callHelp' //联系我
import cleanCache from '@/independentpage/serviceAndHelp/cleanCache' //清除缓存

// 我要打团
import createTeam from '@/independentpage/createTeam' // 创建队伍
import matchTeam from '@/independentpage/createTeam/matchTeam' // 寻找队伍

// 测试页面
import test from '@/independentpage/test' // 寻找队伍

Vue.use(Router)


// 我的钱包
const myWalletList = [{
  path: 'PutForward',
  name: 'PutForward',
  component: PutForward
}, {
  path: 'TransactionRecord',
  name: 'TransactionRecord',
  component: TransactionRecord
}]

// 大神认证
const greatGodList = [{
  path: 'greatGod',
  name: 'greatGod',
  component: greatGod
}, {
  path: 'method',
  name: 'method',
  component: method
}, {
  path: 'assessment',
  name: 'assessment',
  component: assessment
}, {
  path: 'standard',
  name: 'standard',
  component: standard
}, {
  path: 'authenticate',
  name: 'authenticate',
  component: authenticate
}, {
  path: 'groupHead',
  name: 'groupHead',
  component: groupHead
}, {
  path: 'payDeposit',
  name: 'payDeposit',
  component: payDeposit
}, {
  path: 'RealName',
  name: 'RealName',
  component: RealName
}, {
  path: 'Calculator',
  name: 'Calculator',
  component: Calculator
}]

// 客服与帮助
const serviceAndHelpList = [{
  path: 'bossAsk',
  name: 'bossAsk',
  component: bossAsk
}, {
  path: 'godAsk',
  name: 'godAsk',
  component: godAsk
}, {
  path: 'bossCourse',
  name: 'bossCourse',
  component: bossCourse
}, {
  path: 'headCourse',
  name: 'headCourse',
  component: headCourse
}, {
  path: 'godCourse',
  name: 'godCourse',
  component: godCourse
}, {
  path: 'didiTeam',
  name: 'didiTeam',
  component: didiTeam
}, {
  path: 'callHelp',
  name: 'callHelp',
  component: callHelp
}, {
  path: 'cleanCache',
  name: 'cleanCache',
  component: cleanCache
}]

// 角色管理
const myRoleControlList = [{
  path: 'myRoleControl',
  name: 'myRoleControl',
  component: myRoleControl
}, {
  path: 'addRole',
  name: 'addRole',
  component: addRole
}]

// 我要打团
const createTeamList = [{
  path: 'createTeam',
  name: 'createTeam',
  component: createTeam
}, {
  path: 'matchTeam',
  name: 'matchTeam',
  component: matchTeam
}]


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
          path: 'test',
          name: 'test',
          component: test
        }
      ]
    }, {
      path: '/subpage',
      name: 'subpage',
      component: subpage,
      children: []
        .concat(greatGodList)
        .concat(serviceAndHelpList)
        .concat(myWalletList)
        .concat(myRoleControlList)
        .concat(createTeamList)
    }
  ]
})
