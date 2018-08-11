<template>
    <div id="createTeam">
        <div class="title">订单信息</div>
        <div class="item">
            <div class="lside">角色</div>
            <div class="rside">{{info.role}}</div>
        </div>
        <div class="item">
            <div class="lside">副本</div>
            <div class="rside">{{info.fuben}}</div>
        </div>
        <div class="item">
            <div class="lside">原价</div>
            <div class="rside">{{info.Oprice}}</div>
        </div>
        <div class="item">
            <div class="lside">优惠券</div>
            <div class="rside" @click="isCouponShow = true">{{info.Coupon}}<span data-v-7b579e8e="" class="text t2 iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">优惠金额</div>
            <div class="rside">{{info.amount}}</div>
        </div>
        <div class="item">
            <div class="lside">需支付</div>
            <div class="rside">{{info.price}}</div>
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
          disabled
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
                    role: '角色',
                    fuben: '副本',
                    Oprice: '原价',
                    Coupon: '优惠券',
                    amount: '优惠金额',
                    price: '需支付'
                },
                payWay: 1,
                coupon: this.$store.state.coupon,
                chosenCoupon: -1,
                isCouponShow: false,
                price: 4000
            }
        },
        created() {
        },
        methods: {
            onChange (index) {
                this.chosenCoupon = index;
                this.isCouponShow = false
                console.log("coupon: ", this.coupon)
                this.info.Coupon = this.coupon.list[index].name
            },
            onSubmit () {
                
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
    border-bottom: 1px solid #5d5d5d;
    padding: 0 15px;
}
.title {
    line-height: 50px;
    padding: 0 15px;
}
.pay {
    display: grid;
    grid-template-columns: auto 40px;
    background-color: #fff;
    border-bottom: 1px solid #5d5d5d;
    padding: 0 15px;
}
.lside {
    line-height: 50px;
}
.rside {
    line-height: 50px;
    text-align: right;
}
.rside-icon {
    color: #47c808;
    font-weight: 700;
}
</style>
