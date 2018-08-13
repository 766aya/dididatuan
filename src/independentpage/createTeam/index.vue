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
            <div class="rside" v-text="`￥${info.Oprice}元`">{{}}</div>
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
            :coupons="coupon.list"
            :chosen-coupon="chosenCoupon"
            @change="onChange"
          />
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: 'create-team',
        data() {
            return {
                info: {
                    role: '123',
                    fuben: '副本',
                    Oprice: '原价',
                    Coupon: '请选择优惠券',
                    amount: 100
                },
                payWay: 1,
                coupon: this.$store.state.coupon,
                chosenCoupon: -1,
                isCouponShow: false,
                isSubmit: false
            }
        },
        computed: {
            price() {
                return this.$route.query.fubenPrice - this.info.amount
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
                console.log("coupon: ", this.coupon)
                if (index === -1) {
                    this.info.Coupon = '不使用优惠券'
                    return
                }
                this.info.Coupon = this.coupon.list[index].name
            },
            onSubmit () {
                this.$router.push({name: 'matchTeam'})
            }
        }
    }
</script>

<style scoped>
    #createTeam {
        display: grid;
        grid-auto-rows: 50px;
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
