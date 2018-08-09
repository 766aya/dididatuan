<template>
	<div id="putForward">
        <div class="content">
            <div class="main">
                <div>取款金额</div>
                <div>
                    <div>￥</div>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
	</div>
</template>

<script>
	export default {
        name: 'PutForward',
        data() {
            return {
                
            }
        },
        methods: {
            onClickLeft() {
				// this.$router.push({name: 'User', query: {bar: '2'} })
			},
        }
	}
</script>

<style scoped>
	.content {
        display: grid;
        grid-template-rows: auto 50px 20px;
    }
    .main {
        display: grid;
        grid-template-rows: 25px 55px 25px;
    }
</style>
