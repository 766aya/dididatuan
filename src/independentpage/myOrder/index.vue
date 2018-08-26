<template>
	<div id="order-content">
		<div class="main">
			<div class="orderList" v-for="(item, index) in orderList" :key="index">
				<div class="order-id">订单编号：{{ item.orderId }}</div>
				<div class="order-main">
					<div class="role-info">
						<div class="roleName" v-text="`${item.roleName}—${item.serverName}`"></div>
						<div class="fubenName" v-text="item.fubenName"></div>
					</div>
					<div class="order-type" :class="{'error': item.orderStatus === 0, 'warning': item.orderStatus===1 || item.orderStatus===2, 'success': item.orderStatus===3}" v-text="orderStatusComputed(item.orderStatus)"></div>
				</div>
				<div class="order-time" v-text="orderTimeComputed(item.orderEndTime)"></div>
				<div class="role-type tips" v-text="roldTypeComputed(item.roleType)"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'order-content',
		data() {
			return {
				routeInfo: this.$route.query,
				orderList: [
					{
						orderId: '12345678912345678916',
						orderStatus: 3,
						roleType: 0,
						roleName: '一只小月虫',
						serverName: '浙江4/5区',
						fubenName: '卢克-团队',
						orderEndTime: new Date(),
						price: 1200
					},{
						orderId: '12345678912345678916',
						orderStatus: 1,
						roleType: 2,
						roleName: '一只小月虫',
						serverName: '浙江4/5区',
						fubenName: '卢克-团队',
						orderEndTime: new Date(),
						price: 1200
					},{
						orderId: '12345678912345678916',
						orderStatus: 0,
						roleType: 2,
						roleName: '一只小月虫',
						serverName: '浙江4/5区',
						fubenName: '卢克-团队',
						orderEndTime: new Date(),
						price: 1200
					},{
						orderId: '12345678912345678916',
						orderStatus: 2,
						roleType: 1,
						roleName: '一只小月虫',
						serverName: '浙江4/5区',
						fubenName: '卢克-团队',
						orderEndTime: new Date(),
						price: 1200
					},{
						orderId: '12345678912345678916',
						orderStatus: 3,
						roleType: 2,
						roleName: '一只小月虫',
						serverName: '浙江4/5区',
						fubenName: '卢克-团队',
						orderEndTime: new Date(),
						price: 1200
					},{
						orderId: '12345678912345678916',
						orderStatus: 3,
						roleType: 2,
						roleName: '一只小月虫',
						serverName: '浙江4/5区',
						fubenName: '卢克-团队',
						orderEndTime: new Date(),
						price: 1200
					}
				]
			}
		},
		created() {
			
		},
		methods: {
			onClickLeft() {
				this.$router.push({name: 'User', query: {bar: '2', type: '1'} })
			},
			getOrders () {

			},
			roldTypeComputed (val) {
				switch (val) {
					case 0:
						return '老板'
						break;
					case 1:
						return '大神'
						break;
					case 2:
						return '团长'
						break;
					default:
						return '其他'
						break;
				}
			},
			orderStatusComputed (val) {
				switch (val) {
					case 0:
						return '未完成'
						break;
					case 1:
						return '进行中'
						break;
					case 2:
						return '待评价'
						break;
					case 3:
						return '已完成'
						break;
				}
			},
			orderTimeComputed (val) {
				console.log(val)
				let year = val.getFullYear()
				let month = val.getMonth()+1
				let day = val.getDate()
				let HH = val.getHours()
				let MM = val.getMinutes()
				let SS = val.getSeconds()
				return `${year}/${month}/${day} ${HH}:${MM}:${SS}`
			}
		}
	}
</script>

<style scoped>
	.order-null {
		font-size: 20px;
		margin-top: 10px;
		text-align: center;
	}
	.orderList {
		position: relative;
		background: #FFFFFF;
		border-radius: 10px;
		padding: 10px;
		margin: 10px 15px;
	}
	.order-id {
		line-height: 1;
		font-size: 0.9rem;
		color: #5E5E5E;
		padding: 0px 10px 10px 0px;
		border-bottom: 1px solid #EEEEEE;
	}
	.order-time {
		line-height: 1;
		font-size: 0.9rem;
		color: #5E5E5E;
		padding: 10px 10px 0px 0px;
		border-top: 1px solid #EEEEEE;
	}
	.order-main {
		height: 50px;
	}
	.role-info {
		float: left;
		height: 50px;
	}
	.order-type {
		float: right;
		height: 50px;
		line-height: 50px;
	}
	.roleName {
		font-weight: 700;
		line-height: 25px;
	}
	.fubenName {
		font-size: 15px;
		line-height: 25px;
	}
	.success {
		color: #587c0c;
	}
	.error {
		color: #FF0036;
	}
	.warning {
		color: #FFCC00;
	}
	.tips {
		position: absolute;
		top: 8px;
		right: 0;
		background: #FF0036;
		color: #FFFFFF;
		font-size: 12px;
		padding: 5px 10px 5px 15px;
		border-radius: 8px 0px 0px 8px;
	}
</style>
