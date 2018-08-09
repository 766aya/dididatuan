<template>
	<div id="user">
		<user-info></user-info>
		<my-role></my-role>
        <menu-list v-for="(item, index) in menuData" :key="'列表'+index" :list="item"></menu-list>
	</div>
</template>

<script>
	import userInfo from '@/components/userinfo'
	import myRole from '@/components/myRole'
    import menuList from '@/components/menuList'

	export default {
        name: 'User',
        data() {
            return {
                menuData: this.$store.state.user.menuData
            }
        },
        components: {
        	userInfo,
        	myRole,
            menuList
        },
        created() {
            
        }
	}
</script>

<style>
    #user {
        padding-bottom: 50px;
    }
</style>
