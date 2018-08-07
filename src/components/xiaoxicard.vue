<template>
	<div class="card">
        <router-link class="link" :to="{name: 'MessageContent', params: {id: data.userId}, query: { userId: data.userId, username: data.title } }">
    		<div class="img" >
                <img :src="data.img">
            </div>
            <div class="text-group">
                <div class="text title" v-text="data.title"></div>
                <div class="text msg" v-text="data.msg ? data.msg : '暂无新消息'"></div>
            </div>
        </router-link>
	</div>
</template>

<script>
	export default {
        name: 'xxcard',
        props: ['data'],
	}
</script>

<style scoped>
    .link {
        height: 70px;
        width: 100%;
        display: grid;
        grid-template-columns: 90px auto;
    }
	.card {
        width: 100%;
        height: 70px;
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
