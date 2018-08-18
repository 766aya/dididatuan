<template>
    <div class="menuList" @click="routerPush(list)">
        <span class="list-title iconfont" :class="list.icon"></span>
        <p class="list-content">{{list.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "menuList",
        data() {
            return {
                
            }
        },
        props:['list'],
        methods: {
            routerPush (list) {
                let self = this
                if (!self.$store.state.user.isLogin && list.auth) {
                    self.$toast('您还未登陆，请先登陆账号！');
                    return false
                }
                this.$router.push({name: list.url, query: {title: this.list.name}})
            }
        }
    };
</script>

<style scoped>
    .menuList {
        display: flex;
        background-color: #fff;
        padding: 15px 0;
        margin-bottom: 5px;
    }
    .list-title {
        width: 50px;
        text-align: center;
    }
    .list-title {
        font-size: 1.2rem;
    }
    .list-content {
        /*margin-left: 5px;*/
        font-size: 1rem;
    }
</style>
