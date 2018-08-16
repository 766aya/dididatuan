<template>
    <div id="test">
        <p>{{text}}</p>
        <button @click="zhifu">支付测试</button>
    </div>
</template>

<script src="https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js"></script>
<script>

    export default {
        name: 'test',
        data() {
            return {
                text: ''
            }
        },
        methods: {
            zhifu () {
                window.location.href = 'https://openapi.alipay.com/gateway.do'
            }
        }
    }
</script>

<style scoped>
</style>
