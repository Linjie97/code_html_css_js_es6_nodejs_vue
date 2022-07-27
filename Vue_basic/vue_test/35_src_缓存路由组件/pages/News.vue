<template>
  <ul>
    <li>news01 <input type="text" /></li>
    <li>news02 <input type="text" /></li>
    <li>news03 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log("News组件即将被销毁了");
  },
};
</script>

<style>
</style>