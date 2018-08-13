<template>
    <div id="matchTeam">
        <div class="content">
            <div class="time">{{matchDate}}</div>
            <h2 class="title">正在为您寻找队伍{{spot}}</h2>
            <div class="list">
                <div class="item">角色</div>
                <div class="item">大区</div>
                <div class="item">副本</div>
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
                second: 0
            }
        },
        created() {
            this.timing()
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
                    console.log("matchDate: ", self.matchDate)
                }, 1000)
            },
            cancal () {
                this.$dialog.confirm({
                  title: '确定取消订单？',
                  message: '马上匹配到大神了，真的要取消订单吗？（打团费用将原路返回）'
                }).then(() => {
                  // on confirm
                  this.$router.push({name: 'DaTuan', query: {bar: '1'}})
                }).catch(() => {
                  // on cancel
                });
            }
        },
        destroyed () {
            clearInterval(intervalTime)
        }
    }
</script>

<style scoped>
.content {
    margin: 100px 0;
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
}
.title {
    margin-top: 100px;
}
.cancal {
    background-color: #ffc401;
    color: #fff;
}
</style>
