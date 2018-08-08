<template>
    <div id="coupon-content">
        <div class="main">
            <div v-if="data.list.length">
                <van-coupon-list
                    :coupons="data.list"
                    :show-close-button=false
                    :show-exchange-bar=false
                    input-placeholder="请输入优惠券的名称"
                />
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
                data: this.$store.state.coupon
            }
        },
        created() {
            console.log('user: ', this.$store)
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
