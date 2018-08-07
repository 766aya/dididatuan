<template>
	<div id="userinfo">
		<div class="img">
			<img src="http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg">
		</div>
		<div class="userId" v-text="`(uid: ${userId})`"></div>
	</div>
</template>

<script>
	export default {
		name: 'userinfo',
		data() {
			return {
				userId: 27017
			}
		}
	}
</script>

<style scoped>
	#userinfo {
		display: grid;
		background: #FFFFFF;
		padding: 10px 0;
		width: 100vw;
		height: 50px;
		grid-template-columns: 70px auto;
		margin-bottom: 10px;
	}
	.img {
		height: 50px;
		width: 50px;
		padding: 0 10px;
	}
	.img img {
		height: 100%;
		width: 100%;
		border-radius: 5px;
	}
	.userId {
		line-height: 50px;
		text-align: center;
		color: #9E9E9E;
	}
</style>
