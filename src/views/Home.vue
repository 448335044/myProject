<template>
  <div class="home">
      <div>hello {{user.name}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = this.$store.state.uesr
    }
}
</script>

<style lang="less" scoped>
    .home {
        font-size: 14px;

        div {
            color: #FF0000;
        }
    }

</style>