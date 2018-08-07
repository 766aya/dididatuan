<template>
	<div id="myWallet">
		<van-nav-bar
            :title="routeInfo.title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
		<div class="content">
			<div class="coin-item">
				<div class="title">滴滴币<span class="iconfont icon-yiwen title icon"></span></div>
				<div class="num">0</div>
			</div>
			<div></div>
			<div class="coin-item">
				<div class="title">贝壳<span class="iconfont icon-yiwen title icon"></span></div>
				<div class="num">0</div>
			</div>
			<div class="put-forward iconfont icon-tixian" @click="puForward">提现</div>
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
				routeInfo: this.$route.query,
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push({name: 'User', query: {bar: '2'} })
			},
			puForward() {
				Toast('点击进入提现页面');
			},
			transactionRecord() {
				Toast('点击查看交易记录');
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
