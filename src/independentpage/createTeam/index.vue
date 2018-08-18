<template>
    <div id="createTeam">
        <div class="title">订单信息</div>
        <div class="item">
            <div class="lside">角色</div>
            <div class="rside" v-text="info.role"></div>
        </div>
        <div class="item">
            <div class="lside">副本</div>
            <div class="rside" v-text="info.fuben"></div>
        </div>
        <div class="item">
            <div class="lside">原价</div>
            <div class="rside" v-text="`￥${info.Oprice}元`"></div>
        </div>
        <div class="item">
            <div class="lside">优惠券</div>
            <div class="rside" @click="isCouponShow = true">{{info.Coupon}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">优惠金额</div>
            <div class="rside" v-text="`￥${info.amount}元`"></div>
        </div>
        <div class="title">支付方式</div>
        <div class="pay" @click="payWay=1">
            <div class="lside">团币支付</div>
            <div class="rside"><van-icon name="success" class="rside-icon" v-show="payWay==1" /></div>
        </div>
        <div class="pay" @click="payWay=2">
            <div class="lside">微信支付</div>
            <div class="rside"><van-icon name="success" class="rside-icon" v-show="payWay==2" /></div>
        </div>
        <div class="pay" @click="payWay=3">
            <div class="lside">支付宝支付</div>
            <div class="rside"><van-icon name="success" class="rside-icon" v-show="payWay==3" /></div>
        </div>
        <van-submit-bar
          :disabled="isSubmit"
          :price="price"
          button-text="去付款"
          @submit="onSubmit"
        />

        <!-- 优惠券列表 -->
        <van-popup v-model="isCouponShow" position="bottom">
          <van-coupon-list
            :show-exchange-bar="false"
            :coupons="coupon.list"
            :chosen-coupon="chosenCoupon"
            @change="onChange"
          />
        </van-popup>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: 'create-team',
        data() {
            return {
                info: {
                    role: '123',
                    fuben: '副本',
                    Oprice: '原价',
                    Coupon: '请选择优惠券',
                    amount: 0
                },
                payWay: 1,
                coupon: this.$store.state.coupon,
                chosenCoupon: -1,
                isCouponShow: false,
                isSubmit: false,
                match_order: '',
            }
        },
        computed: {
            price() {
                return this.$route.query.fubenPrice - this.info.amount*100
            }
        },
        created() {
            this.info.role = this.$route.query.roleName;
            this.info.fuben = this.$route.query.fubenName;
            this.info.Oprice = this.$route.query.fubenPrice/100;
        },
        watch: {
            chosenCoupon(newVal, oldVal) {
                console.log(newVal, oldVal)
            }
        },
        methods: {
            onChange (index) {
                this.chosenCoupon = index;
                this.isCouponShow = false
                this.info.amount = this.coupon.list[index].value/100
                console.log("coupon: ", this.info)
                if (index === -1) {
                    this.info.Coupon = '不使用优惠券'
                    return
                }
                this.info.Coupon = this.coupon.list[index].name
            },
            onSubmit () {
                let self = this;
                switch(this.payWay) {
                    case 1:
                        //团币支付
                        Toast.fail('功能尚在建设中！')
                        break;
                    case 2:
                        //微信支付
                        Toast.fail('功能尚在建设中！')
                        break;
                    case 3:
                        // 支付宝支付
                        this.CreateAnOrder((err, res)=>{
                            if (!err) {
                                this.aliPay(res)
                            }
                        });
                        break;
                    default:
                        Toast('请选择支付方式！')
                        break
                }

                // let self = this;
                // new Promise((reslove, reject)=>{
                //     self.startMatching((err, res)=>{
                //         if (!err) {
                //             reslove(res)
                //         }else{
                //             reject(err)
                //         }
                //     })
                // }).then(res=>{
                //     console.log(res)
                //     Toast('匹配订单创建成功！')
                //     this.$router.push({name: 'matchTeam',query: {
                //         roleName: this.$route.query.roleName,
                //         fubenName: this.$route.query.fubenName,
                //         serverName: this.$route.query.serverName
                //     }})
                // }).catch(err=>{
                //     console.log(err)
                // })
            },
            startMatching (cb) {
                let self = this;
                new Promise((reslove, reject)=>{
                    self.Axios.post('/api/v1/match_order/', {
                        role: self.$route.query.roleUri,
                        dungeon: self.$route.query.fubenUri
                    }).then(res=>{
                        reslove(res)
                    }).catch(err=>{
                        reject(err)
                    })
                }).then(res=>{
                    if (!err) {
                        if (res.data._status == 0) {
                            self.match_order = res.data.resource_uri
                            cb(null, res.data.resource_uri)
                        } else {
                            Toast(res.data._reason)
                        }
                    }
                }).catch(err=>{
                    cb(err)
                })
            },
            CreateAnOrder(cb) {
                // 创建匹配订单
                let self = this;
                this.Axios.post('/api/v1/match_order/', {
                    dungeon: self.$route.query.fubenUri,
                    role: self.$route.query.roleUri
                }).then(res=>{
                    if (res.data._status == 0) {
                        self.match_order = res.data.resource_uri
                        cb(null, res.data.resource_uri)
                    }else{
                        Toast(res.data._reason)
                        cb(res.data._reason)
                    }
                }).catch(err=>{
                    cb(err)
                })
            },
            aliPay(match_order = this.match_order) {
                // 支付宝支付
                let self = this;
                this.Axios.post('/api/v1/payment/get_alipay_url', {
                    match_order_uri: match_order,
                    return_url: ''
                }).then(res=>{
                    if (res.data._status == 0) {
                        window.location.href = res.data.alipay_url
                    }else{
                        Toast('支付URL获取异常')
                    }
                }).catch(err=>{
                    Toast('支付URL获取失败')
                })
            },
            wechatPay() {
                // 微信支付
            },
            tbPay() {
                // 团币支付
            },
            closeOrder() {

            }
        }
    }
</script>

<style scoped>
    #createTeam {
        display: grid;
        grid-auto-rows: 50px;
        padding-bottom: 50px;
    }
    .item {
        display: grid;
        grid-template-columns: auto auto;
        background-color: #fff;
        border-bottom: 1px solid #F5F5F5;
        padding: 0 15px;
        font-size: 0.85rem;
    }
    .title {
        line-height: 50px;
        font-size: 1rem;
        font-weight: 700;
        padding: 0 15px;
    }
    .pay {
        display: grid;
        grid-template-columns: auto 40px;
        background-color: #fff;
        font-size: 0.85rem;
        border-bottom: 1px solid #F5F5F5;
        padding: 0 15px;
    }
    .lside {
        line-height: 50px;
    }
    .rside {
        line-height: 50px;
        text-align: right;
        color: #5D5D5D;
        font-size: 0.85rem;
    }
    .text {
        font-size: 0.8rem;
    }
    .rside-icon {
        color: #47c808;
        font-weight: 700;
    }
</style>
