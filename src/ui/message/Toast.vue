<template>
  <div >
    <div class="toast" :style="bgColor" :class="{'show':visible}">{{content}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgType: {
        info: 'background: rgba(0, 0, 0, 0.8);',
        success: 'background: rgba(39, 209, 142, 0.7);',
        error: 'background: rgba(190, 53, 31, 0.6);',
      },
      type: 'info',
      content: '',
      duration: 1500, //显示时间, 毫秒。设为 0 则不会自动关闭
      visible: true,
      timer: null, //定时器
      onClose: () => {} //关闭后的回调方法
    };
  },
  computed:{
    bgColor() {
      console.log('this.bgType[this.type]', this.bgType[this.type]);
      return this.bgType[this.type]
    }
  },
  watch: {
    visible(newVal) {
      if (!newVal) {
        this.$el.parentNode.removeChild(this.$el);
        // this.$destroy()      // 利用生命钩子销毁
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (this.visible) {
          this.close();
        }
      }, this.duration);
    }
  },

  methods: {
    close() {
      //关闭事件
      this.visible = false;
      this.onClose();
    }
  }
};
</script>
<style lang="scss" scoped>
.toast {
  z-index: 9999;
  opacity: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  min-width: 30%;
  max-width: 50%;
  color: white;
  border-radius: 0.4rem;
  transition: opacity 1s;
  line-height: 1.4rem;
  font-size: 0.85rem;
  text-align: center;
}
.show {
  opacity: 1;
}
</style>
