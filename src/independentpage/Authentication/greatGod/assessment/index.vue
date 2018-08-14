<template>
    <div id="assessment">
        <div class="content">
            <div v-for="(item, index) in subject" :key="index">
                <p v-text="index+1+'. '+item.title"></p>
                <span v-text="item.answerA"></span>
                <span v-text="item.answerB"></span>
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
