<template>
    <div id="bossAsk">
        <div class="title">提现问题</div>
        <van-collapse v-model="activeName.tixian" accordion class="text">
            <van-collapse-item v-for="(item, index) in tixianAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">下单问题</div>
        <van-collapse v-model="activeName.xiadan" accordion class="text">
            <van-collapse-item v-for="(item, index) in xiadanAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">副本问题</div>
        <van-collapse v-model="activeName.fuben" accordion class="text">
            <van-collapse-item v-for="(item, index) in fubenAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">队伍问题</div>
        <van-collapse v-model="activeName.duiwu" accordion class="text">
            <van-collapse-item v-for="(item, index) in duiwuAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">账号问题</div>
        <van-collapse v-model="activeName.zhanghao" accordion class="text">
            <van-collapse-item v-for="(item, index) in accountAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">关于活动</div>
        <van-collapse v-model="activeName.huodong" accordion class="text">
            <van-collapse-item v-for="(item, index) in huodongAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Collapse, CollapseItem } from 'vant';
    Vue.use(Collapse).use(CollapseItem);

    export default {
        name: 'bossAsk',
        data() {
            return {
                activeName: {
                    tixian: '',
                    xiadan: '',
                    fuben: '',
                    duiwu: '',
                    zhanghao: '',
                    huodong: ''
                },
                tixianAskList: [{
                    question: '老板是否能进行提现？',
                    answer: '不能'
                }],
                xiadanAskList: [{
                    question: '无人接单怎么办？',
                    answer: '如果长时间没人接单，建议可以选择更换时段再下单哦。'
                }, {
                    question: '如何下单？',
                    answer: '在页面首页选择打团，即可快速下单。'
                }, {
                    question: '订单价格如何查询？',
                    answer: '可在下单页面获得。'
                }, {
                    question: '下单后能否邀请好友？',
                    answer: '好友功能暂未开启，后续会开通哦！'
                }],
                fubenAskList: [{
                    question: '副本未通关会退款吗？',
                    answer: '1、角色掉线5分钟内未登录游戏导致未通关，不会退款。  2、炸团导致大神或团长掉线，副本未通关，支付款项会退回原账户。  3、由于大神或团长操作失误导致副本未通关，支付款项会退回原账户。'
                }, {
                    question: '大神/团长态度恶劣怎么办？',
                    answer: '请在订单结束后给出相应评分及评价，如果态度极其恶劣，请前往“个人信息-联系客服”进行投诉，并提供截图。'
                }, {
                    question: '团长未通关却恶意结单怎么办？',
                    answer: '请在订单结束后给出相应评分及评价，如果态度极其恶劣，请前往“个人信息-联系客服”进行投诉，并提供截图。查证后平台会返还订单本金，且对团长进行永久封禁惩罚。'
                }, {
                    question: '游戏中是否可以邀请好友？',
                    answer: '不可以。'
                }],
                duiwuAskList: [{
                    question: '用户可以开团吗？',
                    answer: '目前只能由团长开团。'
                }, {
                    question: '滴滴打团的服务流程是？',
                    answer: '1、团长新建团队；  2、队伍开始招募大神，大神满员之后，团长点击就绪；  3、老板完成支付后进入团队，团长点击开始打团；  4、团长结束服务，填写结果，老板评价，订单完成。'
                }, {
                    question: '副本是如何收费的？',
                    answer: '支付价格目前由平台统一定价。'
                }],
                accountAskList: [{
                    question: '一个手机号可以注册多少个滴滴打团账号？',
                    answer: '目前一个手机号仅能绑定一个滴滴打团账号。'
                }],
                huodongAskList: [{
                    question: '新用户收单活动规则是怎样？',
                    answer: '请前往“个人信息-优惠券-活动规则”进行查看。'
                }, {
                    question: '活动中遇到问题怎么办？',
                    answer: '请前往“个人信息-联系客服”进行反馈，并提供截图。如确定存在问题会有额外奖励！'
                }]
            }
        }
    }
</script>

<style scoped>
    .title {
        height: 40px;
        line-height: 40px;
        /*font-size: 1rem;*/
        padding-left: 10px;
        color: #333333;
    }
    #bossAsk .text div {
        font-size: 0.8rem;
        line-height: 16px;
    }
</style>
