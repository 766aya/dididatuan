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
            <router-link :to="{name: 'callHelp', query: {title: '联系客服'}}" class="callServer">联系客服</router-link>
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
		methods: {

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
