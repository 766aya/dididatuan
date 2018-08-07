<template>
	<div id="datuan">
		<van-swipe :autoplay="3000" class="swipe-box">
			<van-swipe-item class="swipe" v-for="(image, index) in imgs" :key="'swipe'+index">
				<img :src="image.url" />
			</van-swipe-item>
		</van-swipe>
		<Settlement></Settlement>
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
        /*padding-bottom: 100px;*/
    }
	.swipe-box {
		/*height: 300px;*/
	}
	.swipe {
		width: 100%;
		overflow: hidden;
	}
</style>
