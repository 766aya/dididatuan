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
		components: {
			Footer
		}
	}
</script>

<style>

</style>
