<template>
    <div id="identitySelection">
        <van-popup v-model="show" position="bottom" :overlay="false">
            <van-picker :columns="columns" @change="onChange" show-toolbar title="选择身份" @confirm="ShowOut" @cancel="ShowOut" />
        </van-popup>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Popup, Toast, Picker } from 'vant';

    Vue.use(Picker);
    Vue.use(Popup);
    export default {
        name: 'identitySelection',
        data () {
            return {
                columns: [],
            }
        },
        props: {
            AuthType: {
                type: Number,
                default: 0
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            AuthType(newValue) {
                if (this.AuthType == 0) {
                    this.columns = ['老板']
                }else if(this.AuthType == 1) {
                    this.columns = ['老板', '大神']
                }else if(this.AuthType == 2) {
                    this.columns = ['老板', '大神', '团长']
                }
            }
        },
        created() {
            if (this.AuthType == 0) {
                this.columns = ['老板']
            }else if(this.AuthType == 1) {
                this.columns = ['老板', '大神']
            }else if(this.AuthType == 2) {
                this.columns = ['老板', '大神', '团长']
            }
        },
        mounted() {
            if (this.AuthType === 0) {
                this.columns = ['老板']
            }else if(this.AuthType === 1) {
                this.columns = ['老板', '大神']
            }else if(this.AuthType === 2) {
                this.columns = ['老板', '大神', '团长']
            }
        },
        methods: {
            onChange(picker, value, index) {
                this.$emit('onchange', {picker, value, index})
            },
            ShowOut() {
                this.$emit('close', '')
            }
        }
    }
</script>

<style scoped>

</style>
