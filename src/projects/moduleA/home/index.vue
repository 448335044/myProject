<template>
    <div>
        模块A的首页
        <div @click="to1">
            去1
        </div>
    </div>
</template>

<script>


export default {
  data() {
      return {}
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

