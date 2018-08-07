<template>
	<div id="message-content">
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
		name: 'message-content',
		data() {
			return {
				routeInfo: this.$route.query
			}
		},
		created() {
			
		},
		methods: {
			onClickLeft() {
				this.$router.push({name: 'Message', query: {bar: '0', type: '1'} })
			}
		}
	}
</script>

<style scoped>
	#message-content {
		color: #E0E0E0;
		text-align: center;
		font-size: 12px;
	}
	.main {
		display: grid;
		width: 100vw;
		height: 100%;
		padding: 20px;
	}
</style>
