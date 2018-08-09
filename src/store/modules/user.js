const state = {
	menuData: [{
        icon: 'icon-order',
        name: '我的订单',
        url: 'myOrder'
    }, {
        icon: 'icon-qianbao',
        name: '我的钱包',
        url: 'myWallet'
    }, {
        icon: 'icon-weibiaoti2fuzhi02',
        name: '我的优惠券',
        url: 'myCoupon'
    }, {
        icon: 'icon-msnui-v',
        name: '大神认证',
        url: 'Authentication'
    }, {
        icon: 'icon-fenxiang',
        name: '好友推荐',
        url: 'Recommend'
    }, {
        icon: 'icon-kefu',
        name: '客服与帮助',
        url: 'serviceAndHelp'
    }],
    isLogin: false,
    userInfo: {
        username: '',
        phone: '',
        qq: '',
        type: ''
    },
}

const getters = {
}

const mutations = {
    
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
