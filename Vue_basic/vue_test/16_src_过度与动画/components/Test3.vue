<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
        <!-- transition这个标签解析后不存在html中 -->
        <!-- appear一上来就有效果 -->
      <h1 v-show="isShow" key="2">SZU</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: "Test2",
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

</style>