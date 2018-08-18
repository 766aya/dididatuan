const state = {
	menuData: [{
        icon: 'icon-order',
        name: '我的订单',
        url: 'myOrder',
        auth: true
    }, {
        icon: 'icon-qianbao',
        name: '我的钱包',
        url: 'myWallet',
        auth: true
    }, {
        icon: 'icon-weibiaoti2fuzhi02',
        name: '我的优惠券',
        url: 'myCoupon',
        auth: true
    }, {
        icon: 'icon-msnui-v',
        name: '大神认证',
        url: 'Authentication',
        auth: true
    }, {
        icon: 'icon-fenxiang',
        name: '好友推荐',
        url: 'Recommend',
        auth: true
    }, {
        icon: 'icon-kefu',
        name: '客服与帮助',
        url: 'serviceAndHelp',
        auth: false
    }],
    isLogin: false,
    userInfo: {
        head_image: '', // 头像
        username: '', // 用户名
        phone: '', // 手机号
        qq: '', // QQ号
        type: '', //用户类型
        is_verify: '', // 认证状态
        resource_uri: '', // 用户资源
    },
    roleList: []
}

const getters = {
}

const mutations = {
    getRoleList (state, data) {
        state.roleList = data
    }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
