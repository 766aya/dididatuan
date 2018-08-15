<template>
    <div id="greatGod">
        <div class="god-list" @click="changeLink(0)">
            <p class="link">大神端使用方式学习</p>
            <span v-show="status.method">已通过</span>
        </div>
        <div class="god-list" @click="changeLink(1)">
            <p class="link">大神规则考核</p>
            <span v-show="status.assessment">已通过</span>
        </div>
        <div class="god-list" @click="changeLink(2)">
            <p class="link">大神行为管理规范</p>
            <span v-show="status.standard">已通过</span>
        </div>
        <div class="god-list" @click="changeLink(3)">
            <p class="link">大神角色认证</p>
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
        },
        methods: {
            changeLink(val) {
                switch (val) {
                    case 0:
                        this.$router.push({name: 'method', query: {title: '大神端使用方式学习'}})
                        break;
                    case 1:
                        this.$router.push({name: 'assessment', query: {title: '大神规则考核'}})
                        break;
                    case 2:
                        this.$router.push({name: 'standard', query: {title: '大神行为管理规范'}})
                        break;
                    case 3:
                        this.$router.push({name: 'authenticate', query: {title: '大神角色认证'}})
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    #greatGod {
        
    }
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
