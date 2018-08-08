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
                routeInfo: this.$route.query,
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
                        img: 'http://img2.imgtn.bdimg.com/it/u=2561011807,290788206&fm=214&gp=0.jpg',
                        title: '系统消息',
                        msg: null,
                        userId: 27017
                    }, {
                        img: 'http://img1.imgtn.bdimg.com/it/u=3726621776,1777911746&fm=214&gp=0.jpg',
                        title: '涂涂小朋友',
                        msg: 'aaa',
                        userId: 27019
                    }, {
                        img: 'http://img.besoo.com/file/201706/04/2202292845908.jpg',
                        title: '[大神]芸',
                        msg: 'bbb',
                        userId: 28080
                    }, {
                        img: 'http://img3.imgtn.bdimg.com/it/u=2763300049,1542445224&fm=27&gp=0.jpg',
                        title: '[团长]Yuner',
                        msg: 'ccc',
                        userId: 28081
                    },
                ]
			};
        },
        components: {
            GGCard,
            XXCard
        },
        created() {
            let self = this;
            if (this.routeInfo.type) {
                this.active = parseInt(this.routeInfo.type);
            } else {
                this.active = 0;
            }
            this.Axios.get('/api/v1/notice').then(res=>{
                console.log(res)
                // self.NoticeList
            }).catch(err=>{
                console.log(err)
            })
        },
	};
</script>

<style scoped>
    #Message {
        /* height: calc(100vh); */
        padding-bottom: 50px;
    }
</style>
