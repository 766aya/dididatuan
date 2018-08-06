<template>
	<div id="Message" class="">
		<van-tabs v-model="active">
            <van-tab title="公告">
                <GGCard v-for="(item, index) in NoticeList" :key="'card'+index" :data="item"></GGCard>
            </van-tab>
            <van-tab title="消息">
                <XXCard v-for="(item, index) in MsgList" :key="'card'+index" :data="item"></XXCard>
            </van-tab>
        </van-tabs>
	</div>
</template>

<script>
    import GGCard from "@/components/gonggaocard";
    import XXCard from "@/components/xiaoxicard";

	export default {
		name: "Message",
		data() {
			return {
                active: 0,
				NoticeList: [
                    {
                        title: '8月2日更新公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['1.[超时空]副本震撼开启','2.[卢克-团队]副本价格下调','3.其他体验优化及价格修复']
                    }, {
                        title: 'IOS支付恢复公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['IOS支付已恢复正常，各位老板可以下单啦。']
                    }, {
                        title: '7月31日更新公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['由于微信的IOS支付接口出现异常，目前使用苹果手机支付时会失败，请各位使用苹果手机老板暂时不要下单。','还望各位见谅、耐心等待后续公告。恢复正常后我们会第一时间通知各位。']
                    }, {
                        title: '7月30日更新公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['1.[超时空]副本震撼开启','2.[卢克-团队]副本价格下调','3.其他体验优化及价格修复']
                    }, {
                        title: '7月30日更新公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['1.[超时空]副本震撼开启','2.[卢克-团队]副本价格下调','3.其他体验优化及价格修复']
                    }, {
                        title: '7月30日更新公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['1.[超时空]副本震撼开启','2.[卢克-团队]副本价格下调','3.其他体验优化及价格修复']
                    }, {
                        title: '7月30日更新公告',
                        timer: '2018-08-02 05:30:36',
                        msgs: ['1.[超时空]副本震撼开启','2.[卢克-团队]副本价格下调','3.其他体验优化及价格修复']
                    }
                ],
                MsgList: [
                    {
                        img: 'http://img3.duitang.com/uploads/item/201511/14/20151114125146_LXHzE.jpeg',
                        title: '系统消息',
                        msg: null
                    }, {
                        img: 'http://img4.duitang.com/uploads/item/201406/30/20140630212814_NeGmF.jpeg',
                        title: '涂涂小朋友',
                        msg: 'aaa'
                    }, {
                        img: 'http://img4.duitang.com/uploads/item/201406/30/20140630212055_uGUzA.jpeg',
                        title: '[大神]芸',
                        msg: 'bbb'
                    }, {
                        img: 'http://img3.imgtn.bdimg.com/it/u=2763300049,1542445224&fm=27&gp=0.jpg',
                        title: '[团长]Yuner',
                        msg: 'ccc'
                    },
                ]
			};
        },
        components: {
            GGCard,
            XXCard
        }
	};
</script>

<style scoped>
    #Message {
        /* height: calc(100vh); */
        padding-bottom: 50px;
    }
</style>
