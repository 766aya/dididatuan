<template>
    <div>
        <van-field
            required
            v-model="inputInfo.username"
            label="手机号"
            placeholder="手机号"
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
            placeholder="短信验证码"
            required
        >
            <van-button slot="button" size="small" type="primary" @click="getSMS" :disabled="getsms" v-text="getsms? `${yzmTime}秒后可重新发送` :'发送验证码'"></van-button>
        </van-field>
        <van-cell-group>
            <van-field
                v-model="inputInfo.password"
                required
                type="password"
                label="密码"
                placeholder="请输入密码"
            />

            <van-field
                v-model="inputInfo.repassword"
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
                required
            />
        </van-cell-group>
        <van-button slot="button" size="large" type="primary" :disabled="!isSubmit" @click="submit" v-text="'找回密码'"></van-button>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                inputInfo: {
                    username: '',
                    phone_code: '',
                    captcha_code: '',
                    password: '',
                    repassword: ''
                },
                yzmImgSrc: '',
                getsms: false,
                yzmTime: 0,
                isSubmit: false
            }
        },
        created() {
            this.getyzm()
        },
        watch: {
            
        },
        methods: {
            getSMS() {
                let self = this;
                new Promise((reslove, reject)=>{
                    self.Axios.post('/api/v1/user/send_phone_code', {
                        captcha_code: self.inputInfo.captcha_code,
                        phone: self.inputInfo.username
                    }).then(res=>{
                        if (res.status == 200 && res.data._status == 0) {
                            reslove()
                        } else {
                            reject(res.data._reason)
                        }
                    })
                }).then(res=>{
                    self.getSMSTimeControl()
                    Toast('手机验证码已发送！')
                    self.isSubmit = true
                }).catch(err=>{
                    self.getyzm()
                    Toast('验证码发送失败！'+err)
                })
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
            submit() {
                let self = this;
                if (self.inputInfo.password != self.inputInfo.repassword && self.inputInfo.password.length < 6) {
                    Toast('两次输入的密码不一致，请重试!')
                    self.inputInfo.password = ''
                    self.inputInfo.repassword = ''
                    return
                } else {
                    self.Axios.post('/api/v1/user/set_password', {
                        phone_code: self.inputInfo.phone_code,
                        password: self.inputInfo.password
                    }).then(res=>{
                        if (res.data.is_verify) {
                            self.$emit('retrievePassworld', true)
                            Toast('密码修改成功！')
                        } else {
                            self.$emit('retrievePassworld', false)
                            Toast('密码修改失败！'+res.data._reason)
                        }
                    }).catch(err=>{
                        Toast('密码修改失败！'+err)
                    })
                }
            }
        }
    }
</script>

<style>
    .yzm {
        position: absolute;
        top: 10px;
        right: 0px;
        width: 120px;
        height: 30px;
        z-index: 1;
    }
</style>

