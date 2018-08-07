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
            			url: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201806/jiaoben5973/images/1.png'
            		}, {
            			title: '轮播2',
            			url: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201806/jiaoben5973/images/2.png'
            		}, {
            			title: '轮播3',
            			url: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201806/jiaoben5973/images/3.png'
            		}, 
            	]
            }
        },
        components: {
        	Settlement
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
    .xcy {
        text-align: center;
        padding: 20px 0; 
        font-size: 0.75rem;
        color: #AAAAAA;
    }
</style>
