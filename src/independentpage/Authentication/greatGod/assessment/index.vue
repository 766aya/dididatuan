<template>
    <div id="assessment">
        <div class="content">
            <div class="item" v-for="(item, index) in subject" :key="index">
                <p class="title" v-text="index+1+'. '+item.title"></p>
                <p class="answer" v-text="`A:${item.answerA}`"></p>
                <p class="answer" v-text="`B:${item.answerB}`"></p>
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
                subject: this.$store.state.auth.godQuestionBank
            }
        },
        created() {
            
        },
        methods: {
            submit() {
                Toast('click Submit!')
            }
        }
    }
</script>

<style scoped>
    #assessment {
        
    }
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
        line-height: 20px;
        font-size: 0.85rem;
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
