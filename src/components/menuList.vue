<template>
    <div class="menuList">
        <span class="list-title"><i class="iconfont" :class="list.icon"></i></span>
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
        props:['list']
    };
</script>

<style scoped>
    .menuList {
        display: flex;
        height: 70px;
        line-height: 70px;
        background-color: #fff;
        border-bottom: 3px solid #f5f5f5;
    }
    .list-title {
        width: 70px;
        text-align: center;
    }
    .list-title i {
        font-size: 26px;
    }
    .list-content {
        margin-left: 5px;
    }
</style>
