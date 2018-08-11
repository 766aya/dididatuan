<template>
	<div id="addRole">
		<div class="content">
			<div class="item-box">
				<div class="title">角色名</div>
				<div style="text-align: right;">
					<input type="text" class="input" placeholder="请输入" v-model="formData.name">
				</div>
			</div>
			<div class="select-box" @click="isServerShow=true">
				<div class="title">服务器</div>
				<div class="text" v-text="serverName"></div>
				<div class="icon iconfont icon-you"></div>
			</div>
			<div class="select-box" @click="isJobShow=true">
				<div class="title">职业</div>
				<div class="text" v-text="jobName"></div>
				<div class="icon iconfont icon-you"></div>
			</div>
		</div>
		<div class="btn" @click="newRole" :class="{'btn-false': disable==true, 'btn-true': disable==false}">
			新建角色
		</div>

		<van-popup v-model="isServerShow" position="bottom">
			<van-picker show-toolbar :columns="serverColumns" @confirm="onServerConfirm" @change="onServerChange" @cancel="isServerShow=false" :loading="loading" />
		</van-popup>

		<van-popup v-model="isJobShow" position="bottom">
			<van-picker show-toolbar :columns="jobColumns" @confirm="onJobConfirm" @change="onJobChange" @cancel="isServerShow=false" :loading="loading" />
		</van-popup>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Toast } from 'vant';
	import { Picker } from 'vant';
	Vue.use(Picker);

	export default {
		name: 'addRole',
		data() {
			return {
				server: {},
				serverName: '',
				serversInfo: {},
				job: {},
				jobName: '',
				jobInfo: {},
				disable: true,
				loading: true,
				isServerShow: false,
				isJobShow: false,
				serverColumns: [],
				jobColumns: [],
				formData: {
					name: '',
					server: '',
					career: ''
				}
			}
		},
		created() {
			let self = this;
			self.getServers.getServers(self, (err, servers)=>{
				self.serverInfo = this.$store.state.serverAndJobs.serverInfo
				self.server = servers;
				self.$store.commit('getServers', servers)
				self.loading = false;
				self.serverColumns = [{
					values: Object.keys(servers),
					className: 'column1'
				}, {
					values: servers[Object.keys(servers)[0]],
					className: 'column2',
					defaultIndex: 0
				}]
				self.serverName = servers[Object.keys(servers)[0]][0]
				console.log("serverInfo: ", self.serverInfo)
				self.formData.server = self.serverInfo[0].children[0].resource_uri
			})
			self.getServers.getJobs(self, (err, jobs)=>{
				self.jobInfo = this.$store.state.serverAndJobs.jobInfo
				self.job = jobs;
				self.$store.commit('getServers', jobs)
				self.loading = false;
				self.jobColumns = [{
					values: Object.keys(jobs),
					className: 'column1'
				}, {
					values: jobs[Object.keys(jobs)[0]],
					className: 'column2',
					defaultIndex: 0
				}]
				self.jobName = jobs[Object.keys(jobs)[0]][0]
				self.formData.career = self.jobInfo[0].children[0].resource_uri
			})
		},
		methods: {
			onServerChange(picker, values) {
				picker.setColumnValues(1, this.server[values[0]]);
			},
			onServerConfirm(value, index) {
				let self = this
				let serversInfo = this.serversInfo
				let serversUri = ''
				let parentUri = serversInfo[index[0]]
				if (parentUri.children.length > 0) {
					serversUri = serversInfo[index[0]].children[index[1]].resource_uri
					self.serverName = serversInfo[index[0]].children[index[1]].name
				} else {
					serversUri = parentUri.resource_uri
					self.serverName = parentUri.name
				}
				self.isServerShow = false
				this.formData.server = serversUri
			},
			onJobChange (picker, values) {
				picker.setColumnValues(1, this.job[values[0]]);
			},
			onJobConfirm (value, index) {
				let self = this
				let jobInfo = this.jobInfo
				let jobUri = ''
				let parentJob = jobInfo[index[0]]
				if (parentJob.children.length > 0) {
					jobUri = jobInfo[index[0]].children[index[1]].resource_uri
					self.jobName = jobInfo[index[0]].children[index[1]].name
				} else {
					jobUri = parentJob.resource_uri
					self.jobName = parentJob.name
				}
				self.isJobShow = false
				this.formData.career = jobUri
			},
			newRole () {
				
			}
		},
		watch: {
			formData: {
				handler (newVal) {
					this.disable = newVal.name ? false : true
				},
            	deep: true
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
