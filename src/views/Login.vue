<template>
    <div class="login">
        <div @click="$router.push('A')">1111</div>
        <div @click="aaa">2222</div>
        <!-- <iframe src="https://wtest.133.cn/hangban/partner/citsgbt/vue/checkin/start?token=cacfe32d8fc94c06b324ff8309f427b6" frameborder="0" width="1000px" height="650px"></iframe> -->
        <div class="input-container">
            <input-row class="input-item"      
                v-for="(item, index) in loginList"
                :key="item.key"
                :inputItemData="item"
                :inputItemIndex="index"
                :inputListData="loginList"
                :ref="item.key"
                @changeform="changeform"
                @inputform="inputform"
            ></input-row>
        </div>
        <div @tap="finish" class="a-btn btn-finish" :class="isFinish?(GetIsShowErrMsg()?'bubbly-button unDisabled':'unDisabled'):'disabled'">登录</div>
    </div>
</template>

<script>
// 引入表单组模板组件
import inputRow from '@/lib/input/componment/input-row.vue'
// 引入表单组数据
import {loginList} from '@/lib/input/inputList'

import axios from 'axios'

export default {
    components:{
        inputRow,
    },
    data() {
        return {
            isFinish:false,  // 按钮是否可点击
            loginList,       // 把数据挂载到组件上
            userInfo: {
                username: 'admin',
                password: ''
            }
        }
    },
    create() {
         axios.get(`http://39.96.2.155/api/my-airport/airport/allDomesticAirportList`).then(data => {
        


              
                console.log('this.imgData', data);
            })
    },
    methods: {
        aaa() {
            window.location.href = 'https://wtest.133.cn/hangban/partner/fbt/vue/checkin/start?token=e3839347-9985-417a-bc9e-aced4bdab801'
        },
        // input校验按钮
        inputform() {
            
        },
        // bulr校验正则
        changeform(item, listIndex) {
            this.loginList.splice(listIndex, 1, item)
            this.checkBtn()
            
            // 存储设置的密码
            // valueKey==='password'&& (this.userInfo.password = value)
            // valueKey==='user'&& (this.userInfo.username = value)

            // // 校验按钮状态
            // this.isFinish = this.loginList.every(item => item.module)

        },
        checkBtn() {
            // 校验按钮状态
            this.isFinish = this.loginList.every(item => item.module)
        },
        GetIsShowErrMsg() {
            // 只要有一个错误提示显示了就不通过
            return this.loginList.some(item => item.isShowMsg)
        },
        finish() {
            alert("tap点击了")
            // 聚焦到正则失败的input框
            let itemShowMsg = this.loginList.find(i => {return i.isShowMsg})
            itemShowMsg && this.$refs[itemShowMsg.key][0].$refs['inputRef'].focus()
            // 按钮可点击并且没有错误校验提示才能去请求
            this.isFinish && !this.GetIsShowErrMsg() && this.registerFinishReq()
        },
        // 请求登录接口
        registerFinishReq() {
            console.log('登录信息', this.userInfo)
            this.$router.push({path:'/home'})
            // if(this.userInfo.username==='admin' && this.userInfo.password==='admin123456'){
            //     this.$message({
            //         content:'恭喜老铁！登录成功',
            //         type: 'success'
            //     })
            //     this.$router.push({path:'/home'})
            // }else{
            //     this.$message({
            //         content:'登录失败，账号或密码有误',
            //         type: 'error'
            //     })
            // }
        }
    }
 
    
    
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";
.login{
    padding: 45% 30*$px;
    .input-container{
        // margin-top: 50*$px;
        padding-bottom: 9*$px;
        // .input-item{
        //     padding-bottom: 4*$px;
        // }
    }
    .btn-finish{
        // border-radius: 24*$px;
        margin-left: 0;
        &.disabled{
            background: rgba(24,144,255,0.50);
        }
        &.unDisabled{
            background-color:  #1890ff;;
        }
        &.bubbly-button{
            transition: transform ease-in 0.1s;
            &:active{
                background-color: #FF3636;
                transform: scale(0.9);
            }
        }
        
    }
}
</style>