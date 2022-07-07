<template>
    <div>
        模块A的首页
        <div @click="to1">
            去1
        </div>
    </div>
</template>

<script>

<<<<<<< HEAD
import axios from 'axios'
=======

>>>>>>> 7f2acc5a652bceb8edfa085b01260aa958403cdb
export default {
  data() {
      return {}
  },
<<<<<<< HEAD
      created() {
         axios.get(`http://39.96.2.155/api/my-airport/airport/allDomesticAirportList`).then(data => {
                console.log('this.imgData', data);
            })
    },
=======
>>>>>>> 7f2acc5a652bceb8edfa085b01260aa958403cdb
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

