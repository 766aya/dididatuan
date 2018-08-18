<template>
    <div id="payDeposit">
        <div class="coin-item">
            <div class="title">缴纳保障金</div>
            <div class="num">30 元</div>
        </div>
        <div class="submit">
            <p class="title">随时可退</p>
            <div class="button" @click="submit">缴纳保证金</div>
            <p class="tips">提交申请后7个工作日内完成审核</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'payDeposit',
        data() {
            return {
            }
        },
        methods: {
            submit () {
                alert('缴纳')
            }
        }
    }
</script>

<style scoped>
    .coin-item {
        display: grid;
        grid-template-rows: 30px 80px;
        width: calc(100vw - 40px);
        padding: 20px;
        background-color: #FEC300;
    }
    .coin-item .title {
        font-size: 1rem;
        line-height: 30px;
        font-weight: 700;
        color: #FFFFFF;
    }
    .num {
        font-size: 30px;
        line-height: 80px;
        color: #FFFFFF;
    }
    .submit {
        padding: 20px 15px;
    }
    .submit .title {
        font-size: 0.85em;
    }
    .button {
        margin: 20px 0;
        color: #fff;
        background-color: #FEC300;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        font-size: 1.25em;
    }
    .tips {
        color: #666;
        font-size: 0.85em;
        text-align: center;
    }
</style>
