<template>
	<div id="register">
		<van-nav-bar
            title="用户注册"
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
					v-model="inputInfo.phone"
					label="手机号"
					type="number"
					@click-icon="$toast('用于找回密码，支付确认等敏感操作')"
					icon="question"
					placeholder="请输入手机号"
					required
					class="m-t15"
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
				<van-field
					v-model="inputInfo.phone_code"
					center
					clearable
					label="短信验证码"
					placeholder="请输入短信验证码"
					required
				>
					<van-button slot="button" size="small" type="primary" @click="getSMS" :disabled="getsms" v-text="getsms? `${yzmTime}秒后可重新发送` :'发送验证码'"></van-button>
				</van-field>
				<div class="line"></div>
				<van-field
					v-model="inputInfo.password"
					type="password"
					label="密码"
					placeholder="请输入密码"
					required
				/>
				<van-field
					v-model="inputInfo.repassword"
					type="password"
					label="确认密码"
					placeholder="请输入确认密码"
					required
				/>
				<div class="line"></div>
				<van-field
					v-model="inputInfo.qq"
					label="QQ号"
					type="number"
					icon="question"
					placeholder="请输入QQ号"
					required
					@click-icon="$toast('用于玩家之间的联系方式')"
				/>
			</van-cell-group>
			<van-button class="btn" size="large" type="default" @click="register">提交注册</van-button>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	export default {
		name: 'register',
		data() {
			return {
				inputInfo: {
					captcha_code: '', // 图形验证码答案
					phone_code: '', // 手机验证码
					password: '', // 密码
					repassword: '', // 重复密码
					phone: '', // 手机号
					qq: '', // QQ号码
					type: 0,
				},
				getsms: false,
				yzmImgSrc: '',
				yzmTime: 0
			}
		},
		created() {
			this.getyzm()
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			getSMS() {
				let self = this;

				let testData = this.inputTest()
				if (testData.captcha_code && testData.phone) {
					new Promise((reslove, reject)=>{
						Toast.loading({
							mask: false,
							message: '加载中...'
						});
						self.Axios.post('/api/v1/user/send_phone_code', {
							captcha_code: self.inputInfo.captcha_code,
							phone: self.inputInfo.phone,
							sms_type: "3"
						}).then(res=>{
							Toast.clear();
							reslove(res)
						}).catch(err=>{
							reject(err)
						})
					}).then(res=>{
						if (res.data._status === 0) {
							Toast.success('手机验证码发送成功！');
							this.getSMSTimeControl()
						} else {
							self.getyzm();
							Toast.fail(`${res.data._reason},手机验证码发送失败！`);
						}
					}).catch(err=>{
						self.getyzm();
						Toast.fail(`请求手机验证码失败！`);
					})
				} else {
					self.getyzm()
					if (!testData.captcha_code) {
						Toast('图形验证码为空或不正确')
					} else if(!testData.phone) {
						Toast('手机号为空或手机号不正确')
					}
				}
			},
			register() {
				let self = this;
				let testData = this.inputTest()
				if (testData.phone_code && testData.password && testData.repassword && testData.qq) {
					Toast.loading({ mask: false, message: '注册中...' });
					new Promise((reslove, reject)=>{
						self.Axios.post('/api/v1/user/register', {
							phone_code: self.inputInfo.phone_code,
							password: self.inputInfo.password,
							qq: self.inputInfo.qq,
							type: 0
						}).then(res=>{
							reslove(res)
						}).catch(err=>{
							reject(err)
						})
					}).then(res=>{
						if (res.data._status == 0 && res.status == 200) {
							Toast.success('注册成功！')
							self.$router.push({name: 'User'})
						} else {
							Toast.fail('注册失败！'+ res.data._reason)
							self.inputInfo.password = ''
							self.inputInfo.repassword = ''
						}
					}).catch(err=>{
						Toast.fail('注册失败！'+ err)
					})
				} else {
					if(!testData.phone_code) {
						Toast('手机验证码不能为空');
					}else if(!testData.password) {
						Toast('密码需介于5~12位之间');
					}else if(!testData.repassword) {
						Toast('密码与确认密码不一致');
					}else if(!testData.qq) {
						Toast('QQ号不能为空')
					}
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
			getSMSTimeControl() {
				let self = this;
				this.yzmTime = 60;
				let jsq = setInterval(()=>{
					self.getsms = true;
					self.yzmTime--;
					if (self.yzmTime <= '0') {
						window.clearInterval(jsq)
						self.getsms = false;
					}
				},1000)
			},
			inputTest() {
				let info = this.inputInfo;

				let phone_ren = /^[1][3,4,5,7,8][0-9]{9}$/;
				let password_ren = /^[\w]{6,12}$/;

				let data = {
					captcha_code: false,
					phone: false,
					phone_code: false,
					password: false,
					repassword: false,
					qq: false
				}

				if (info.captcha_code == '' || info.captcha_code.length < 4) {
					// 图形验证码为空或不正确
					data.captcha_code = false;
				} else {
					data.captcha_code = true;
				}

				if(info.phone == '' || !phone_ren.test(info.phone)) {
					// 手机号为空或手机号不正确
					data.phone = false;
				} else {
					data.phone = true;
				}

				if(info.phone_code == '') {
					// 手机验证码不能为空
					data.phone_code = false;
				} else {
					data.phone_code = true;
				}
				if(info.password == '', !password_ren.test(info.password)){
					// 密码需介于5~12位之间
					data.password = false;
				} else {
					data.password = true;
				}

				if(info.password != info.repassword) {
					// 密码和确认密码不一致
					data.repassword = false;
				}else {
					data.repassword = true;
				}

				if(info.qq == '') {
					// QQ号不能为空
					data.qq = false;
				} else {
					data.qq = true;
				}
				return data
			}
		}
	}
</script>

<style scoped>
	#register {
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
	.line {
		width: 100vw;
		height: 15px;
		background-color: #F5F5F5;
	}
	.btn {
		display: block;
		margin: 20px auto;
		margin-top: 15px;
		width: 80%;
		text-align: center;
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
