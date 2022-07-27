<template>
  <div>
      <h2 @click="showName">学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
// // 局部混合
// import {mixin,mixin2} from '../mixin'
export default {
    name:'Student',
    data() {
        return {
          name:'zlj',
          sex:'female'
        }
    },
    // mixins:[mixin,mixin2]
}
</script>
