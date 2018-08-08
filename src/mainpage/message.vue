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
				NoticeList: [],
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
            new Promise((resolve, reject)=>{
                self.Axios.get('/api/v1/notice').then(res=>{
                    if (res.status==200) {
                        resolve(res)
                    } else {
                        reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            }).then(res=>{
                let messageList = res.data.objects;
                var timed = (time)=>{
                    let dates = new Date(time*1000)
                    let year = dates.getFullYear()
                    let mon  = dates.getMonth()
                    let day  = dates.getDay()
                    let h    = dates.getHours()
                    let m    = dates.getMinutes()
                    let s    = dates.getSeconds()
                    return `${year}-${mon}-${day} ${h}:${m}:${s}`
                }
                var texted = (text)=>{
                    let textList = []
                    let t = text.split('\n')
                    return t
                }
                messageList.forEach((item, index)=>{
                    let timer = timed(item.created)
                    let msgs = texted(item.content)
                    let data = {
                        title: item.title,
                        timer: timer,
                        msgs: msgs
                    }
                    self.NoticeList.push(data)
                });
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
