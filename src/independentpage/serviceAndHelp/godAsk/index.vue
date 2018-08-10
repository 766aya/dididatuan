<template>
    <div id="godAsk">
        <div class="title">成为大神</div>
        <van-collapse v-model="cwds" accordion class="text">
            <van-collapse-item v-for="(item, index) in cwdsAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">大神接单问题</div>
        <van-collapse v-model="jiedan" accordion class="text">
            <van-collapse-item v-for="(item, index) in jiedanAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">大神打团问题</div>
        <van-collapse v-model="datuan" accordion class="text">
            <van-collapse-item v-for="(item, index) in datuanAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">经验等级</div>
        <van-collapse v-model="jingyan" accordion class="text">
            <van-collapse-item v-for="(item, index) in jingyanAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
                {{item.answer}}
            </van-collapse-item>
        </van-collapse>
        <div class="title">提现问题</div>
        <van-collapse v-model="tixian" accordion class="text">
            <van-collapse-item v-for="(item, index) in tixianAskList" :title="index+1+'.'+item.question" :name="index" :key="'ask'+index">
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
        name: 'godAsk',
        data() {
            return {
                cwds: '',
                jiedan: '',
                datuan: '',
                jingyan: '',
                tixian: '',
                cwdsAskList: [{
                    question: '成为大神的条件是什么？',
                    answer: 'A、年满16周岁。  B通过打手认证。'
                },{
                    question: '成为大神的流程是什么？',
                    answer: '实名认证→支付保证金→实力审核→大神培训→测试答案→成为大神'
                },{
                    question: '如何进入实名认证？',
                    answer: 'A、在小程序中选择右下角个人信息。  B、点击自制认证。  C、输入个人信息及身份证正反面照片以及手持身份证照片'
                },{
                    question: '成为大神需要交纳多少保证金？',
                    answer: '目前成为大神需要交纳30元保证金。'
                },{
                    question: '打手认证通过的条件？',
                    answer: '请点击打手认证中查看示例查看详细条件。'
                },{
                    question: '认证时长是多久？',
                    answer: '一般3个工作日内（周末及法定节假日不计）请耐心等待。'
                },{
                    question: '认证失败是什么原因？',
                    answer: 'A、身份证需要手持并且本人入境。\nB、手机号信息与姓名不符。\nC、打手认证装备及游戏水平不合格。'
                },{
                    question: '如何重新审核？',
                    answer: '玩家看到认证未通过时，重新上传相关资料即可。'
                }],
                jiedanAskList: [{
                    question: '如何切换为大神？',
                    answer: '请前往‘打团’，点击滴滴logo切换为大神。'
                }, {
                    question: '找不到团队怎么办？',
                    answer: '首先加以您检查一下网络环境，如果网络环境无异常，可能是平台内当前区服无队伍。'
                }, {
                    question: '用户恶意差评？',
                    answer: '如遇用户恶意差评，请在联系客服汇总详细描述情况，并提供相应的对战截图，聊天记录。'
                }],
                datuanAskList: [{
                    question: '大神接单中可否邀请好友？',
                    answer: '玩家可自行分享小程序给拥有资质的好友加入同一团队。'
                }, {
                    question: '副本未通关是否仍有佣金？',
                    answer: '任何原因下，副本未通关都不会取得佣金。'
                }, {
                    question: '副本未通关需要补偿用户吗？',
                    answer: '副本未通关，用户得到平台全额退款，无需补偿。'
                }, {
                    question: '团队人数是多少？',
                    answer: '目前团队上限为4人，团长可通过点击队伍头像图标自行调整团队人数。'
                }, {
                    question: '滴滴打团服务流程是什么？',
                    answer: '1、团长新建团队；  2、队伍开始招募大神，大神满员之后，团长点击就绪；  3、老板完成支付后进入团队，团长点击开始打团；  4、团长结束服务，填写结果，老板评价，订单完成。'
                }, {
                    question: '3个大神带多个老板的情况下，大神的报酬如何分配？',
                    answer: '大神的经验等级越高，所获得的报酬越多。'
                }],
                jingyanAskList: [{
                    question: '经验等级是什么？',
                    answer: '当玩家成为大神或团长后，经验等级开启。经验等级将反应玩家的游戏水平，经验值，并依据规则加减。'
                }, {
                    question: '经验等级是如何划分的？',
                    answer: '大神和团长依据不同的经验值获得相应的经验等级。  A.青铜：0  B.白银：200  C.黄金：500  D.钻石：2000'
                }, {
                    question: '经验等级有什么作用？',
                    answer: '越高的经验等级将获得越高的佣金金额，同时提现周期也会缩短。'
                }, {
                    question: '经验值的增减规则是什么？',
                    answer: '初始分：100。 完成订单，收到好评师都会增加经验值。  订单失败，收到差评，中途退团等情况，将会减少经验值。  恶意操作或者遭到举报并查证，将会直接取消相应资格。'
                }],
                tixianAskList: [{
                    question: '如何进行提现操作？',
                    answer: '前往‘个人信息-我的钱包-提现’进行提现操作。'
                }, {
                    question: '没有提现功能怎么办？',
                    answer: '当成为大神后，提现功能开启'
                }, {
                    question: '提现金额限制',
                    answer: '单笔下限为30元'
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
    #godAsk .text div {
        font-size: 0.8rem;
        line-height: 16px;
    }
</style>
