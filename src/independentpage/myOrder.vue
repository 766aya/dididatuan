<template>
	<div id="order-content">
		<van-nav-bar
			:title="routeInfo.username"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
		<div class="main">
			<div v-if="list.length"></div>
			<div v-else class="order-null">没有订单</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'order-content',
		data() {
			return {
				routeInfo: this.$route.query,
				list: []
			}
		},
		created() {
			
		},
		methods: {
			onClickLeft() {
				this.$router.push({name: 'User', query: {bar: '2', type: '1'} })
			}
		}
	}
</script>

<style scoped>
.order-null {
	font-size: 20px;
	margin-top: 10px;
	text-align: center;
}
</style>
