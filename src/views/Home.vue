<template>
  <div class="home">
      <!-- <div>hello {{user.name}}</div> -->
      <div>home</div>
      <div class="scroll-box">
          <div class="img" v-for="item in imgData" :key="item.id">
              <div class="imgId">{{item.id}}</div>
              <img v-if="item.img" :src="item.img" alt="">
              <div v-else class="bottom">{{item}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import {throttle} from "../utils/throttle"
export default {
    data() {
        return {
            user: null,
            currentPage: 1, //当前页
            pageSize: 4,   //每页获取多少条
            imgData: [],  // 展示的数据
        }
    },
    created() {
        this.$api.search_user_h5({user:123, _page: 2, _limit: 3}).then(e=>{
            console.log('e', e);
        }).catch(err=>{
            console.log('err', err);
        })

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
            // this.onPullDownRefresh();
            _this.onPullDownRefresh();
            }
            if (scrollTop + windowHeight == scrollHeight) {
            console.log("到底")
            // this.onReachBottom();
            _this.onReachBottom();
            }
        };

        // window.onscroll = throttle(scrollFn, 20, _this)
        window.onscroll = scrollFn
    },
    mounted() {
        this.load(this.currentPage, this.pageSize)
    },
    methods: {
        // 请求数据
        load(currentPage, pageSize) {
            axios.get(`http://localhost:8889/fruits?_page=${currentPage}&_limit=${pageSize}`).then(e => {
                // console.log('e', e.data);
                let data = e.data.length ? e.data : ['到底了']


                this.imgData = this.imgData.concat(data)
                console.log('this.imgData', this.imgData);
            })
        },
        // 请求上一页数据
        onPullDownRefresh() {
            console.log('请求上一页')
        },
        // 请求下一页数据
        onReachBottom() {
            // 到底了就不再发送请求了
            if(this.imgData[this.imgData.length-1] === '到底了') return false;
            
            console.log('请求下一页')
            this.currentPage +=1
            this.load(this.currentPage, this.pageSize)
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
    .img{
        position: relative;
        img{
            height:300px;
            opacity: .1;
        }
        .imgId{
            position: absolute;
            left:20px;
            top:20px;
        }
        .bottom{
            text-align: center;
        }
    }
</style>