<template>
	<div id="myrole">
		<div class="title">
            <div class="t">我的角色</div>
            <div class="iconfont icon-you"></div>      
        </div>
        <div class="content">
            <div class="item-default">
                
            </div>
            <div class="item-default">
                
            </div>
        </div>
	</div>
</template>

<script>
	export default {
        name: 'myRole',
        data() {
            return {
                
            }
        }
	}
</script>

<style scoped>
    #myrole {
        display: grid;
        grid-template-rows: 40px 70px;
        background-color: #FFFFFF;
        margin-bottom: 10px;
    }
    .title {
        display: grid;
        grid-template-columns: auto 40px;
        line-height: 40px;
        padding-left: 15px;
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid #EEEEEE;
    }
    .title .t {
        font-weight: 700;
    }
    .item-default {
        
    }
</style>
