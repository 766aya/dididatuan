<template>
    <div id="greatGod">
        <div class="god-list">
            <router-link class="link" :to="{name: 'method', query: {title: '大神端使用方式学习'}}">大神端使用方式学习</router-link>
            <span v-show="status.method">已通过</span>
        </div>
        <div class="god-list">
            <router-link class="link" :to="{name: 'assessment', query: {title: '大神规则考核'}}">大神规则考核</router-link>
            <span v-show="status.assessment">已通过</span>
        </div>
        <div class="god-list">
            <router-link class="link" :to="{name: 'standard', query: {title: '大神行为管理规范'}}">大神行为管理规范</router-link>
            <span v-show="status.standard">已通过</span>
        </div>
        <div class="god-list">
            <router-link class="link" :to="{name: 'authenticate', query: {title: '大神角色认证'}}">大神角色认证</router-link>
            <span v-show="status.authenticate">已通过</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'greatGod',
        data() {
            return {
                status: {
                    method: true,
                    assessment: true,
                    standard: false,
                    authenticate: false
                }
            }
        }
    }
</script>

<style scoped>
    .god-list {
        height: 30px;
        line-height: 30px;
        font-size: 0.8rem;
        background-color: #fff;
        border-bottom: 2px solid #f5f5f5;
        padding: 0 0.75rem;
        display: flex;
        justify-content: space-between;
    }
    .god-list span {
        color: #14d22d;
    }
    .link {
        color: #333333;
        text-decoration: none;
    }
</style>
