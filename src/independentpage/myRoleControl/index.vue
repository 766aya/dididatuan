<template>
	<div id="myRoleItem">
		<div v-for="(item, index) in roleList" :key="index">
			<div class="img">img</div>
			<div class="text" v-text="item.roleName"></div>
		</div>
		<div v-for="(item, index) in roleList" :key="index">
			<div class="img">img</div>
			<div class="text" v-text="item.roleName"></div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	
	export default {
		name: 'myRoleItem',
		data() {
			return {
				roleList: this.$store.state.user.roleList
			}
		},
		created() {
			let self = this;
			if (self.$store.state.user.isLogin == true) {
				this.getRoleInfo(self, (err, res)=>{
					if (!err && res._status==0) {
						self.$store.state.user.roleList = []
						res.objects.forEach(element =>{
							let data = {
								img: element.career.image, // 职业图片
								career: element.career.name, // 职业信息
								careerUri: element.career.resource_uri, // 职业信息
								roleName: element.name, // 角色名
								roleUri: element.resource_uri, // 角色资源
								serverName: element.server.name, // 服务器名
								serverUri: element.server.resource_uri, // 服务器资源
							}
							self.$store.state.user.roleList.push(data)
						})
					}
				})
			} else {
				Toast('您还未登陆，无法获取角色信息！')
			}
			
		}
	}
</script>

<style scoped>
	#myRoleItem {
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		grid-auto-rows: 70px;
	}
</style>
