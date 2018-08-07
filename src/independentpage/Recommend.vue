<template>
    <div id="Recommendd">
        <van-nav-bar
            :title="routeInfo.title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
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
