<template>
  <div class="about">
    <input type="text" value="输入框">
    <div class="a-btn" @click="showMsg">弹个小窗窗</div>
      {{weaterStatus}}
      {{messageStoreContent}}
  </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'
import axios from "axios"
export default {
  created() {
    // console.log('this。weaterStatus', this.weaterStatus);
    this.mesAction("ppp")
    // console.log('this.messageStoreContent', this.messageStoreContent);

    // 调用本地express mysql 接口
    axios.get(`http://127.0.0.1:3050/api/getuser`).then(e => {
        // console.log('e', e);
    })
  },
  computed: {
    ...mapState({messageStoreContent: state => state.messageStore.content}),
    // ...mapState({messageStoreContent: state => state})

    ...mapGetters('messageStore', {weaterStatus: 'status'})    // 使用了模块命名空间，防止getters中的status冲突
    // ...mapGetters('messageStore'，['status'])
  },
  methods: {
    ...mapActions('messageStore',['mesAction']),
    showMsg() {
      this.$message({
        type: 'info',
        content: '这是小窗窗',
        duration: 1000,
        onClose() {
          console.log('一秒即关闭');
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

  .about{
    font-size: 20 * $px;
  }
</style>