<template>
	<div id="Settlement">
		<div class="logo">
			<img src="/static/logo.png">
		</div>
		<div class="settlement-content">
			<div class="text t1">选择副本：</div>
			<div class="text t2" @click="FubenSelectionIsShow = true">{{fuben}}</div>
			<div class="text t2 iconfont icon-you"></div>
			<div class="text t1">选择角色：</div>
			<div class="text t2" @click="JueseSelectionIsShow=true">{{juese}}</div>
			<div class="text t2 iconfont icon-you"></div>
			<div class="item price" v-text="`价格：${price}元`"></div>
			<div class="item yhq">优惠券已减<span class="red">{{yhq}}</span>元</div>
		</div>
		<div class="btn" @click="gotoDatuan">我要打团</div>

		<van-picker
			show-toolbar
			title="选择副本"
			:columns="FubenSelectList"
			@cancel="FubenSelectionIsShow = false"
			@confirm="onFubenConfirm"
			@change="onFubenChange"
			class="picker"
			v-show="FubenSelectionIsShow"
		/>

		<van-picker
			show-toolbar
			title="选择角色"
			:columns="JueseSelectList"
			@cancel="JueseSelectionIsShow = false"
			@confirm="onJueseConfirm"
			@change="onJueseChange"
			class="picker"
			v-show="JueseSelectionIsShow"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Settlement',
		data() {
			return {
				fuben: '',
				FubenSelectList: [],
				FubenSelectionIsShow: false,
				FubenSelectionId: 0,
				juese: '',
				JueseSelectList: [],
				JueseSelectionIsShow: false,
				price: 0,
				yhq: 0,
			}
		},
		created() {
			let self = this;
			new Promise((resolve, reject)=>{
				this.Axios.get('/api/v1/dungeon/').then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err)
				})
			}).then(res=>{
				if (res.data._status == 0) {
					res.data.objects.forEach(data=>{
						let ls = {
							master_num: data.master_num,
							text: data.name,
							price: data.price,
							resource_uri: data.resource_uri,
							rookie_num: data.rookie_num
						}
						self.FubenSelectList.push(ls)
					})
					self.fuben = self.FubenSelectList[0].text
					self.price = self.FubenSelectList[0].price
				}
			}).catch(err=>{
				console.log(err)
			})
			this.QueryLanding(self, (err, res)=>{
                if (!err) {
                	self.$store.state.user.isLogin = true;
                    if (self.$store.state.user.isLogin == true) {
                        this.getRoleInfo(self, (err, res)=>{
                        	res.forEach(item=>{
	                        	let data = {
	                        		career : "子职业2" careerUri : "/api/v1/game_career/86b87359-6991-4b48-b76b-597daeff0ac2/" img : "" roleName : "0991故事与你" roleUri : "/api/v1/role/6ac01a26-b047-454f-83a5-6aa2b9cd3e83/" serverName : "朝阳区" serverUri : "/api/v1/game_server/bf5e5ddf-7566-4786-99f6-9ee41324b203/" 	                        	}
                        	})
                            self.JueseSelectList.push(data)
                        })
                    } else {
                        Toast('您还未登陆，无法获取角色信息！')
                    }
                }
            })
		},
		methods: {
			onFubenConfirm(val, index) {
				this.FubenSelectionIsShow = false;
				this.fuben = this.FubenSelection[index].text;
				this.price = this.FubenSelectList[index].price - this.yhq
			},
			onFubenChange(picker, value, index) {
				this.FubenSelection = value.text
				this.FubenSelectionId = index
				console.log('val: ', val)
		    },
			onJueseConfirm(val, index) {
				this.JueseSelectionIsShow = false;
				// this.juese = this.jueseSelection[index];
			},
			onJueseChange(picker, value, index) {
				this.jueseSelection = value.text
				this.jueseSelectionId = index
		    },
		    gotoDatuan () {
		    	if (this.juese == '') {
		    		this.$toast('请先选择角色');
		    		return
		    	}
		    	this.$dialog.confirm({
				  title: '标题',
				  message: '弹窗内容'
				}).then(() => {
				  this.$router.push({name: 'createTeam'})
				}).catch(() => {
				  // on cancel
				});
		    }
		},
		watch: {

		}
	}
</script>

<style scoped>
	#Settlement {
		position: relative;
		width: 80%;
		/*height: 150px;*/
		background-color: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #DDDDDD;
		margin: 40px auto;
		padding: 10px;
	}
	.logo {
		position: absolute;
		top: -25px;
		left: 50%;
		margin-left: -35px;
		height: 32px;
		width: 70px;

	}
	.logo > img {
		width: 100%;
	}
	.settlement-content {
		display: grid;
		grid-template-columns: 80px auto 30px;
		grid-template-rows: 50px 50px 50px 20px;
		padding: 20px 20px;
	}
	.item {
		grid-column-start: 1;
    	grid-column-end: 4;
    	text-align: center;
	}
	.price {
		padding: 10px 0;
		line-height: 30px;
		font-size: 1rem;
		color: #000000;
	}
	.yhq {
		line-height: 20px;
		font-size: 0.6rem;
		color: #DDDDDD;
	}
	.red {
		color: #FF0036;
	}
	.text {
		line-height: 50px;
		border-bottom: 1px solid #AAAAAA;
	}
	.t2 {
		text-align: right;
		color: #AAAAAA;
		font-size: 0.9rem;
	}
	.t2::before{
		font-size: 0.75rem;
	}
	.btn {
		position: absolute;
		bottom: -20px;
		left: 50%;
		margin-left: -25%;
		width: 50%;
		height: 40px;
		line-height: 40px;
		color: #FFFFFF;
		text-align: center;
		background-color: #FFC401;
		border-radius: 20px;
	}
	.btn::selection {
		background-color: none;
	}
	.picker {
		position: fixed;
		width: 100vw;
		margin: 0;
		left: 0;
		bottom: 50px;
		z-index: 10;
	}
</style>
