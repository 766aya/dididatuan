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
            this.QueryLanding(self, (err, res)=>{
                if (!err) {
                    self.$store.state.user.isLogin = true;
                    if (self.$store.state.user.isLogin == true) {
                        this.getRoleInfo(self, (err, res)=>{
                            self.roleList = res.slice(0, 3)
                        })
                    } else {
                        Toast('您还未登陆，无法获取角色信息！')
                    }
                }
            })
        },
        methods: {
            roleControl() {
                let self = this
                if (!self.$store.state.user.isLogin) {
                    self.$toast('您还未登陆，请先登陆账号！');
                    return false
                }
                this.$router.push({name: 'myRoleControl', query: {title: '角色管理'}})
            },
            addRole() {
                let self = this
                if (!self.$store.state.user.isLogin) {
                    self.$toast('您还未登陆，请先登陆账号！');
                    return false
                }
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
