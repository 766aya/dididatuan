<template>
	<div class="card">
		<div class="img" :info="5">
            <img :src="data.img">
        </div>
        <div class="text-group">
            <div class="text title" v-text="data.title"></div>
            <div class="text msg" v-text="data.msg ? data.msg : '暂无新消息'"></div>
        </div>
	</div>
</template>

<script>
	export default {
        name: 'xxcard',
        props: ['data'],
	}
</script>

<style scoped>
	.card {
        width: 100%;
        height: 70px;
		display: grid;
        grid-template-columns: 90px auto;
        border-top: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
        background: #FFFFFF;
	}
    .img {
        padding: 10px 20px;
    }
    .img img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
    }
    .text-group {
        display: grid;
        grid-template-rows: 50% 50%;
        padding: 10px 0px 10px 0px;
    }
    .text {
        line-height: 26px;
    }
    .title {
        font-size: 0.75rem;
        color: #000000;
    }
    .msg {
        font-size: 0.5rem;
        color: #9E9E9E;
    }
</style>
