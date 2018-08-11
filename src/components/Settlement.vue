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
				FubenSelectList: [
					{
						master_num: 1,
						text: '安图恩-团队',
						price: 5,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '卢克-团队',
						price: 6,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '超时空',
						price: 10,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '安图恩-每日',
						price: 3,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '卢克-每日',
						price: 4,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '卢克-团队(独享专车)',
						price: 12,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '安图恩-每日(独享专车)',
						price: 5,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '卢克-每日(独享专车)',
						price: 7,
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}
				],
				FubenSelectionIsShow: false,
				FubenSelectionId: 0,
				juese: '',
				JueseSelectList: [
					{
						master_num: 1,
						text: '1号角色',
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}, {
						master_num: 1,
						text: '2号角色',
						resource_uri: '/api/v1/dungeon/56a38dce-6924-4a98-8128-06b7bba55e07/',
						rookie_num: 18
					}
				],
				JueseSelectionIsShow: false,
				price: 126.50,
				yhq: 1,
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
				// console.log(res.data.objects)
				// self.FubenSelectList = res.data.objects
				self.fuben = self.FubenSelectList[0].text
				self.price = self.FubenSelectList[0].price - self.yhq
			}).catch(err=>{
				console.log(err)
			})
		},
		methods: {
			onFubenConfirm() {
				this.FubenSelectionIsShow = false;
				this.fuben = this.FubenSelection;
				this.price = this.FubenSelectList[this.FubenSelectionId].price - this.yhq
			},
			onFubenChange(picker, value, index) {
				this.FubenSelection = value.text
				this.FubenSelectionId = index
		    },
			onJueseConfirm() {
				this.JueseSelectionIsShow = false;
				this.juese = this.jueseSelection;
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
				  // on confirm
				  this.$router.push({name: 'createTeam'})
				}).catch(() => {
				  // on cancel
				});
		    }
		},
		watch: {
			FubenSelection(val) {
				console.log(val)
			}
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
