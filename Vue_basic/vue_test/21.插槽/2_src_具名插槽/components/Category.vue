<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑等组件的使用者进行填充） -->
    <slot name="center">我是默认值,当使用者没有传递具体结构时出现1</slot> 
    <slot name="footer">我是默认值,当使用者没有传递具体结构时出现2</slot> 
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
};
</script>

<style>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
  text-align: center;
  background-color: orange;
}
</style>