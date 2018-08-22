<template>
    <div id="createTeam">
        <div v-if="type===2">
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
                <div class="lside">匹配老板人数</div>
                <div class="rside" @click="changeList('rookie')">{{info.rookie}}<span class="text iconfont icon-you"></span></div>
            </div>
            <div class="item">
                <div class="lside">匹配大神人数</div>
                <div class="rside" @click="changeList('master')">{{info.master}}<span class="text iconfont icon-you"></span></div>
            </div>
            <van-submit-bar
              :disabled="isSubmit"
              :price="price"
              button-text="创建房间"
              @submit="createRoom"
            />
        </div>
        <div v-else>
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
        </div>

        <!-- 优惠券列表 -->
        <van-popup v-model="isCouponShow" position="bottom">
          <van-coupon-list
            :show-exchange-bar="false"
            :coupons="coupon.list"
            :chosen-coupon="chosenCoupon"
            @change="onChange"
          />
        </van-popup>

        <van-picker
            show-toolbar
            title="选择人数"
            :columns="selectList"
            @cancel="isPicker=false;chosen=''"
            @confirm="onConfirm"
            class="picker"
            v-show="isPicker"
        />
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
                    amount: 0,
                    master: 0,
                    rookie: 1
                },
                payWay: 1,
                coupon: this.$store.state.coupon,
                chosenCoupon: -1,
                isCouponShow: false,
                isSubmit: false,
                match_order: '',
                type: 0,
                isPicker: false,
                chosen: '',
                selectList: [],
                range: {}
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
            this.type = this.$route.query.type;
            this.range = {rookie: this.$route.query.rookie_num, master: this.$route.query.master_num}
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
                    return_url: `http://didi.51wdy.top/subpage/matchTeam?match_older=${self.match_order}&roleName=${self.info.role}&serverName=${self.$route.query.serverName}&fubenName=${self.info.fuben}`
                }).then(res=>{
                    if (res.data._status == 0) {
                        window.location.href = res.data.alipay_url;
                    }else{
                        Toast('支付URL获取异常');
                    }
                }).catch(err=>{
                    Toast('支付URL获取失败');
                })
            },
            wechatPay() {
                // 微信支付
            },
            tbPay() {
                // 团币支付
            },
            closeOrder() {

            },
            onConfirm (value) {
                // 人数确定
                console.log("val: ", value)
                this.isPicker = false;
                this.info[this.chosen] = value
                this.chosen = ''
            },
            changeList (type) {
                this.chosen = type;
                this.isPicker = true;
                if (type === 'master') {
                    let num = [0,1,2,3,4,5,6,7,8]
                    this.selectList = num.slice(0, this.range[type]+1)
                } else {
                    let num = [1,2,3,4,5,6,7,8]
                    this.selectList = num.slice(0, this.range[type])
                }
                console.log("list: ", this.selectList)
            },
            createRoom () {
                this.createRoomCb((err, res)=>{
                    if (!err) {
                        console.log("res: ", res)
                    }
                })
            },
            createRoomCb (cb) {
                // 创建匹配订单
                let self = this;
                this.Axios.post('/api/v1/room/', {
                    dungeon: self.$route.query.fubenUri,
                    leader_role: self.$route.query.roleUri,
                    have_master: false,
                    match_order_set: this.match_order
                }).then(res=>{
                    console.log("res: ", res)
                }).catch(err=>{
                    cb(err)
                })
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
    .picker {
        position: fixed;
        width: 100vw;
        margin: 0;
        left: 0;
        bottom: 50px;
        z-index: 10;
    }
</style>
