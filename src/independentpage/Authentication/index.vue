<template>
    <div id="Recommendd">
        <div class="recom-content">
            <p class="recom-title">实力认证</p>
            <div class="recom-list" @click="routerPush('greatGod', '大神认证')">大神认证</div>
            <div class="recom-list" @click="routerPush('groupHead', '团长认证')">团长认证</div>
        </div>
        <div class="recom-content">
            <p class="recom-title">个人认证</p>
            <div class="recom-list" @click="routerPush('payDeposit', '缴纳保证金')">缴纳保证金</div>
            <div class="recom-list" @click="routerPush('RealName', '实名认证')">实名认证</div>
        </div>
        <div class="recom-content">
            <p class="recom-title">佣金</p>
            <div class="recom-list" @click="routerPush('Calculator', '佣金计算器')">佣金计算器</div>
        </div>
        <div class="recom-tips">
            <p class="recom-tips-title">Tips:</p>
            <ul>
                <li>当您通过实力认证后，可接触对应身份限制，完成体验打团流程（成为大神赚取佣金）。</li>
                <li>当您通过实名认证后，可增加100经验值，提高经验等级（等级越高收益越高）。</li>
                <li>当您缴纳保证金后，可增加50经验值，提高经验等级（等级越高收益越高）。</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Authentication',
        data() {
            return {

            }
        },
		methods: {
            routerPush (url, title) {
                this.$router.push({name: url, query: {title: title}})
            }
		}
    }
</script>

<style scoped>
.recom-content {
    font-size: 20px;
}
.recom-title {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
}
.recom-list {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: #f5f5f5 solid 3px;
}
.recom-tips {
    font-size: 18px;
    padding: 0 15px;
    margin-top: 20px;
}
.recom-tips-title {
    height: 28px;
}
.recom-tips li {
    line-height: 28px;
    font-size: 16px;
}
</style>
