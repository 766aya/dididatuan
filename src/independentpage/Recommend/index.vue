<template>
    <div id="Recommendd">
        暂无信息
    </div>
</template>

<script>
    export default {
        name: 'Recommendd',
        data() {
            return {
                routeInfo: this.$route.query,
            }
        },
		methods: {
			onClickLeft() {
				this.$router.push({name: 'User', query: {bar: '2'} })
			}
		}
    }
</script>

<style scoped>

</style>
