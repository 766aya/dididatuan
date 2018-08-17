<template>
    <div id="RealName">
        <div class="title">姓名</div>
        <van-cell-group>
            <van-field required left-icon="contact" v-model="data.name" placeholder="请输入真实姓名" />
        </van-cell-group>
        <div class="title">身份证号</div>
        <van-cell-group>
            <van-field required left-icon="idcard" v-model="data.idcard" placeholder="请输入身份证号" />
        </van-cell-group>
        <div class="title">支付宝账号</div>
        <van-cell-group>
            <van-field required left-icon="alipay" v-model="data.aliAccount" placeholder="请输入支付宝账号" />
        </van-cell-group>
        <div class="title">身份证正面照片</div>
        <van-uploader :max-size="307200" @oversize="IsMaxed" :after-read="id_card_front" multiple class="img-box">
            <van-icon v-if="!id_card_front_info.name" name="photograph" />
            <img v-else :src="id_card_front_info.file" alt="">
        </van-uploader>
        <div class="title">身份证背面照片</div>
        <van-uploader :max-size="307200" @oversize="IsMaxed" :after-read="id_card_back" multiple class="img-box">
            <van-icon v-if="!id_card_back_info.name" name="photograph" />
            <img v-else :src="id_card_back_info.file" alt="">
        </van-uploader>
        <van-button class="btn" size="large" type="primary" @click="submit">提交认证信息</van-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Field, Toast, Button, Uploader } from 'vant';
    Vue.use(Field);

    export default {
        name: 'RealName',
        data() {
            return {
                data: {
                    name: '',
                    idcard: '',
                    aliAccount: ''
                },
                id_card_front_info: {
                    name: null,
                    file: null,
                    content_type: null,
                },
                id_card_back_info: {
                    name: null,
                    file: null,
                    content_type: null,
                }
            }
        },
        methods: {
            IsMaxed() {
                Toast('文件需小于300kb')
            },
            submit() {
                let self = this;
                if (self.data.name == '' || self.data.idcard == '' || self.data.aliAccount == '') {
                    Toast.fail('表单信息不能为空')
                    return
                } else if(self.id_card_front_info.name == '') {
                    Toast.fail('请上传身份证正面图片')
                    return
                } else if(self.id_card_back_info.name == '') {
                    Toast.fail('请上传身份证背面图片')
                    return
                }
                var alipayAuth = new Promise((reslove, reject)=>{
                    self.Axios.post('/api/v1/payment_info/', {
                        alipay_account: self.data.aliAccount,
                        alipay_true_name: self.data.name
                    }).then(res=>{
                        if(res.data)
                        reslove(res)
                    }).catch(err=>{
                        reject(err)
                    })
                })
                var idcardAuth = new Promise((reslove, reject)=>{
                    self.Axios.post('/api/v1/verify/', {
                        user: self.$store.state.user.userInfo.resource_uri,
                        name: self.data.name,
                        id_card: self.data.idcard,
                        id_card_front: {
                            name: self.id_card_front_info.name,
                            file: self.id_card_front_info.file,
                            content_type: self.id_card_front_info.content_type
                        },
                        id_card_back: {
                            name: self.id_card_back_info.name,
                            file: self.id_card_back_info.file,
                            content_type: self.id_card_back_info.content_type
                        }
                    }).then(res=>{
                        reslove(res)
                    }).catch(err=>{
                        reject(err)
                    })
                })
                Promise.all([alipayAuth, idcardAuth]).then(res=>{
                    if (res[0].data._status == 0 && res[1].data._status == 0) {
                        Toast('认证信息已提交，等待审核')
                        self.$router.push({name: 'user', query: {bar: 2}})
                    }
                })
            },
            id_card_front(data) {
                Vue.set(this.id_card_front_info, 'name', data.file.name)
                Vue.set(this.id_card_front_info, 'file', data.content)
                Vue.set(this.id_card_front_info, 'content_type', data.file.type)
            },
            id_card_back(data) {
                Vue.set(this.id_card_back_info, 'name', data.file.name)
                Vue.set(this.id_card_back_info, 'file', data.content)
                Vue.set(this.id_card_back_info, 'content_type', data.file.type)
            }
        }
    }
</script>

<style scoped>
    #RealName {
        padding-bottom: 70px;
    }
    .title {
        padding: 20px 0 5px 15px;
        font-size: 0.85rem;
        font-weight: 700;
    }
    .img-box {
        display: block;
        text-align: center;
        width: 270px;
        height: 152px;
        border-radius: 15px;
        overflow: hidden;
        margin: 10px auto 0px auto;
        border: 1px dotted #333333;
    }
    .img-box i, .img-box img {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .img-box i::before {
        line-height: 152px;
        font-size: 30px;
    }
    .btn {
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>
