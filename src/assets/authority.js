const judgeAuthority = (self, auth) => {
    // 首先判断用户是否登陆
    let isLogin = self.$store.state.user.isLogin
    return {state: isLogin, msg: '您还未登陆，请先登陆账号！'}
}

export default judgeAuthority