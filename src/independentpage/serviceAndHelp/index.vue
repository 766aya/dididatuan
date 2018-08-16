<template>
    <div id="Recommendd">
        <div class="title">常见问题</div>
        <div class="menu">
            <router-link :to="{name: 'bossAsk', query: {title: '老板问答'}}" class="link">老板问答</router-link>
        </div>
        <div class="menu">
            <router-link :to="{name: 'godAsk', query: {title: '大神问答'}}" class="link">大神问答</router-link>
        </div>
        <div class="title">使用教程</div>
        <div class="menu">
            <router-link :to="{name: 'bossCourse', query: {title: '老板使用教程'}}" class="link">老板使用教程</router-link>
        </div>
        <div class="menu">
            <router-link :to="{name: 'headCourse', query: {title: '团长使用教程'}}" class="link">团长使用教程</router-link>
        </div>
        <div class="menu">
            <router-link :to="{name: 'godCourse', query: {title: '大神教程'}}" class="link">大神教程</router-link>
        </div>
        <div class="title">交流群</div>
        <div class="menu">
            <router-link :to="{name: 'didiTeam', query: {title: '滴滴交流群'}}" class="link">滴滴交流群</router-link>
        </div>
        <div class="btn">
            <!-- <a href="weixin://wap/pay?z1494233259" class="callServer">联系客服</a> -->
            <a @click="test" class="callServer">联系客服</a>
        </div>
        <div class="btn">
            <router-link :to="{name: 'cleanCache', query: {title: '清除缓存'}}" class="clearCache">清除缓存</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'serviceAndHelp',
        data() {
            return {
                routeInfo: this.$route.query,
            }
        },
        created() {
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wx4f82f99cd5b54909', // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: new Date().getTime(), // 必填，生成签名的时间戳
                nonceStr: 'z9Fwn9BvDd6RGh8vuiQfbLMGJORyuCFX', // 必填，生成签名的随机串
                signature: '',// 必填，签名，见附录1
                jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        },
		methods: {
            test() {
                wx.chooseWXPay({
                    timestamp: new Date().getTime(), // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: 'z9Fwn9BvDd6RGh8vuiQfbLMGJORyuCFX', // 支付签名随机串，不长于 32 位
                    signType: 'SHA1', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: 'appid=wx4f82f99cd5b54909', // 支付签名
                    success: function (res) {
                        // 支付成功后的回调函数
                        console.log(res)
                    }
                });
            }
		}
    }
</script>

<style scoped>
    #Recommendd {
        display: grid;
        grid-template-rows: 40px 50px 50px 40px 50px 50px 50px 40px 50px auto auto;
    }
    .title {
        padding-left: 10px;
        line-height: 40px;
        font-weight: 700;
    }
    .menu {
        line-height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #DDDDDD;
        padding-left: 10px;
    }
    .link {
        display: block;
        width: 100%;
        height: 100%;
        color: #5D5D5D;
    }
    .btn {
        text-align: center;
        width: 80%;
        margin: 10px auto 0px auto;
        align-items: center;
    }
    .callServer {
        padding: 15px 0;
        display: block;
        border-radius: 5px;
        background-color: #FF6600;
        color: #FFFFFF;
    }
    .clearCache {
        padding: 15px 0;
        display: block;
        border-radius: 5px;
        background-color: #FFFFFF;
        border: 1px solid #FF6600;
        color: #FF6600;
    }
</style>
