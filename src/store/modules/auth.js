const state = {
    godQuestionBank: [
        {
            title: '如何切换老板、大神、团长三种身份？（温馨提醒：此题容易答错哦！）',
            answerA: '点击打团页面中的滴滴logo',
            answerB: '点击个人信息页面中切换身份',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '是否能在平台上与客户达成共识，私下帮客户代打？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '大神本身抢到了订单但是又没空打，可以跟客户说晚点再玩或者重约时间吗？',
            answerA: '不小心抢到的当然可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '与客户发生冲突，在平台或服务过程中谩骂、诋毁及对客户进行恶意骚扰、人身攻击、会导致什么惩罚？',
            answerA: '直接取消滴滴打团资格',
            answerB: '没事的，应该就冻结一下吧',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '可以拒绝与客户语音文字交流吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '是否能在平台上与客户私下发广告、传播色情？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '游戏通关时需要通过QQ或其他方式保存翻牌截图吗？',
            answerA: '不需要，只有团长需要保存截图',
            answerB: '需要，大神和团长都需要保存截图',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '滴滴打团账号违规了但不是本人玩的，仅是借给朋友玩的，这样能避免处罚吗？',
            answerA: '不能，惩罚只针对账号',
            answerB: '可以',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '订单在什么情况下不会受到处罚（减少经验值）？',
            answerA: '网络异常炸团导致订单未完成',
            answerB: '无，所有未完成订单都会视情况减少不同经验值',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '可以在跟客户商议后私自修改通关时间及截图吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '客户态度恶劣，是否可以与客户发生冲突？',
            answerA: '不可以，并建议可以有问题可联系平台客服咨询',
            answerB: '可以',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '可以在平台上引导客户使用第三方平台下订单吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '在第三方微信或QQ平台收取客户服务费可以吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '大神抢到订单，但因自身原因不能打，让朋友帮忙打，朋友不懂规则可以乱打吗？',
            answerA: '不是本人点击的当然没有关系',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '初审身份证，装备截图等信息是否可以使用他人的资料？',
            answerA: '可以',
            answerB: '不可以，一经发现信息不符，将直接取消大神资格',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '老板要求大神配合刷单，骗取平台补贴福利。该怎么办？',
            answerA: '开开心心的参与，安慰自己平台肯定查不到',
            answerB: '拒绝，并举报给客服',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '服务过程中，客户通过文字或语音制造大量针对大神的不文明语言或骚扰，且沟通无效，应该如何做？',
            answerA: '消极操作或挂机跟客户对喷',
            answerB: '停止语音或文字交流',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '大神抢到订单后，因为自身原因无法赴单，可以找其他途径代服务订单，或私下联系用户修改订单吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '大神是否可以加入团队后秒退？',
            answerA: '不可以！频繁操作将会降低信用分！',
            answerB: '可以',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '开始接单之前，是否必须完成个人资料？',
            answerA: '是的',
            answerB: '不是',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '大神服务过程中，若客户恶意挂机或堵门报复，大神应如何做？',
            answerA: '愤怒的辱骂嘲讽客户',
            answerB: '保存截图或视频通过客服申诉',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '大神违反游戏规则了，可以减轻惩罚吗？',
            answerA: '不可以！违反规则必定按规则惩罚，降低信用分',
            answerB: '可以',
            trueAnswer: 0,
            pd: 3
        }, {
            title: '一个人可以申请多个滴滴打团账号吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '大神可以越过平台使用其他平台向客户收取服务费吗？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '是否能在平台上散播虚假言论，诋毁平台、造谣？',
            answerA: '可以',
            answerB: '不可以',
            trueAnswer: 1,
            pd: 3
        }, {
            title: '客户主动要求帮TA代打（代练），可以答应客户的要求吗？',
            answerA: '可以',
            answerB: '不可以，并明确告知客户我们不是代练平台',
            trueAnswer: 1,
            pd: 3
        }
    ],
    
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