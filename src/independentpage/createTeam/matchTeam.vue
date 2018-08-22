<template>
    <div id="matchTeam">
        <div class="content">
            <div class="time">{{matchDate}}</div>
            <h2 class="title">滴滴打团正在为您寻找队伍{{spot}}</h2>
            <div class="list">
                <div class="item">角色: {{this.$route.query.roleName}}</div>
                <div class="item">大区: {{this.$route.query.serverName}}</div>
                <div class="item">副本: {{this.$route.query.fubenName}}</div>
            </div>
            <van-button size="large" class="cancal" @click="cancal">取消订单</van-button>
        </div>
    </div>
</template>

<script>
    var intervalTime;
    export default {
        name: 'match-team',
        data() {
            return {
                matchDate: '00:00',
                spot: '.',
                minute: 0,
                second: 0,
                match_older: this.$route.query.match_older
            }
        },
        created() {
            this.timing()
            console.log("this.$router.query: ", this.$route.query)
        },
        methods: {
            timing () {
                let self = this
                intervalTime = setInterval(function () {
                    let second = self.second
                    let minute = self.minute
                    self.spot.length == 3 ? self.spot = '.' : self.spot += '.'
                    ++self.second
                    if (second>59) {
                        self.second = 0
                        ++self.minute
                    }
                    if (second<10) {
                        second = '0' + second
                    } else {
                        second = '' + second
                    }
                    if (minute<10) {
                        minute = '0' + minute
                    } else {
                        minute = '' + minute
                    }
                    self.matchDate = minute + ':' + second
                    self.stateQuery()
                    // console.log("matchDate: ", self.matchDate)
                }, 1000)
            },
            cancal () {
                this.$dialog.confirm({
                  title: '确定取消订单？',
                  message: '马上匹配到大神了，真的要取消订单吗？（打团费用将原路返回）'
                }).then(() => {
                  this.Axios.post('/api/v1/room/close/')
                  this.$router.push({name: 'DaTuan', query: {bar: '1'}})
                }).catch(() => {
                  // on cancel
                });
            },
            stateQuery() {
                let self = this
                this.Axios.post('/api/v1/room/match/', {
                    match_older: self.match_older
                }).then(res=>{
                    console.log(res)
                    // if (res.data._status == 0) {
                    //     self.$router.push({name: ''})
                    // } else {

                    // }
                }).catch(err=>{

                })
            }
        },
        destroyed () {
            clearInterval(intervalTime)
        }
    }
</script>

<style scoped>
    #matchTeam {
        position: absolute;
        width: 100vw;
        top: 50%;
        margin-top: calc(-50% + 50px);
    }
    .content {
        background-color: #fff;
        position: relative;
        padding: 1px 0 0;
    }
    .time {
        background-color: #ffc401;
        color: #fff;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        line-height: 100px;
        text-align: center;
        font-size: 26px;
        position: absolute;
        top: -50px;
        left: calc(50% - 50px);;
        box-shadow: 0px 0px 15px #DDDDDD;
    }
    .title {
        margin-top: 70px;
        text-align: center;
        font-weight: 700;
    }
    .list {
        margin: 20px 0;
    }
    .list .item{
        width: 40%;
        margin: 0 auto;
        text-align: left;
        line-height: 25px;
    }
    .cancal {
        background-color: #ffc401;
        color: #fff;
    }
</style>
