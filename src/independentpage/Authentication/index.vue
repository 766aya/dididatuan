<template>
    <div id="Authentication">
        <div class="title">实力认证</div>
        <div class="menu">
            <a class="link" @click="routerPush('greatGod', '大神认证')">大神认证</a>
        </div>
        <div class="menu">
            <a class="link" @click="routerPush('groupHead', '团长认证')">团长认证</a>
        </div>
        <div class="title">个人认证</div>
        <div class="menu">
            <router-link class="link" :to="{name: 'payDeposit', query: {title: '缴纳保证金'}}">缴纳保证金</router-link>
        </div>
        <div class="menu">
            <router-link class="link" :to="{name: 'RealName', query: {title: '实名认证'}}">实名认证</router-link>
        </div>
        <div class="title">佣金</div>
        <div class="menu">
            <router-link class="link" :to="{name: 'Calculator', query: {title: '佣金计算器'}}">佣金计算器</router-link>
        </div>
        <div class="tip-box text tip">Tips:</div>
        <div class="tip-box ">
            <ul>
                <li class="text">当您通过实力认证后，可接触对应身份限制，完成体验打团流程（成为大神赚取佣金）。</li>
                <li class="text">当您通过实名认证后，可增加100经验值，提高经验等级（等级越高收益越高）。</li>
                <li class="text">当您缴纳保证金后，可增加50经验值，提高经验等级（等级越高收益越高）。</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';

    export default {
        name: 'Authentication',
        data() {
            return {

            }
        },
		methods: {
            routerPush (url, title) {
                let self = this;
                if (url == 'greatGod') {
                    this.QueryLanding(this, (err, res)=>{
                        if (!err) {
                            if (res.type == 0) {
                                self.$router.push({name: url, query: {title: title}})
                            } else {
                                Toast('你已完成大神认证！')
                            }
                        } else {
                            Toast('用户未登录！')
                        }
                    })
                } else if(url == 'groupHead') {
                    this.QueryLanding(this, (err, res)=>{
                        if (!err) {
                            if (res.type == 0) {
                                Toast('请先完成大神认证！')
                            } else if(res.type == 1) {
                                self.$router.push({name: url, query: {title: title}})
                            } else if(res.type == 2) {
                                Toast('你已完成团长认证!')
                            }
                        } else {
                            Toast('用户未登录！')
                        }
                    })
                }
            },
            
		}
    }
</script>

<style scoped>
    #Authentication {
        display: grid;
        grid-template-rows: 40px 50px 50px 40px 50px 50px 40px 50px auto auto;
    }
    .title {
        padding-left: 10px;
        line-height: 40px;
        font-weight: 700;
        font-size: 1rem;
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
        color: #333333;
        font-size: 0.85rem;
    }
    .tip-box {
        padding: 0 10px;
    }
    .tip {
        padding: 5px 10px;
    }
    .tip-box ul li{
        padding: 2px 0;
        list-style: square;
        line-height: 1rem;
    }
    .text {
        font-size: 0.5rem;
        color: #5D5D5D;
    }
</style>
