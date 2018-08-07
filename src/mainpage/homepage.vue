<template>
	<div id="home">
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '@/components/footer'

	export default {
		name: 'HomePage',
		data() {
			return {
				yzm: '',
			}
		},
		components: {
			Footer
		},
		created() {
			let self = this;
		}
	}
	
</script>

<style>

</style>
