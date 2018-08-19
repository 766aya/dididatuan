<template>
    <div>
        <van-field
            required
            v-model="inputInfo.username"
            label="手机号"
            placeholder="手机号"
        />
        <van-field
            v-model="inputInfo.phone_code"
            center
            clearable
            label="短信验证码"
            placeholder="短信验证码"
            required
        >
            <van-button slot="button" size="small" type="primary" @click="getSMS" v-text="'发送验证码'"></van-button>
        </van-field>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputInfo: {
                    username: '',
                    phone_code: '',
                }
            }
        },
        methods: {
            getSMS() {
                
            }
        }
    }
</script>

<style>

</style>

