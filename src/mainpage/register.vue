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
					v-model="inputInfo.username"
					required
					clearable
					label="用户名"
					icon="question"
					placeholder="请输入用户名"
					@click-icon="$toast('请输入大于5位的字母数字组，必须以字母开头')"
				/>
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
					@click-icon="$toast('用于玩家之间的联系方式')"
					required
				/>
				<div class="line"></div>
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
						v-model="inputInfo.yzm"
						center
						clearable
						label="验证码"
						placeholder="请输入验证码"
					/>
					<div class="yzm" @click="getyzm">
						<img :src="yzmImgSrc">
					</div>
				</div>
				<van-field
					v-model="inputInfo.sms"
					center
					clearable
					label="短信验证码"
					placeholder="请输入短信验证码"
				>
					<van-button slot="button" size="small" type="primary" @click="getSMS">发送验证码</van-button>
				</van-field>
			</van-cell-group>
			<van-button class="btn" size="large" type="default" @click="register">提交注册</van-button>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'register',
		data() {
			return {
				inputInfo: {
					phone_code: '',
					username: '',
					password: '',
					repassword: '',
					phone: '',
					qq: '',
					sms: '',
					yzm: '',
					type: 0,
				},
				getsms: false,
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
			getSMS() {
				if (this.inputInfo.yzm != '') {

				} else {
					// $toast(
				}
			},
			register() {
				console.log(this.inputInfo)
			},
			getyzm() {
				let self = this;
				this.Axios.post('/api/v1/user/get_captcha').then(res=>{
					self.yzmImgSrc = res.data.base64_str
				})
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
		margin: 30px auto;
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
