<template>
	<div>
		<div id="userinfol" v-if="isLogin">
			<div class="img">
				<img :src="defaultInfo.imgsrc">
			</div>
			<div class="userId">
				<div class="phone" v-text="userinfo.phone"></div>
				<div class="qq" v-text="userinfo.qq"></div>
			</div>
			<div class="logout">
				<van-button type="default" @click="logOut">退出登陆</van-button>
			</div>
		</div>
		<div id="userinfon" v-else>
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
	import { Dialog, Toast } from 'vant';

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
					self.$store.state.user.userInfo.money = res.money;
					self.$store.state.user.userInfo.resource_uri = res.resource_uri;
					if (self.isLogin = true) {
						self.getServers(self, (err, servers)=>{
							self.$store.state.serverAndJobs.servers = servers
						})
					}
                }
			})
		},
		methods: {
			logOut() {
				let self = this;
				Dialog.confirm({
					title: '提示',
					message: `用户: ${self.$store.state.user.userInfo.phone},你确定要退出吗？`
				}).then(() => {
					Toast.loading({ mask: false, message: '退出中...' });
					self.Axios.post('/api/v1/user/logout').then(res=>{
						console.log(res)
						if (res.data._status == 0 && res.status == 200) {
							Toast.success('退出成功！')
							self.isLogin = false;
							self.$store.state.user.isLogin = false;
							self.$router.push({name: 'User'})
						} else {
							Toast.fail('退出失败！'+res.data._reason)
						}
					}).catch(err=>{
						Toast.fail('退出失败！')
					})
				}).catch(() => {
					Toast.fail('退出失败！')
				});
			}
		}
	}
</script>

<style scoped>
	#userinfol {
		display: grid;
		background: #FFFFFF;
		padding: 10px 0;
		width: 100vw;
		height: 50px;
		grid-template-columns: 70px 150px auto;
		margin-bottom: 10px;
		align-items:center;
	}
	#userinfon {
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
		display: grid;
		grid-template-rows: 25px 25px;
		line-height: 25px;
		text-align: left;
	}
	.logout {
		text-align: center;
	}
	.phone {
		color: #333333;
		font-weight: 700;
	}
	.qq {
		color: #A5A5A5;
		font-size: 0.8rem;
	}
	.content {
		line-height: 50px;
		text-align: center;
	}
</style>
