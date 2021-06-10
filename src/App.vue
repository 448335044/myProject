
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to vvv'
    }
  },
  created() {
    console.log(333)
  },
 
}
</script>
