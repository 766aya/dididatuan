<template>
	<div id="independentpage">
        <van-nav-bar
            :title="routeInfo.title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
		<router-view />
	</div>
</template>

<script>
	export default {
        name: 'independentpage',
        data() {
            return {
                routeInfo: this.$route.query,
            }
        },
        watch: {
            
        },
        methods: {
            onClickLeft() {
				this.$router.push({name: 'User', query: {bar: '2'} })
			},
        }
	}
</script>

<style>

</style>
