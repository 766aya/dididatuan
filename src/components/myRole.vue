<template>
	<div id="myrole">
		<div class="title" @click="roleControl">
            <div class="t">我的角色</div>
            <div class="iconfont icon-you"></div>      
        </div>
        <div class="content">
            <div class="item-default" v-for="(item, index) in roleList" :key="index">
                <div class="box">
                    <img :src="defaultImg">
                </div>
                <div class="text" v-text="item.roleName"></div>
            </div>
            <div class="item-default" @click="addRole">
                <div class="box iconfont icon-tianjia"></div>
                <div class="text"></div>
            </div>
        </div>
	</div>
</template>

<script>
    import { Dialog, Toast } from 'vant';
	export default {
        name: 'myRole',
        data() {
            return {
                roleList: [],
                defaultImg: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg'
            }
        },
        created() {
            let self = this;
            if (self.$store.state.user.isLogin == true) {
				this.getRoleInfo(self, (err, res)=>{
					if (!err && res._status==0) {
                        self.$store.state.user.roleList = []
                        let i = 0;
						res.objects.forEach(element =>{
                            i++;
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
                            if (i<4) {
                                self.roleList.push(data)
                            }
						})
					}
				})
			} else {
				Toast('您还未登陆，无法获取角色信息！')
			}
        },
        methods: {
            roleControl() {
                this.$router.push({name: 'myRoleControl', query: {title: '角色管理'}})
            },
            addRole() {
                this.$router.push({name: 'addRole', query: {title: '添加角色'}})
            }
        }
	}
</script>

<style scoped>
    #myrole {
        display: grid;
        grid-template-rows: 40px auto;
        background-color: #FFFFFF;
        margin-bottom: 10px;
    }
    .title {
        display: grid;
        grid-template-columns: auto 40px;
        line-height: 40px;
        padding-left: 15px;
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid #EEEEEE;
    }
    .content {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        padding: 10px 0;
        align-items: center;
        text-align: center;
    }
    .title .t {
        font-weight: 700;
    }
    .item-default {
        display: grid;
        grid-template-rows: 50px 25px;
        text-align: center;
        align-items: center;
    }
    .box {
        width: 48px;
        height: 48px;
        line-height: 50px;
        text-align: center;
        border: 1px dashed #E5E5E5;
        border-radius: 5px;
        overflow: hidden;
        margin: 0 auto;
    }
    .box img {
        width: 100%;
        height: 100%;
    }
    .text {
        text-align: center;
        line-height: 25px;
        font-size: 0.75rem;
    }
</style>
