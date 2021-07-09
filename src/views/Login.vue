<template>
    <div class="login">
        <div class="input-container">
            <input-row class="input-item"      
                v-for="item in loginList"
                :key="item.key"
                :inputItem="item"
                :ref="item.key"
                @changeform="changeform"
                @inputform="inputform"
            ></input-row>
        </div>
        <div @click="finish" class="a-btn btn-finish" :class="isFinish?(GetIsShowErrMsg()?'bubbly-button unDisabled':'unDisabled'):'disabled'">登录</div>
    </div>
</template>

<script>
// 引入表单组模板组件
import inputRow from '@/lib/input/componment/input-row.vue'
// 引入表单组数据
import {loginList} from '@/lib/input/inputList'

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
    methods: {
        // input校验按钮
        inputform(value, valueKey) {
            // 校验按钮状态
            this.isFinish = this.loginList.every(item => item.module)
            // 如果当前项显示了正则的错误提示，没次输入都校验正则
            this.loginList.forEach((inputItem) => {
                inputItem.isShowMsg && this.changeform(value, valueKey)
            })
        },
        // bulr校验正则
        changeform(value, valueKey) {
            // 存储设置的密码
            valueKey==='password'&& (this.userInfo.password = value)
            valueKey==='user'&& (this.userInfo.username = value)

            this.loginList.forEach((inputItem) => {
                if(inputItem.key === valueKey) {
                    inputItem.module = value

                    let isRulePass = RegExp(inputItem['reg']).test(value)
                    if(valueKey === 'surePassword') {
                        // 确认密码校验
                        inputItem.isShowMsg = (value===this.userInfo.password)? false : true
                    }
                    else{
                        inputItem.isShowMsg = isRulePass ? false : true
                    }
                    
                }  
            })
            // // 校验按钮状态
            // this.isFinish = this.loginList.every(item => item.module)

        },
        GetIsShowErrMsg() {
            this.loginList.forEach((inputItem) => {
                let isRulePass = RegExp(inputItem['reg']).test(inputItem.module)
                if(inputItem.key === 'surePassword') {
                    // 确认密码校验
                    inputItem.isShowMsg = (inputItem.module===this.userInfo.password)? false : true
                }else{
                    inputItem.isShowMsg = isRulePass ? false : true
                }
            })
            // 只要有一个错误提示显示了就不通过
            return this.loginList.some(item => item.isShowMsg)
        },
        finish() {
            // 聚焦到正则失败的input框
            let itemShowMsg = this.loginList.find(i => {return i.isShowMsg})
            itemShowMsg && this.$refs[itemShowMsg.key][0].$refs['inputRef'].focus()


            // 按钮状态可点击
            // if(this.isFinish) {
            //     // 每个input正则校验都通过
            //     if(this.GetIsShowErrMsg()){
            //         this.$message({
            //             type: error,
            //             content: '输入信息有误，请检查输入信息！'
            //         })
            //         return false
            //     }
            //     this.registerFinishReq()
            // }
         
            this.isFinish && !this.GetIsShowErrMsg() && this.registerFinishReq()
        },
        // 请求登录接口
        registerFinishReq() {
            console.log('登录信息', this.userInfo)
            if(this.userInfo.username==='admin' && this.userInfo.password==='admin123456'){
                this.$message({
                    content:'恭喜老铁！登录成功',
                    type: 'success'
                })
                this.$router.push({path:'/home'})
            }else{
                this.$message({
                    content:'登录失败，账号或密码有误',
                    type: 'error'
                })
            }

            
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