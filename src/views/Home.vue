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
        console.log('module', this.$store);
        this.user = this.$store.state.userStore.uesr
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