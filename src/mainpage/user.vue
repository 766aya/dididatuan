<template>
	<div id="user">
		<user-info></user-info>
		<my-role></my-role>
	</div>
</template>

<script>
	import userInfo from '@/components/userinfo'
	import myRole from '@/components/myRole'

	export default {
        name: 'User',
        data() {
            return {
                
            }
        },
        components: {
        	userInfo,
        	myRole
        }
	}
</script>

<style>

</style>
