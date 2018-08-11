<template>
	<div id="myRoleItem">
		
	</div>
</template>

<script>
	export default {
		name: 'myRoleItem',
		data() {
			return {
				roleList: [{
					header_img: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg',
					roleName: '11111'
				}, {
					header_img: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg',
					roleName: '22222'
				}, {
					header_img: 'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg',
					roleName: '33333'
				}]
			}
		},
		created() {
			let self = this;

			this.getRoleInfo(self, (err, res)=>{
				console.log(res)
			})
		}
	}
</script>

<style sco>
	
</style>
