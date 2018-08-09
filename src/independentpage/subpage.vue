<template>
	<div id="subpage">
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
        name: 'subpage',
        data() {
            return {
                routeInfo: this.$route.query,
            }
        },
        methods: {
            onClickLeft() {
				this.$router.go(-1)
			},
        }
	}
</script>

<style>

</style>
