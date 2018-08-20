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
			<div class="control">
				<van-radio-group v-model="radio">
					<van-radio name="1">记住登陆状态</van-radio>
				</van-radio-group>
				<div class="RetrieveThePassword iconfont icon-zhaohuimima" @click="isRetrieveThePasswordShow = !isRetrieveThePasswordShow">找回密码</div>
			</div>
			<van-button class="btn" size="large" type="default" @click="login">登陆</van-button>
			<button class="btn-default weixin iconfont icon-weixin" size="large" type="default" @click="loginWx">微信快速登录</button>
			<button class="btn-default qq iconfont icon-qq" size="large" type="default" @click="loginQq">QQ快速登录</button>
			<van-dialog
				v-model="isRetrieveThePasswordShow"
				show-cancel-button
				:showConfirmButton="false"
				:closeOnClickOverlay="true"
				class="dialog"
			>
				<retrieve-the-password @retrievePassworld="retrievePassworld"></retrieve-the-password>
			</van-dialog>
		</div>
	</div>
</template>

<script>
	import { Toast, Dialog } from 'vant';
	import retrieveThePassword from '@/components/retrieveThePassword'
	export default {
		name: 'login',
		data() {
			return {
				inputInfo: {
					username: '18000000000',
					password: 'admin1',
					captcha_code: '',
					phone_code: ''
				},
				yzmImgSrc: '',
				radio: '1',
				isRetrieveThePasswordShow: false,
				getsms: false,
			}
		},
		components: {
			retrieveThePassword: retrieveThePassword
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
				if (this.inputInfo.username && this.inputInfo.password && this.inputInfo.captcha_code != '') {
					new Promise((reslove, reject)=>{
						self.Axios.post('/api/v1/user/login', {
							username: self.inputInfo.username,
							password: self.inputInfo.password,
							captcha_code: self.inputInfo.captcha_code
						}).then(res=>{
							if (res.status == 200 && res.data._status == 0) {
								reslove(res)
							}else{
								reject(res.data._reason)
							}
						}).catch(err=>{
							reject(err)
						})
					}).then(res=>{
						Toast.success('登陆成功!');
						self.$router.push({name: 'User'})
					}).catch(err=>{
						Toast.fail('登陆失败!'+err);
					})
				} else {
					Toast('用户名、密码或验证码不能为空!');
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
			},
			retrievePassworld(val) {
				if (val) {
					this.isRetrieveThePasswordShow = false
				}
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
		z-index: 1;
	}
	.control {
		display: grid;
		padding: 15px 15px 0px 15px;
		grid-template-columns: 50% 50%;
		height: 15px;
		line-height: 15px;
		font-size: 0.9rem;
		text-align: center;
	}
	.RetrieveThePassword {
		color: #000000;
		font-size: 0.9rem;
	}
	.dialog {
		padding-top: 10px;
	}
</style>
