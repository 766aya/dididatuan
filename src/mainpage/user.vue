<template>
	<div id="user">
		<user-info></user-info>
		<my-role></my-role>
        <menu-list v-for="item in menuData" :list="item"></menu-list>
	</div>
</template>

<script>
	import userInfo from '@/components/userinfo'
	import myRole from '@/components/myRole'
    import menuList from '@/components/menuList'

	export default {
        name: 'User',
        data() {
            return {
                menuData: [{
                    icon: 'icon-order',
                    name: '我的订单',
                    url: ''
                }, {
                    icon: 'icon-qianbao',
                    name: '我的钱包',
                    url: ''
                }, {
                    icon: 'icon-weibiaoti2fuzhi02',
                    name: '我的优惠券',
                    url: ''
                }, {
                    icon: 'icon-msnui-v',
                    name: '大神认证',
                    url: ''
                }, {
                    icon: 'icon-fenxiang',
                    name: '好友推荐',
                    ur: ''
                }, {
                    icon: 'icon-kefu',
                    name: '客服与帮助'
                }]
            }
        },
        components: {
        	userInfo,
        	myRole,
            menuList
        }
	}
</script>

<style>

</style>
