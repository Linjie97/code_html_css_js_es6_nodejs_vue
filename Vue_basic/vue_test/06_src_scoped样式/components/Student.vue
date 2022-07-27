<template>
  <div class="demo">
      <h2>学生姓名:{{name}}</h2>
      <h2 class="qwe">学生性别:{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
          name:'zlj',
          sex:'female'
        }
    },
}
</script>
<!-- scoped限制样式在该区域内生效-->
<!-- <style scoped>
.demo{
  background-color: orange;
}
</style> -->

<!-- 不写lang="less"默认就是css -->
<style lang="less" scoped>
  .demo{
    background-color: pink;
    .qwe{
      font-size: 40px;
    }
  }
</style>