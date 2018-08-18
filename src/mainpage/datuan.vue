<template>
	<div id="datuan">
		<van-swipe :autoplay="3000" class="swipe-box">
			<van-swipe-item class="swipe" v-for="(image, index) in imgs" :key="'swipe'+index">
				<img :src="image.url" />
			</van-swipe-item>
		</van-swipe>
		<Settlement></Settlement>
        <div class="xcy">带你装逼带你飞，大神带你上天咯！</div>
	</div>
</template>

<script>
	import Settlement from '@/components/Settlement'
	export default {
        name: 'DaTuan',
        data() {
            return {
            	imgs: [
            		{
            			title: '轮播1',
            			url: '/static/banner01.jpg'
            		}, {
            			title: '轮播2',
            			url: '/static/banner02.jpg'
            		}, {
            			title: '轮播3',
            			url: '/static/banner03.jpg'
            		}, 
            	]
            }
        },
        components: {
        	Settlement
        },
        created() {
            let self = this;
            this.QueryLanding(self, (err, res)=>{
                if (!err) {
                	self.isLogin = true;
                    self.$store.state.user.isLogin = true;
                    self.$store.state.user.userInfo.username = res.username;
                    self.$store.state.user.userInfo.phone = res.phone;
                    self.$store.state.user.userInfo.qq = res.qq;
                    self.$store.state.user.userInfo.type = res.type;
                    self.$store.state.user.userInfo.money = res.money;
                    self.$store.state.user.userInfo.resource_uri = res.resource_uri;
                }
            })
        }
	}
</script>

<style>
    #datuan {
        overflow-y: auto;
        padding-bottom: 50px;
    }
	.swipe-box {
		width: 100%;
        height: 150px;
        overflow: hidden;
	}
	.swipe {
		width: 100%;
		overflow: hidden;
	}
    .swipe img {
        width: 100%;
    }
    .xcy {
        text-align: center;
        padding: 20px 0; 
        font-size: 0.75rem;
        color: #AAAAAA;
    }
</style>
