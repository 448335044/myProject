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
    props: ['inputItem'],
    data() {
        return {
            isShowIco: false,  //是否显示右侧小图标

            inputIco: {        //动态加载图标
                clear: require('../img/clearInput.png'),
                eye: require('../img/eye.png'),
                eyeOff: require('../img/eye-off.png'),
            },
            currentInputIco: require('../img/clearInput.png'),

            currentInputType: this.inputItem.type  //当前显示的input类型(点击眼睛会改变)
                
            
        }
    },
    created() {
        this.checkIco()
    },
    methods: {
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

        onInput() {
            this.checkIco()
            
            this.$emit("inputform", this.inputItem.module, this.inputItem.key)
        },
        onBlur() {
            this.$emit("changeform", this.inputItem.module, this.inputItem.key)
        //     // fix ios 软键盘收回后，页面整体仍然向上移位
        //     setTimeout(() => { 
        //         if(document.activeElement.tagName.toLowerCase() == 'body'){
        //         document.body.scrollTop = this.beforePosition;
        //         }
        //     },200); 
        },

        // 手动点击右侧小图标逻辑
        onClearInput(key) {
            if(this.currentInputType==='password'){
                this.currentInputType='text'
                this.currentInputIco = this.inputIco.eyeOff
            // 当前type和原始type
            } else if(this.currentInputType==='text' && this.inputItem.type==='password'){
                this.currentInputType='password'
                this.currentInputIco = this.inputIco.eye
            } else {
                console.log('清空input');
                this.$emit("changeform", '', key)
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