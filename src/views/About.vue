<template>
  <div class="about">
      {{weaterStatus}}
      about
      {{messageStoreContent}}
  </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'

export default {
  created() {
    console.log('this。weaterStatus', this.weaterStatus);
    this.mesAction("ppp")
    console.log('this.messageStoreContent', this.messageStoreContent);
  },
  computed: {
    ...mapState({messageStoreContent: state => state.messageStore.content}),
    // ...mapState({messageStoreContent: state => state})

    ...mapGetters('messageStore', {weaterStatus: 'status'})    // 使用了模块命名空间，防止getters中的status冲突
    // ...mapGetters('messageStore'，['status'])
  },
  methods: {
    ...mapActions('messageStore',['mesAction'])
  }

}
</script>

<style lang="scss" scoped>
@import '../scss/common.scss';
  .about{
    font-size: 20 * $px;
  }
</style>