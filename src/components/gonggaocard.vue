<template>
	<div class="card">
		<h1 class="text title" v-text="data.title"></h1>
        <p class="text date" v-text="data.timer"></p>
        <div class="line"></div>
        <p class="text-main" :class="{ 'low-text': text.length <= 20 }" v-for="(text, index) in data.msgs" :key="'list'+index" v-text="text"></p>
	</div>
</template>

<script>
	export default {
		name: "ggcard",
		data() {
			return {
				
			};
        },
        props:['data']
	};
</script>

<style scoped>
	.card {
        width: 80%;
        /* height: 100px; */
        background: #FFFFFF;
        margin: 15px auto;
        padding: 10px 20px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 10px #DDDDDD;
    }
    .text {
        text-align: center;
    }
    .title {
        font-size: 1rem;
        font-weight: normal;
    }
    .date {
        font-size: 1rem;
        color: #9E9E9E;
        padding: 5px 0;
    }
    .text-main {
        line-height: 1.25rem;
    }
    .low-text {
        padding: 0px 0 0 50px;
    }
    .line {
        height: 1px;
        width: 100%;
        background: #E0E0E0;
        margin: 5px auto;
    }
</style>
