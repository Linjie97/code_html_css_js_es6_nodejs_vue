<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
        <!-- transition这个标签解析后不存在html中 -->
        <!-- appear一上来就有效果 -->
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h1 {
  background-color: orange;
}

/* 用动画实现 */
/* 如果上面transition标签加了name属性，下面的v要改成对应的name */
.v-enter-active{
    animation:atTest 1s;
}
.v-leave-active{
    animation:atTest 1s reverse;
}
@keyframes atTest {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>