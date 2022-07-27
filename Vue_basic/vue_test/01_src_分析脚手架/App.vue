<template>
<div>
  <img src="./assets/logo.png" alt="logo">
  <SchoolInfo></SchoolInfo>
  <StudentInfo></StudentInfo>
</div>
</template>

<script>
//引入组件
import SchoolInfo from './components/SchoolInfo.vue';
import StudentInfo from './components/StudentInfo.vue';

  export default {
      name:'App',
      components:{
          SchoolInfo,
          StudentInfo,
      }
 }
</script>

<style>

</style>