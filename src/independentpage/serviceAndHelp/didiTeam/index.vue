<template>
    <div id="didiTeam">
        <h2 class="title">欢迎加入交流群</h2>
        <div class="list" v-for="(item, index) in list" key="index">
            {{item.title}}：{{item.number}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'didiTeam',
        data() {
            return {
                list: [{
                    title: '交流1群',
                    number: '787778909'
                }]
            }
        }
    }
</script>

<style scoped>
#didiTeam {
    margin-top: 15px;
    background-color: #fff;
    min-height: calc(100vh - 100px);
    height: 100%;
    display: grid;
    grid-auto-rows: 50px;
    padding: 15px;
}
.list {
    font-size: 0.85em;
}
</style>
