<template>
    <div id="authenticate">
        <van-cell-group>
            <van-cell title="选择角色" @click="()=>{this.disabled = !this.disabled}" :value="roleName" is-link />
            <van-cell title="认证类型" :value="authType" is-link />
        </van-cell-group>
        <div class="title-bar">身份证正面照片</div>
        <van-uploader class="uploader" :after-read="onRead" accept="image/gif, image/jpeg" multiple>
            <van-icon name="photograph" />
        </van-uploader>
        <div class="title-bar">身份证反面照片</div>
        <van-uploader class="uploader" :after-read="onRead" accept="image/gif, image/jpeg" multiple>
            <van-icon name="photograph" />
        </van-uploader>
        <van-button @click="submit" :disabled="disabled" class="submit" block size="large" type="primary">开始认证</van-button>
    </div>
</template>

<script>
    import { Cell, CellGroup } from 'vant';
    import { Uploader } from 'vant';
    import { Popup } from 'vant';
    import { Toast } from 'vant';
    import Vue from 'vue';
    Vue.use(Popup);

    export default {
        name: 'authenticate',
        data() {
            return {
                roleName: 'Yuner',
                authType: '超时空C位',
                disabled: true,            }
        },
        watch: {
            // onRead(newVal) {
            //     console.log(newVal)
            // },
        },
        methods: {
            onRead(file) {
                console.log(file)
            },
            submit() {
                Toast('Click Me!')
                this.disabled = !this.disabled
            }
        }
    }
</script>

<style scoped>
    .uploader {
        display: grid;
        width: 80vw;
        height: 150px;
        border-radius: 10px;
        border: 1px dotted #333333;
        align-items: center;
        margin: 0 auto;
        background-color: #FFFFFF;
    }
    .uploader * {
        margin: 0 auto;
    }
    .uploader i {
        font-size: 60px;
    }
    .title-bar {
        background-color: none;
        padding: 15px 0;
        padding-left: 15px;
    }
    .submit {
        position: absolute;
        bottom: 0;
    }
</style>
