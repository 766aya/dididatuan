<template>
	<div id="putForward">
        <div class="content">
            <div class="main">
                <div class="title">取款金额</div>
                <div class="price">
                    <div class="rmb">￥</div>
                    <div class="text" @click="()=>{this.show = true}"><input type="text" v-model="val" onfocus="this.blur();"></div>
                </div>
                <div class="tip" v-text="tips"></div>
                <div class="yue" v-text="`余额 ${money}贝壳 (1贝壳=1元)`"></div>
            </div>
            <div class="submit">
                <a href="javascript:;" @click="putForward" :disabled="disabled" :class="{'btn-true': disabled==true, 'btn-err': disabled==false}">提现</a>
            </div>
            <div class="ts">2018年7月5日0时前，所有用户提现免手续费</div>
        </div>
        <van-number-keyboard
            :show="show"
            extra-key="."
            close-button-text="完成"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
            @show="isShow"
            @hide="isHide"
        />
	</div>
</template>

<script>
    import { Dialog, Toast } from 'vant';

	export default {
        name: 'PutForward',
        data() {
            return {
                show: false,
                money: 0,
                tips: '',
                val: '',
                disabled: false
            }
        },
        created() {
            let self = this;
            this.QueryLanding(self, (err, res)=>{
                if (!err) {
                    self.$store.state.user.isLogin = true;
                    self.$store.state.user.userInfo.username = res.username;
                    self.$store.state.user.userInfo.phone = res.phone;
                    self.$store.state.user.userInfo.qq = res.qq;
                    self.$store.state.user.userInfo.type = res.type;
                    self.$store.state.user.userInfo.money = res.money;
                }
            })
        },
        mounted() {
            this.money = this.$store.state.user.userInfo.money/100
        },
        watch: {
            val (newVal) {
                let val = parseFloat(newVal).toFixed(2)
                if (val > this.money) {
                    this.tips = '超出余额'
                } else {
                    this.tips = ''
                }
            },
            show(newVal) {
                if (this.show == false && this.val > 0 && this.val != '') {
                    this.disabled = true
                } else {
                    this.disabled = false
                }
            }
        },
        methods: {
            onInput(val) {
                this.val += val
            },
            onDelete() {
                let len = this.val.length;
                if (len <= 1) {
                    this.val = ''
                } else {
                    let str1 = ''
                    for (let i=0; i<this.val.length-1; i++) {
                        str1 += this.val[i]
                    }
                    this.val = str1;
                }
            },
            isShow() {
                this.val = ''
            },
            isHide() {
                let val = parseFloat(this.val).toFixed(2)
                this.val = val
            },
            putForward() {
                let self = this;
                let num = parseFloat(this.val)
                console.log('this.disabled: ', this.disabled)
                console.log('num: ', num)
                console.log('num: ', typeof(num))
                console.log('this.money: ', this.money)

                if (this.disabled == true && num > 0 && num <= this.money) {
                    Dialog.confirm({
                        title: '提示',
                        message: `你本次提现金额为${num}元`
                    }).then(() => {
                        Toast.loading({ mask: false, message: '提现中...' });
                        new Promise((resolve, reject)=>{
                            self.Axios.post('/api/v1/payment/cash_out/',{
                                money: num * 100
                            }).then(res=>{
                                resolve(res)
                            }).catch(err=>{
                                reject(err)
                            })
                        }).then(res=>{
                            // ↓
                            console.log(res)
                        }).catch(err=>{
                            console.log(err)
                        })
                    }).catch(() => {
                        Toast.fail('你取消了本次提现')
                    });
                }
            }
        }
	}
</script>

<style scoped>
	.content {
        display: grid;
        grid-template-rows: auto 60px 40px auto;
    }
    .main {
        display: grid;
        grid-template-rows: 25px 55px auto;
        background: #FFFFFF;
        padding: 10px;
        margin-top: 15px;
    }
    .price {
        display: grid;
        height: 50px;
        grid-template-columns: 40px auto;
        align-items: center;
        border-bottom: 1px solid #AAAAAA;
    }
    .rmb {
        line-height: 50px;
        font-size: 30px;
        text-align: center;
    }
    .text input{
        height: 45px;
        width: 100%;
        border: none;
        font-size: 30px;
        line-height: 50px;
        background-color: FFFFFF;
        color: #000000;
    }
    .title {
        font-size: 0.75rem;
        line-height: 25px;
        color: #C5C5C5;
    }
    .yue {
        color: #C5C5C5;
        font-size: 0.5rem;
        line-height: 20px;
    }
    .tip {
        color: #FF0036;
        font-size: 10px;
    }
    .submit {
        padding: 0 35px;
        margin: 10px;
    }
    .submit a {
        display: block;
        height: 100%;
        text-align: center;
        color: #FFFFFF;
        line-height: 40px;
        border-radius: 5px;
    }
    .btn-true {
        background: #44BB00;
    }
    .btn-err {
        background: #C5C5C5;
    }
    .ts {
        text-align: center;
        color: #C5C5C5;
        font-size: 0.5rem;
    }
</style>
