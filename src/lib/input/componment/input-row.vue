<template>
<div class="input-box">
    <p v-show="inputItem.isShowTitle" class="input-title">{{inputItem.inputTitle}}</p>
    <div class="input-row">
        <input 
        ref="inputRef"
        :type="currentInputType" 
        :placeholder="inputItem.inputPlaceholder ? inputItem.inputPlaceholder : '请输入'+inputItem.inputTitle" 
        v-model.trim="inputItem.module"
        @blur='onBlur'
        @input="onInput"
        >
        <!-- <span v-show="inputItem.key==='user'&&inputItem.module==='admin'" class="default-user">(默认用户名)</span> -->
        <img v-show="isShowIco"  @click="onClearInput(inputItem.key)" class="input-icon" :src="currentInputIco">
    </div>
    <p class="err-msg-hidden" :class="inputItem.isShowMsg ? 'err-msg' : ''">{{inputItem.regMsg}}</p>
</div>
</template>

<script>

export default {
    props: {
        // 当前表单项
        inputItemData: {
            type: Object,
            require: true
        },
        // 当前表单项索引
        inputItemIndex: {
            type: Number,
            require: true
        },
        // 整个list表单
        inputListData: {
            type: Array
        },

    },
    data() {
        return {
            inputItem: null, //接收父组件传过来的当前表单项数据
            inputList: null, //接收父组件传过来的list表单项数据
            isShowIco: false,  //是否显示右侧小图标

            inputIco: {        //动态加载图标
                clear: require('../img/clearInput.png'),
                eye: require('../img/eye.png'),
                eyeOff: require('../img/eye-off.png'),
            },
            currentInputIco: require('../img/clearInput.png'),
            currentInputType: this.inputItemData.type,  //当前显示的input类型(点击眼睛会改变)
        }
    },
    created() {
        // 拷贝父组件传过来的当前表单项数据
        this.inputItem = JSON.parse(JSON.stringify(this.inputItemData))
        // 拷贝父组件传过来的list表单项数据
        this.inputList = JSON.parse(JSON.stringify(this.inputListData))
        this.checkIco()
    },
    methods: {
        onInput() {
            this.checkIco()
            this.errMsg()
        },
        onBlur() {
            this.inputList[this.inputItemIndex].module = this.inputItem.module
            this.$emit("changeform", this.inputItem, this.inputItemIndex)

            //     // fix ios 软键盘收回后，页面整体仍然向上移位
            //     setTimeout(() => { 
            //         if(document.activeElement.tagName.toLowerCase() == 'body'){
            //         document.body.scrollTop = this.beforePosition;
            //         }
            //     },200); 
        },
        // 检查图标是否显示
        checkIco() {
            this.isShowIco = this.inputItem.module==='' ? false : true
            // 对应显示
            // 原始input类型
            if(this.inputItem.type==='password'){
                // 手动改变的input类型
                if(this.currentInputType === 'password'){
                    this.currentInputIco = this.inputIco.eye
                }else{
                    this.currentInputIco = this.inputIco.eyeOff
                } 
            }else{
                this.currentInputIco = this.inputIco.clear
            }
        },
        // 检查检验提示
        errMsg() {
            // 确认密码表单校验    
            if(this.inputItem.bindPassKey) {
                this.inputListData.forEach((item) => {
                    // 聚焦到密码表单
                    if(item.key === this.inputItem.bindPassKey) {
                        // 如果当前module和密码module不相等，两次密码不一致， 显示校验提示 
                        this.inputItem.isShowMsg = this.inputItem.module !== item.module
                    }
                })
            }else{
                // 普通表单校验    
                this.inputItem.isShowMsg = !RegExp(this.inputItem.reg).test(this.inputItem.module)
            }
        },
        // 手动点击右侧小图标，小图标切换
        onClearInput() {
            // 如果当前显示的是密码框，点击变为text框
            if(this.currentInputType==='password'){
                this.currentInputType='text'
                this.currentInputIco = this.inputIco.eyeOff
            // 如果当前显示的是text框，有可能是text也有可能是密码框（需要当前type和原始type一起判断）
            } else if(this.currentInputType==='text' && this.inputItem.type==='password'){
                this.currentInputType='password'
                this.currentInputIco = this.inputIco.eye
            // 都是text框，点击的是清空图标
            } else {
                this.inputItem.module = ''
                // 点击的清空也要校验按钮状态
                this.onInput()
                this.isShowIco = false
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";
.input-box{
    .input-title{
        font-size: 12*$px;
        color:#999999;
    }
    .input-row{
        margin-top: 10*$px;
        padding-bottom: 8*$px;
        border-bottom: 1*$px solid #EEEEEE;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC, PingFangSC-Regular;
        input{
            flex: 1;
            padding:0;
            font-size: 14*$px;
            color: #333333;
            &::-webkit-input-placeholder{
                color:#cccccc;
            }

        }
        .default-user{
            font-size: 12*$px;
            color:#cccccc;
            position: absolute;
            left: 80*$px;
        }
        .input-icon{
            width:15*$px;
            height:15*$px;
            padding-left: 10*$px;
        }
    }
    .err-msg-hidden{
        height:15*$px;
        opacity: 0;
        &.err-msg{
            font-size:11*$px;
            color:#FF3636;
            opacity: 1;
            transition: opacity 200ms;
        }
    }
    
}
</style>