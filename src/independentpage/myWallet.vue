<template>
	<div id="myWallet">
		<van-nav-bar
            :title="routeInfo.title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
		<div class="coin-item">
			<div></div>
			<div></div>
		</div>
		<div></div>
		<div class="coin-item">
			<div></div>
			<div></div>
		</div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
	export default {
		name: 'myWallet',
		data() {
			return {
				routeInfo: this.$route.query,
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push({name: 'User', query: {bar: '2'} })
			}
		}
	}
</script>

<style scoped>
	#myWallet {
		display: grid;
		grid-template-rows:auto 150px 30px 150px 50px 50px;
	}
	.coin-item {
		display: grid;
		grid-template-rows: 50px auto;
		width: 100vw;
		padding: 20px;
		background-color: #FEC300
	}
</style>
