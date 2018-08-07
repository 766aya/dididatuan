<template>
	<div id="order-content">
		<van-nav-bar
			:title="routeInfo.username"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
		<div class="main">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'order-content',
		data() {
			return {
				routeInfo: this.$route.query
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
</style>
