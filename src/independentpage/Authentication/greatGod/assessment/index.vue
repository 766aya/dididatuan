<template>
    <div id="assessment">
        <div class="content">
            <div class="item" v-for="(item, index) in subject" :key="index">
                <p class="title" v-text="index+1+'. '+item.title"></p>
                <p class="answer" :class="{'selection': subject[index].pd == 1, 'error': subject[index].pd === true}" @click="select(index, 0)" v-text="`A: ${item.answerA}`"></p>
                <p class="answer" :class="{'selection': subject[index].pd == 2, 'error': !subject[index].pd === true}" @click="select(index, 1)" v-text="`B: ${item.answerB}`"></p>
            </div>
        </div>
        <div class="btn" @click="submit">提交答案</div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: 'assessment',
        data() {
            return {
                subject: this.$store.state.auth.godQuestionBank,
                answerList: []
            }
        },
        created() {
            
        },
        watch: {
            answerList(val) {
                console.log(val)
            }
        },
        methods: {
            submit() {
                let self = this;
                new Promise((reslove, reject)=>{
                    self.subject.forEach((item, index) => {
                        if (item.pd == 3) {
                            reject('你还有题目没做哦！'+index)
                        }
                    });
                    reslove()
                }).then(res=>{
                    let arr = []
                    self.subject.forEach((item, index) => {
                        if ((item.pd-1) != item.trueAnswer) {
                            if (self.subject[index].trueAnswer == 0) {
                                self.$set(self.subject[index], 'pd', false)
                                console.log('0', self.subject[index])
                            } else {
                                self.$set(self.subject[index], 'pd', true)
                                console.log('1', self.subject[index])
                            }
                            arr.push(false)
                        } else {
                            arr.push(true)
                        }
                    });
                    return arr
                }).then(res=>{
                    let pd = true;
                    res.forEach(item=>{
                        if (item == true && pd == true) {
                            pd = true
                        } else {
                            pd = false
                        }
                    })
                    if (pd == true) {
                        return {state: true}
                    } else {
                        return {state: false, msg: '还有题目没有答对哦！'}
                    }
                }).then(res=>{
                    if (res.state) {
                        Toast.success('恭喜你，完成本次认证')
                    } else {
                        Toast.fail(res.msg)
                    }
                }).catch(err=>{
                    Toast.fail(err)
                })
            },
            select(index,val) {
                this.$set(this.subject[index], 'pd', val+1)
            }
        }
    }
</script>

<style scoped>
    .content {
        display: grid;
    }
    .item {
        padding: 10px 20px;
        margin: 10px 0px;
        background: #FFFFFF;
    }
    .title {
        font-size: 0.9rem;
        padding-bottom: 5px;
    }
    .answer {
        padding-left: 10px;
        line-height: 25px;
        font-size: 0.85rem;
    }
    .selection {
        color: #007ACC;
    }
    .error {
        color: #FF0036;
    }
    .btn {
        width: 100vw;
        height: 60px;
        font-size: 1.25rem;
        color: #FFFFFF;
        background: #FF6600;
        text-align: center;
        line-height: 60px;
    }
</style>
