<template>
	<div>
		<div id="userinfo" v-if="isLogin">
			<div class="img">
				<img :src="userinfo.userImg">
			</div>
			<div class="userId" v-text="`(uid: ${userinfo.userId})`"></div>
		</div>
		<div id="userinfo" v-else>
			<div class="img">
				<img src="/static/logo.png">
			</div>
			<div class="content">
				<van-button type="default" @click="()=>this.$router.push({ name: 'Register', query: {default: 1}})">用户注册</van-button>
				<div style="display: inline;padding: 0px 10px;">|</div>
				<van-button type="default" @click="()=>this.$router.push({ name: 'Login', query: {default: 1}})">用户登陆</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'userinfo',
		data() {
			return {
				isLogin: false,
				userinfo: {
					userId: '',
					userImg: ''
				},
				defaultInfo: {
					imgsrc: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg'
				}
			}
		},
		created() {
			if (this.userinfo.userId == '') {

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
	.content {
		line-height: 50px;
		text-align: center;
	}
</style>
