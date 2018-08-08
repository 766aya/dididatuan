<template>
	<div id="login">
		<van-nav-bar
            title="用户登陆"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {

			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	#login {

	}
</style>
