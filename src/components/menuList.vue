<template>
    <div class="menuList" @click="routerPush(list.url)">
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
            routerPush (url) {
                this.$router.push({name: url, query: {title: this.list.name}})
            }
        }
    };
</script>

<style scoped>
    .menuList {
        display: flex;
        background-color: #fff;
        padding: 10px 0;
        margin-bottom: 5px;
    }
    .list-title {
        width: 50px;
        text-align: center;
    }
    .list-title {
        font-size: 1rem;
    }
    .list-content {
        margin-left: 5px;
        font-size: 0.75rem;
    }
</style>
