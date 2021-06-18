<template>
  <div class="home">
      <div>hello {{user.name}}</div>
      <div class="scroll-box">

      </div>
  </div>
</template>

<script>
import {throttle} from "../utils/throttle"
export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        console.log('module', this.$store);
        this.user = this.$store.state.userStore.uesr
        let _this = this;
        
        // //引用工具函数的throtle
        // let throttle = (fn, time) => {
        //     let curTime = 0
        //     return function() {
        //         let now = Date.now()
        //         // console.log(now)
        //         if(now - curTime >= time) {
        //         fn.call(_this)
        //         curTime = now
        //         }
        //     }
        // }
        
        function scrollFn () {
            console.log('this', this);
            //scrollTop是滚动条滚动时，距离顶部的距离 （滚动了多高）
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
            //windowHeight是可视区的高度 (屏幕高度)
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight; 
            //scrollHeight是滚动条的总高度 （可以滚动范围的总高度，包括溢出不可见部分）
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; 

            console.log('scrollTop', scrollTop);
            console.log('clientHeight', windowHeight);
            console.log('scrollHeight', scrollHeight);
            if (scrollTop == 0) {
            console.log("到顶")
            this.onPullDownRefresh();
            }
            if (scrollTop + windowHeight == scrollHeight) {
            console.log("到底")
            this.onReachBottom();
            }
        };

        window.onscroll = throttle(scrollFn,50, _this)
    },
    methods: {
        // 请求上一页数据
        onPullDownRefresh() {
            console.log('请求上一页')
        },
        // 请求下一页数据
        onReachBottom() {
            console.log('请求下一页')
        }

    },
    beforeDestroy() {
        window.onscroll = null;
    }
}
</script>

<style lang="less" scoped>

    .home {
        font-size: 14px;
        height:120%;
        div {
            color: #FF0000;
        }
    }

</style>