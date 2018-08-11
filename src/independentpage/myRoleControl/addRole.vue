<template>
	<div id="addRole">
		<div class="content">
			<div class="item-box">
				<div class="title">角色名</div>
				<div style="text-align: right;">
					<input type="text" class="input" placeholder="请输入">
				</div>
			</div>
			<div class="select-box">
				<div class="title">服务器</div>
				<div class="text" v-text="'浙江4/5区'"></div>
				<div class="icon iconfont icon-you"></div>
			</div>
			<div class="select-box">
				<div class="title">职业</div>
				<div class="text" v-text="'剑神'"></div>
				<div class="icon iconfont icon-you"></div>
			</div>
		</div>
		<div class="btn" :class="{'btn-false': disable==true, 'btn-true': disable==false}">
			新建角色
		</div>
		<van-picker show-toolbar :show="isShow" :columns="columns" @confirm="onConfirm" @change="onChange" :loading="loading" />
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Toast } from 'vant';
	import { Picker } from 'vant';
	Vue.use(Picker);

	var server = {'北京区': ['朝阳区'], '天津区': []};

	export default {
		name: 'addRole',
		data() {
			return {
				disable: true,
				loading: true,
				isShow: false,
				columns: [
					{
						values: Object.keys(server),
						className: 'column1'
					},
					{
						values: server['北京区'],
						className: 'column2',
						defaultIndex: 0
					}
				]
			}
		},
		created() {
			// console.log(server)
			let self = this;
			self.getServers(self, (err, servers)=>{
				let serverArray = Object.keys(servers)
				for(let i=0; i<serverArray.length; i++) {
					Vue.set(server, serverArray[i], servers[serverArray[i]])
				}
				this.loading = false;
			})
		},
		methods: {
			onChange(picker, values) {
				picker.setColumnValues(1, server[values[0]]);
				console.log(server[values[0]])
			},
			onConfirm(value, index) {
				console.log(value, index)
			}
		}
	}
</script>

<style scoped>
	#addRole {
		/*background-color: #333333;*/
	}
	.content {
		display: grid;
		grid-template-rows: 40px 40px 40px;
	}
	.content > div {
		display: grid;
		padding-left: 10px;
		border-bottom: 1px solid #E5E5E5;
		background-color: #FFFFFF
	}
	.item-box {
		grid-template-columns: 100px auto;
		padding-right: 5px;
		line-height: 40px;
		color: #5D5D5D;
	}
	.select-box {
		grid-template-columns: 100px auto 20px;
		color: #5D5D5D;
	}
	.title {
		font-size: 0.8rem;
		line-height: 40px;
		color: #333333;
	}
	.icon {
		line-height: 40px;
	}
	.text {
		text-align: right;
		line-height: 40px;
		font-size: 0.8rem;
	}
	.input {
		display: block;
		/*border-bottom: 1px solid #E5E5E5;*/
		padding:0;
		height: 2rem;
		border: none;
		width: 100%;
		text-align: right;
		font-size: 0.8rem;
		align-items: center;
		padding: 3px 0;
		color: #5D5D5D;
	}
	.btn {
		position: absolute;
		width: 90%;
		height: 40px;
		line-height: 40px;
		border-radius: 5px;
		bottom: 20px;
		left: 50%;
		margin-left: -45%;
		text-align: center;
	}
	.btn-true {
		background-color: #FF6600;
		color: #FFFFFF;
	}
	.btn-false {
		background-color: #E0E0E0;
		color: #AAAAAA;
	}
</style>
