<template>
  <ul>
    <!-- <li>消息编号:{{ $route.params.id }}</li>
    <li>消息标题:{{ $route.params.title }}</li> -->
    <li>消息编号:{{ id }}</li>
    <li>消息标题:{{ title }}</li>

    <!-- <li>a:{{ a }}</li>
    <li>b:{{ b }}</li> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",

  // props:['a','b'],//第一种写法
  props: ['id', 'title'], //第二种写法，第三种写法

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>