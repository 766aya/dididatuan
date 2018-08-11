<template>
	<div id="TransactionRecord">
		<div class="item" v-for="(item, index) in TransactData" :key="index">
			<div class="lside">
				<div class="title" v-text="item.title"></div>
				<div class="date" v-text="createdTimer(item.date)"></div>
			</div>
			<div v-text="item.price" class="price"></div>	
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TransactionRecord',
		data() {
			return {
				TransactData: [
					{
						price: '1.00',
						type: 'wechat',
						title: '支付打团',
						date: 1533952251426
					}, {
						price: '1.00',
						type: 'wechat',
						title: '退款',
						date: 1533952351426
					}, {
						price: '100',
						type: 'alipay',
						title: '测试数据',
						date: 1533962351426
					}
				]
			}
		},
		created() {
			
		},
		methods: {
			createdTimer(date) {
				let timer = new Date(date);
				let year = timer.getFullYear()
				let mon = timer.getMonth()
				let dd = timer.getDay()
				let hh = timer.getHours()
				let mm = timer.getMinutes()
				let ss = timer.getSeconds()
				return `${year}-${mon}-${dd} ${hh}:${mm}:${ss}`
			}
		}
	}
</script>

<style scoped>
	#TransactionRecord {
		display: grid;
		grid-auto-rows: 50px;
	}
	.item {
		display: grid;
		grid-template-columns: auto auto;
		background: #FFFFFF;
		border-bottom: 1px #EEEEEE solid;
	}
	.price {
		line-height: 50px;
		text-align: right;
		padding-right: 5px;
		font-size: 14px;
	}
	.lside {
		display: grid;
		grid-template-rows: 50%;
	}
	.title {
		font-size: 14px;
		line-height: 25px;
		padding-left: 10px;
	}
	.date {
		font-size: 12px;
		line-height: 25px;
		padding-left: 10px;
		color: #5D5D5D;
	}
</style>
