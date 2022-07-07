<template>
    <div>
        模块A的首页
        <div @click="to1">
            去1
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
      return {}
  },
      created() {
         axios.get(`http://39.96.2.155/api/my-airport/airport/allDomesticAirportList`).then(data => {
                console.log('this.imgData', data);
            })
    },
  mounted() {
      console.log(this.$router.getRoutes())
  },
  methods: {
      to1() {
         this.$router.push('/Ahome1') 
      }
  }
}
</script>

