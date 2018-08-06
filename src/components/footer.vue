<template>
	<div id="footer">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="msg">公告</van-tabbar-item>
			<van-tabbar-item icon="jian">打团</van-tabbar-item>
			<van-tabbar-item icon="user">个人信息</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {
				active: 1
			};
		},
		created() {
			this.$router.push({name: 'DaTuan'})
		},
		watch: {
			active(val) {
				let valInt = parseInt(val)
				let self = this;
				switch (val) {
					case 0:
						self.$router.push({name: 'Message'});
						break;
					case 1:
						self.$router.push({name: 'DaTuan'});
						break;
					case 2:
						self.$router.push({name: 'User'});
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: "custom-iconfont";
		src: url("/static/iconfont.ttf") format("truetype");
	}

	.van-icon {
		font-family: "vant-icon", "custom-iconfont" !important;
	}

	.van-icon-jian:before {
		content: '\e66a';
	}
	.van-icon-user:before {
		content: '\e606';
	}
	.van-icon-msg:before {
		content: '\e60d';
	}
</style>
