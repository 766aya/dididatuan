<template>
    <div id="matchTeam">
        <div class="head">
            <div class="title">
                编号
                副本名称-人物名称
            </div>
            <div class="button">
                重新组队
            </div>
        </div>

        <div class="member">
            <!-- 人员组成 -->
            <div class="item-default" v-for="(item, index) in roleList" :key="index">
                <div class="box">
                    <img :src="defaultImg">
                </div>
                <div class="text" v-text="item.roleName"></div>
            </div>
        </div>

        <div class="content">
            <p class="team-number">
                当前等待团队数
            </p>
            
            计数器

            不要气馁，老板正在路上
            已等待时间
            36:27
        </div>
    </div>
</template>

<script>
    var intervalTime;
    export default {
        name: 'match-team',
        data() {
            return {
                roleList: [{id: 1, roleName: 'a'}, {id: 2, roleName: 'b'}]
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>

<style scoped>
.head {
    display: flex;
}
.title {
    width: 60%;
}
.button {
    width: 40%;
}
.content {
    background-color: #fff;
}
.team-number {
    padding: 20px 0;
    text-align: center;
}
</style>
