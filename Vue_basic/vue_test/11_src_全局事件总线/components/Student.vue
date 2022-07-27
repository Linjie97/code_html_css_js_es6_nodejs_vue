<template>
  <div class="student">
      <h2>学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
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
    methods:{
      sendStudentName(){
        this.$bus.$emit('hello',this.name)
      }
    },
    // 因为组件销毁后$bus这个傀儡还在，需要去销毁对应绑定的事件
    //（）内要记得写绑定的内容
    beforeDestroy(){
      this.$bus.$off('hello')
    }
}
</script>


<!-- 不写lang="less"默认就是css -->
<style lang="less" scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>