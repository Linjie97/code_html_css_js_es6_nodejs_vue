<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news01 <input type="text" /></li>
    <li>news02 <input type="text" /></li>
    <li>news03 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("News组件即将被销毁了");
  //   clearInterval(this.timer)
  // },
  // mounted(){
  //   this.timer = setInterval(() => {
  //     // console.log('@');
  //     this.opacity -= 0.01;
  //     if(this.opacity <= 0) this.opacity = 1
  //   }, 16);
  // }

  // 路由的生命周期钩子，需要被 <keep-alive>包围才有这两个
  activated() {
    console.log("News被激活了");
    this.timer = setInterval(() => {
      // console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer)
  },
};
</script>

<style>
</style>