<template>
	<div id="myWallet">
		<div class="content">
			<div class="coin-item">
				<div class="title">滴滴币<span class="iconfont icon-yiwen title icon" @click="msg('滴滴币只能用于支付，不可提现!')"></span></div>
				<div class="num" v-text="didicoin"></div>
			</div>
			<div></div>
			<div class="coin-item">
				<div class="title">团币<span class="iconfont icon-yiwen title icon" @click="msg('大神收益将存入团币中，达到一定金额后可以提现')"></span></div>
				<div class="num" v-text="shellcoin">0</div>
			</div>
			<div class="put-forward iconfont icon-tixian" @click="putForward">提现</div>
			<div class="transaction-record" @click="transactionRecord">交易记录</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	export default {
		name: 'myWallet',
		data() {
			return {
				didicoin: 0,
				shellcoin: this.$store.state.user.userInfo.money/100,
			}
		},
		methods: {
			putForward() {
				this.$router.push({name: 'PutForward', query: {title: '提现'}})
			},
			transactionRecord() {
				this.$router.push({name: 'TransactionRecord', query: {title: '交易记录'}})
			},
			msg(val) {
				Toast(val);
			}
		}
	}
</script>

<style scoped>
	.content {
		display: grid;
		grid-template-rows:150px 10px 150px auto auto;
	}
	.coin-item {
		display: grid;
		grid-template-rows: 30px 80px;
		width: calc(100vw - 40px);
		padding: 20px;
		background-color: #FEC300
	}
	.title {
		font-size: 1rem;
		line-height: 30px;
		font-weight: 700;
		color: #FFFFFF;
	}
	.icon {
		margin-left: 5px;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.8)
	}
	.num {
		font-size: 30px;
		line-height: 80px;
		color: #FFFFFF;
	}
	.put-forward {
		background: #ffffff;
		line-height: 50px;
		font-size: 0.9rem;
		padding: 0px 15px;
		border-bottom: 1px solid #eeeeee;
	}
	.put-forward::before {
		margin-right: 5px;
	}
	.transaction-record {
		background: #FFFFFF;
		text-align: center;
		padding: 15px 0;
		font-size: 0.9rem;
	}
</style>
