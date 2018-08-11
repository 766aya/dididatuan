<template>
	<div id="myRoleItem">
		<div class="content" v-for="(item, index) in roleList" :key="index">
			<div class="box">
				<img :src="defaultImg">
				<div class="delRole iconfont icon-cuo" @click="delRole(item.roleName, item.roleUri)"></div>
			</div>
			<div class="text" v-text="item.roleName"></div>
		</div>
		<div class="content" @click="addRole">
			<div class="box iconfont icon-tianjia"></div>
			<div class="text"></div>
		</div>
	</div>
</template>

<script>
	import { Dialog, Toast } from 'vant';
	
	export default {
		name: 'myRoleItem',
		data() {
			return {
				roleList: this.$store.state.user.roleList,
				defaultImg: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg',
			}
		},
		created() {
			let self = this;
			new Promise((reslove, reject)=>{
				this.QueryLanding(self, (err, res)=>{
					if (!err) {
						self.$store.state.user.isLogin = true;
						reslove(true)
					}else{
						reject(true)
					}
				})
			}).then((err, res)=>{
				if (self.$store.state.user.isLogin == true) {
					this.getRoleInfo(self, (err, res)=>{
						if (!err && res.data._status==0) {
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
				}
			}).catch(err=>{
				Toast('您还未登陆，无法获取角色信息！')
			})
		},
		methods: {
			addRole() {
                this.$router.push({name: 'addRole', query: {title: '添加角色'}})
			},
			delRole(name, uri) {
				let self = this;
				Dialog.confirm({
					title: '提示',
					message: `是否删除角色${name}？`
				}).then(() => {
					self.Axios.delete(uri).then(res=>{
						if (res.data._status == 0) {
							Toast.success('删除角色成功！')
							setTimeout(()=>{
								location.reload()
							}, 1000)
						}else{
							Toast.fail('删除角色失败！')
						}
					}).catch(err=>{
						Toast.fail('删除角色失败！')
					})
				}).catch(() => {
					Toast('您取消了删除角色操作')
				});
			}
		}
	}
</script>

<style scoped>
	#myRoleItem {
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		grid-auto-rows: 85px;
	}
	.content {
		margin-top: 15px;
	}
	.box {
		position: relative;
        width: 48px;
        height: 48px;
        line-height: 50px;
        text-align: center;
        border: 1px dashed #E5E5E5;
        border-radius: 5px;
        margin: 0 auto;
    }
    .box img {
        width: 100%;
        height: 100%;
		overflow: hidden;
		border-radius: 5px;
    }
    .text {
        text-align: center;
        line-height: 20px;
        font-size: 0.75rem;
    }
	.delRole {
		position: absolute;
		top: -10px;
		right: -10px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #FF0036;
		color: #FFFFFF;
		text-align: center;
	}
	.delRole::before {
		position: absolute;
		margin-top: -15px;
		margin-left: -8px;
	}
</style>
