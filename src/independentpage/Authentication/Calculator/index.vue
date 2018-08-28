<template>
    <div id="Calculator">
        <div class="item">
            <div class="lside">副本</div>
            <div class="rside" @click="isPicker=true;chosen='fuben'">{{info.fuben.name}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">跨区</div>
            <div class="rside" @click="isPicker=true;chosen='kuaqu'">{{info.kuaqu.name}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">职责</div>
            <div class="rside" @click="isPicker=true;chosen='zhize'">{{info.zhize.name}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">C位总数</div>
            <div class="rside" @click="isPicker=true;chosen='cshu'">{{info.cshu.name}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">老板总数</div>
            <div class="rside" @click="isPicker=true;chosen='boss'">{{info.boss.name}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">身份</div>
            <div class="rside" @click="isPicker=true;chosen='shenfen'">{{info.shenfen.name}}<span class="text iconfont icon-you"></span></div>
        </div>
        <div class="item">
            <div class="lside">订单评价</div>
            <div class="rside" @click="isPicker=true;chosen='pinjia'">{{info.pinjia.name}}<span class="text iconfont icon-you"></span></div>
        </div>

        <div class="offer">
            <div class="price" v-show="error">
                <h2>个人所得</h2>
                <h3>总收益 {{price.allPrice}}</h3>
                <p>基础收益 {{price.basePrice}}</p>
                <p>好评奖励 {{price.reward}}</p>
                <p>好评奖励订单完成后48小时内发放</p>
            </div>
            <div class="tips" v-show="!error">
                {{errText}}
            </div>
        </div>

        <van-picker
            show-toolbar
            title="选择角色"
            :columns="selectList"
            @cancel="isPicker=false;chosen='pinjia'"
            @confirm="onConfirm"
            class="picker"
            v-show="isPicker"
        />
    </div>
</template>

<script>
    export default {
        name: 'Calculator',
        data() {
            return {
                allSelectList: {
                    fuben: [{text: '副本1'}, {text: '副本2'}]
                    ,kuaqu: [{text: '跨区1'}, {text: '跨区2'}]
                    ,zhize: [{text: '职责1'}, {text: '职责2'}]
                    ,cshu: [{text: '0', value: 0}, {text: '1', value: 1}, {text: '2', value: 2}, {text: '3', value: 3}, {text: '4', value: 4}]
                    ,boss: [{text: '0', value: 0}, {text: '1', value: 1}, {text: '2', value: 2}, {text: '3', value: 3}, {text: '4', value: 4}, {text: '5', value: 5}, {text: '6', value: 6}]
                    ,shenfen: [{text: '团长'}, {text: '大神'}]
                    ,pinjia: [{text: '4.0及以下'}, {text: '4.1'}, {text: '4.2'}, {text: '4.3'}, {text: '4.4'}, {text: '4.5'}, {text: '4.6'}, {text: '4.7'}, {text: '4.8'}, {text: '4.9'}, {text: '5'}]
                },
                info: {
                    fuben: {name: '', value: ''}
                    ,kuaqu: {name: '', value: ''}
                    ,zhize: {name: '', value: ''}
                    ,cshu: {name: '', value: ''}
                    ,boss: {name: '', value: ''}
                    ,shenfen: {name: '', value: ''}
                    ,pinjia: {name: '', value: ''}
                },
                isPicker: false,
                selectList: [],
                chosen: '',
                error: true,
                errText: '',
                price: {
                    allPrice: 10,
                    basePrice: 8,
                    reward: 2
                }
            }
        },
        methods: {
            onConfirm (val, index) {
                let self = this
                this.info[this.chosen].name = val.text
                this.info[this.chosen].value = val.value
                this.isPicker = false
                if (self.chosen == 'cshu' || self.chosen == 'boss') {
                    if ((self.info.cshu.value + self.info.boss.value) > 8) {
                        self.errText = '队伍总人数应小于8人'
                        self.error = false
                    } else {
                        self.error = true
                    }
                }
                this.chosen = ''
            }
        },
        watch: {
            chosen (newVal) {
                if (newVal == '') {
                    return
                }
                this.selectList = this.allSelectList[newVal]
            }
        },
        created () {
            let self = this
            for (let t in self.info) {
                self.info[t].name = self.allSelectList[t][0].text
                self.info[t].value = self.allSelectList[t][0].value
            }
        }
    }
</script>

<style scoped>
    #Calculator {
        height: calc(100vh - 96px);
        background-color: #fff;
        display: grid;
        grid-auto-rows: 50px;
        padding-bottom: 50px;
    }
    .item {
        display: grid;
        grid-template-columns: auto auto;
        background-color: #fff;
        border-bottom: 1px solid #F5F5F5;
        padding: 0 15px;
        font-size: 0.85rem;
    }
    .lside {
        line-height: 50px;
    }
    .rside {
        line-height: 50px;
        text-align: right;
        color: #5D5D5D;
        font-size: 0.85rem;
    }
    .picker {
        position: fixed;
        width: 100vw;
        margin: 0;
        left: 0;
        bottom: 0px;
        z-index: 10;
    }
    .offer {
        position: fixed;
        width: 100vw;
        margin: 0;
        left: 0;
        bottom: 0px;
        height: 160px;
        background-color: #fff;
    }
    .price {
        padding: 25px 15px;
        line-height: 26px;
    }
    .price h2 {
        color: #f67a1c;
        font-size: 1rem;
    }
    .price h3 {
        font-size: 1rem;
        color: #f67a1c;
        font-weight: 700;
        text-align: center;
    }
    .price p {
        font-size: 0.85rem;
        text-align: center;
    }
    .tips {
        color: #f00;
        font-size: 1rem;
        line-height: 160px;
        text-align: center;
    }
</style>
