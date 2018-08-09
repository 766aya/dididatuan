<template>
	<div>
		<div id="userinfo" v-if="isLogin">
			<div class="img">
				<img :src="defaultInfo.imgsrc">
			</div>
			<div class="userId">
				<div class="phone" v-text="userinfo.phone"></div>
				<div class="qq" v-text="userinfo.qq"></div>
			</div>
			<div class="logout"></div>
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
				isLogin: this.$store.state.user.isLogin,
				userinfo: this.$store.state.user.userInfo,
				defaultInfo: {
					imgsrc: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg'
				}
			}
		},
		created() {
			let self = this;
			let t = this;
			this.QueryLanding(self, (err, res)=>{
                if (!err) {
                	self.isLogin = true;
                    self.$store.state.user.isLogin = true;
                    self.$store.state.user.userInfo.username = res.username;
                    self.$store.state.user.userInfo.phone = res.phone;
                    self.$store.state.user.userInfo.qq = res.qq;
                    self.$store.state.user.userInfo.type = res.type;
                }
            })
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
		grid-template-columns: 70px 120px auto;
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
		display: grid;
		grid-template-rows: 25px 25px;
		line-height: 25px;
		text-align: left;
	}
	.phone {
		color: #333333;
		font-weight: 700;
	}
	.qq {
		color: #A5A5A5;
	}
	.content {
		line-height: 50px;
		text-align: center;
	}
</style>
