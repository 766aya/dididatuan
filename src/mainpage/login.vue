<template>
	<div id="login">
		<van-nav-bar
            title="用户登陆"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
		<div class="content">
			<div class="logo">
				<img src="/static/logo.png" alt="">
			</div>
			<van-cell-group>
				<van-field
					v-model="inputInfo.username"
					label="用户名"
					type="text"
					placeholder="请输入手机号"
					required
					class="m-t15"
				/>
				<van-field
					v-model="inputInfo.password"
					type="password"
					label="密码"
					placeholder="请输入密码"
					required
				/>
				<div style="position: relative;">
					<van-field
						v-model="inputInfo.captcha_code"
						center
						clearable
						label="验证码"
						placeholder="请输入验证码"
						required
					/>
					<div class="yzm" @click="getyzm">
						<img :src="yzmImgSrc">
					</div>
				</div>
			</van-cell-group>
			<van-button class="btn" size="large" type="default" @click="login">登陆</van-button>
			<button class="btn-default weixin iconfont icon-weixin" size="large" type="default" @click="loginWx">微信快速登录</button>
			<button class="btn-default qq iconfont icon-qq" size="large" type="default" @click="loginQq">QQ快速登录</button>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	export default {
		name: 'login',
		data() {
			return {
				inputInfo: {
					username: '18000000000',
					password: 'admin1',
					captcha_code: ''
				},
				yzmImgSrc: ''
			}
		},
		created() {
			this.getyzm()
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			login() {
				let self = this;
				if (this.inputInfo.username && this.inputInfo.password) {
					new Promise((reslove, reject)=>{
						self.Axios.post('/api/v1/user/login', {
							username: self.inputInfo.username,
							password: self.inputInfo.password,
							captcha_code: self.inputInfo.captcha_code
						}).then(res=>{
							if (res.status == 200) {
								reslove(res)
							}else{
								reject(res.data._reason)
							}
						}).catch(err=>{
							reject(err)
						})
					}).then(res=>{
						self.$router.push({name: 'User'})
						Toast.success('登陆成功!');
					}).catch(err=>{
						Toast.fail('登陆失败!'+err);
					})
				} else {
					Toast('用户名或密码不能为空!');
				}
			},
			getyzm() {
				let self = this;
				this.Axios.post('/api/v1/user/get_captcha').then(res=>{
					self.yzmImgSrc = res.data.base64_str
				}).catch(err=>{
					Toast('图形验证码获取失败！')
				})
			},
			loginWx() {
				let self = this;
				Toast.success('微信登陆接口!');
			},
			loginQq() {
				let self = this;
				Toast.success('QQ登陆接口!');
			}
		}
	}
</script>

<style scoped>
	#login {
		padding-bottom: 50px;
		overflow-y: auto;
	}
	.logo {
		width: 50px;
		height: auto;
		margin: 15px auto;
	}
	.logo img {
		width: 100%;
	}

	.btn {
		display: block;
		margin: 20px auto;
		margin-top: 15px;
		width: 80%;
		text-align: center;
	}
	.btn-default {
		display: block;
		width: 80%;
		padding: 15px 0;
		background-color: #FFFFFF;
		border: 1px solid #E5E5E5;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	.btn-default::before {
		padding-right: 10px;
	}
	.weixin {
		background-color: #51C332;
		color: #FFFFFF;
	}
	.qq {
		background-color: #0188FB;
		color: #FFFFFF;
	}
	.yzm {
		position: absolute;
		top: 6px;
		right: 6px;
		width: 120px;
		height: 30px;
		z-index: 9999;
	}
</style>
