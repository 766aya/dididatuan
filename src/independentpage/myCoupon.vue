<template>
    <div id="coupon-content">
        <van-nav-bar
            :title="routeInfo.username"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main">
            <div v-if="list.length">
                <van-popup v-model="showList" position="bottom">
                  <van-coupon-list
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    :disabled-coupons="disabledCoupons"
                  />
                </van-popup>
            </div>
            <div v-else class="coupon-null">没有优惠券</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'coupon-content',
        data() {
            return {
                routeInfo: this.$route.query,
                list: [{
                    id: 1,
                    name: '新人礼-卢克券',
                    start_at: '2018-01-01'
                }]
            }
        },
        created() {
            
        },
        methods: {
            onClickLeft() {
                this.$router.push({name: 'User', query: {bar: '2', type: '1'} })
            }
        }
    }
</script>

<style scoped>
.coupon-null {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
}
</style>
