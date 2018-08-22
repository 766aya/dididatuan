<template>
	<div id="Settlement">
		<div class="logo" @click="identitySelectionIsShow = !identitySelectionIsShow">
			<img src="/static/logo.png">
		</div>
		<div class="settlement-content">
			<div class="text t1">副本：</div>
			<div class="text t2" @click="FubenSelectionIsShow = true">{{fuben}}</div>
			<div class="text t2 iconfont icon-you"></div>
			<div class="text t1">角色：</div>
			<div class="text t2" @click="JueseSelectionIsShow=true">{{juese}}</div>
			<div class="text t2 iconfont icon-you"></div>
			<div class="item price" v-text="`价格：${price/100}元`"></div>
			<div class="item yhq">优惠券已减 <span class="red">{{yhq}}</span> 元</div>
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
		<identitySelection :show="identitySelectionIsShow" :AuthType="auth" @onchange="identitySelect" @close="identitySelectionIsShow = false"></identitySelection>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	import identitySelection from '@/components/identitySelection'
	export default {
		name: 'Settlement',
		data() {
			return {
				fuben: '',
				fubenRange: {},
				FubenSelectList: [],
				FubenSelectionIsShow: false,
				FubenSelectionId: 0,
				juese: '',
				JueseSelectList: [],
				JueseSelectionId: 0,
				JueseSelectionIsShow: false,
				price: 0,
				yhq: 0,
				auth: 0,
				identitySelectionIsShow: false,
				type: 0
			}
		},
		components: {
			identitySelection
		},
		watch: {
			fuben(newValue) {
				console.log(newValue, newValue.length)
				if (newValue.length >= 10) {
					this.fuben = this.fuben[0,10]+'...'
				} else {
					this.fuben = this.fuben
				}
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
					self.fubenRange.master_num = self.FubenSelectList[0].master_num
					self.fubenRange.rookie_num = self.FubenSelectList[0].rookie_num
					self.price = self.FubenSelectList[0].price
				}
			}).catch(err=>{
				console.log(err)
			})
			this.QueryLanding(self, (err, res)=>{
				if (res) {
					self.auth = res.type;
				}
                if (!err) {
                	self.$store.state.user.isLogin = true;
                    if (self.$store.state.user.isLogin == true) {
                        this.getRoleInfo(self, (err, res)=>{
                        	res.forEach(item=>{
								console.log(item)
	                        	let data = {
									career: item.career,
									careerUri : item.careerUri,
									img : item.img,
									text: item.roleName,
									roleUri: item.roleUri,
									serverName: item.serverName,
									serverUri : item.serverUri
								}
                            	self.JueseSelectList.push(data)
							})
							self.juese = self.JueseSelectList[0].text
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
				this.fuben = val.text;
				this.fubenRange.master_num = val.master_num
				this.fubenRange.rookie_num = val.rookie_num
				this.price = this.FubenSelectList[index].price - this.yhq
			},
			onFubenChange(picker, value, index) {
				console.log("value: ", value)
				this.fuben = value.text
				this.fubenRange.master_num = val.master_num
				this.fubenRange.rookie_num = val.rookie_num
				this.FubenSelectionId = index
		    },
			onJueseConfirm(val, index) {
				this.JueseSelectionIsShow = false;
			},
			onJueseChange(picker, value, index) {
				this.juese = value.text
				this.JueseSelectionId = index
		    },
		    gotoDatuan () {
				let self = this;
		    	if (!self.$store.state.user.isLogin) {
		    		self.$toast('您还未登陆，请先登陆账号！');
		    		return false
		    	}
		    	if (this.juese == '') {
		    		this.$toast('请先选择角色');
		    		return
				}
				console.log("self.fuben: ", self.fuben)
				Dialog.confirm({
					title: '提醒',
					message: '亲爱的用户，为了减少等待时间，请您进入游戏并买好门票。\n为您找好队伍后，若您没有做好准备，您可能会被移除出队伍。\n（打团费用原路退还）'
				}).then(() => {
					console.log(self.JueseSelectList[self.JueseSelectionId])
					self.$router.push({
						name: 'createTeam',
						query: {
							"roleName": self.juese,
							"roleUri": self.JueseSelectList[self.JueseSelectionId].roleUri,
							"fubenName": self.fuben,
							"fubenPrice": self.FubenSelectList[self.FubenSelectionId].price,
							"fubenUri": self.FubenSelectList[self.FubenSelectionId].resource_uri,
							"serverName": self.JueseSelectList[self.JueseSelectionId].serverName,
							"serverUri": self.JueseSelectList[self.JueseSelectionId].serverUri,
							"type": self.type,
							"master_num": this.fubenRange.master_num,
							"rookie_num": this.fubenRange.rookie_num
						}
					})
				}).catch(() => {
					this.$toast('你取消了操作');
				});
			},
			identitySelect(val) {
				console.log(val)
				this.type = val.index
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
		grid-template-columns: 50px auto 30px;
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
		font-size: 0.8rem;
		color: #5d5d5d;
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
