<template>
 <div class="mylist">  
  <div class="title">列表</div>
  <delete-slider  @click="toDetail" class="item" v-for="(list, index) in dataList" :key="index" @deleteLine="deleteLine(index, list.id)">
   <!-- <div class="li-img" slot="img"><img :src="list.img" alt=""></div> -->
   <h3 class="li-title" slot="title">{{list.title}}</h3>
   <p class="li-price" slot="price">{{list.price}}</p>
  </delete-slider> 
 </div>
</template>

<script>


import deleteSlider from './deleteTemp.vue'
import axios from 'axios'
export default {
 components: {
  deleteSlider
 },
 
 data () {
  return {
   dataList: [
    {
     id: 1,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: '法国专柜2019夏季新款修身显瘦气质包臀短裙镂空蕾丝性感连衣裙子',
     price: '399.00'
    },
    {
     id: 2,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: 'VERAMOON 亮片印花短袖连衣裙女夏甜美露背性感泡泡袖修身短裙',
     price: '689.00'
    },
    {
     id: 3,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: 'famous 仙气木耳边紫色小碎花短裙a字雪纺连衣裙女',
     price: '199.00'
    },
    {
     id: 4,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: '灰灰定制 2019春夏新款小香风粗花呢连衣裙女法式名媛复古短裙M家',
     price: '298.00'
    },
    {
     id: 5,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: 'famous 仙气木耳边紫色小碎花短裙a字雪纺连衣裙女',
     price: '199.00'
    },
    {
     id: 6,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: '灰灰定制 2019春夏新款小香风粗花呢连衣裙女法式名媛复古短裙M家',
     price: '298.00'
    },
    {
     id: 7,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: 'famous 仙气木耳边紫色小碎花短裙a字雪纺连衣裙女',
     price: '199.00'
    },
    {
     id: 8,
     img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
     title: '灰灰定制 2019春夏新款小香风粗花呢连衣裙女法式名媛复古短裙M家',
     price: '298.00'
    }
   ]
  }
 },
created() {
  axios.get(`http://39.96.2.155/api/my-airport/airport/allDomesticAirportList`).then(data => {
        console.log('this.imgData', data);
    })
},
 methods:{
   deleteLine (index, id){
    console.log(id);
    this.$router.push('/testSlideDeleteDetail')
    // this.dataList.splice(index, 1)
   },
   toDetail() {
     console.log(1111)
     this.$router.push('/testSlideDeleteDetail')
   }   
  }
}
</script>

<style scoped>
.mylist{
  min-height: 100vh;
  background-color: #d5d5d5;
}
.title{
  width:100%;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.item{
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.li-price{
  padding-top: 20px;
}
</style>