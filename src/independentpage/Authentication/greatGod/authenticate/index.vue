<template>
    <div id="authenticate">
        <van-cell-group>
            <van-cell title="选择角色" :value="roleName" is-link />
            <van-cell title="认证类型" :value="authType" is-link />
        </van-cell-group>
        <div class="title-bar">装备认证</div>
        <van-uploader :max-size="307200" @oversize="IsMaxed" :after-read="id_card_front" multiple class="img-box">
            <van-icon v-if="!id_card_front_info.name" name="photograph" />
            <img v-else :src="id_card_front_info.file" alt="">
        </van-uploader>
        <div class="title-bar">实力认证</div>
        <van-uploader :max-size="307200" @oversize="IsMaxed" :after-read="id_card_back" multiple class="img-box">
            <van-icon v-if="!id_card_back_info.name" name="photograph" />
            <img v-else :src="id_card_back_info.file" alt="">
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
                disabled: true,
                id_card_back_info: {
                    name: null,
                    file: null
                },
                id_card_front_info: {
                    name: null,
                    file: null
                }
            }
        },
        watch: {
            'id_card_back_info.name' (newval) {
                if (newval === true && this.id_card_front_info.name === true) {
                    this.disabled = false
                }
            },
            'id_card_front_info.name' (newval) {
                if (newval === true && this.id_card_back_info.name === true) {
                    this.disabled = false
                }
            }
        },
        methods: {
            onRead(file) {
                console.log(file)
            },
            submit() {
                Toast('Click Me!')
                this.disabled = !this.disabled
            },
            IsMaxed () {
                Toast('文件需小于300kb')
            },
            id_card_front(data) {
                Vue.set(this.id_card_front_info, 'name', data.file.name)
                Vue.set(this.id_card_front_info, 'file', data.content)
                Vue.set(this.id_card_front_info, 'content_type', data.file.type)
            },
            id_card_back(data) {
                Vue.set(this.id_card_back_info, 'name', data.file.name)
                Vue.set(this.id_card_back_info, 'file', data.content)
                Vue.set(this.id_card_back_info, 'content_type', data.file.type)
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
        font-size: 0.85rem;
    }
    .submit {
        position: absolute;
        bottom: 0;
    }
    .img-box {
        display: block;
        text-align: center;
        width: 270px;
        height: 152px;
        border-radius: 15px;
        overflow: hidden;
        margin: 10px auto 0px auto;
        border: 1px dotted #333333;
    }
    .img-box i, .img-box img {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .img-box i::before {
        line-height: 152px;
        font-size: 30px;
    }
</style>
