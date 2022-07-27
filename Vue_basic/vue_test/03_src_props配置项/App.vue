<template>
  <div>
      <Student name="zlj" sex="female" :age="25"></Student>
      <Student name="khj" sex="male" :age="28"></Student>
      <!-- :age="28" 给age绑定事件，需要去执行对应的age给的js语句，
      因此就能进行js运算，而不是将28传作一个字符串 -->
  </div>
</template>

<script>
 //引入子组件
  import Student from './components/Student.vue'
  export default {
      name:'App',
      components:{Student},
}
</script>