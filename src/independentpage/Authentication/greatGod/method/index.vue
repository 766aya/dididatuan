<template>
    <div id="method">
        <div class="content"></div>
        <div class="btn" @click="understood">我已了解</div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: 'method',
        data() {
            return {
                createdDate: new Date().getTime(),
            }
        },
        methods: {
            understood() {
                let endDate = new Date().getTime();
                let interval = endDate - this.createdDate
                if (interval < 5000) {
                    Toast('浏览时长不足！')
                } else {
                    Toast('已完成！')
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>
    .btn {
        width: 100vw;
        height: 60px;
        font-size: 1.25rem;
        color: #FFFFFF;
        background: #FF6600;
        text-align: center;
        line-height: 60px;
    }
</style>
