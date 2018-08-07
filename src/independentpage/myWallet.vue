<template>
	<div id="myWallet">
		<div class="coin-item"></div>
		<div class="coin-item"></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
	export default {
		name: 'myWallet',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	#myWallet {
		display: grid;
		grid-template-rows: 150px 30px 150px 50px 50px;
	}
	.coin-item {
		width: 100vw;
		background-color: #FEC300
	}
</style>
