<template>
  <div>
    <h1>{{msg}}</h1>
      <h2>学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <!-- <h2>学生年龄:{{age+1}}</h2> -->
      <h2>学生年龄:{{myAge}}</h2>
      <button @click="updataAge">修改年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
          msg:'作为对比项',
          myAge:this.age,
          // 系统先读props的数据age（优先级更高），然后myAge再读取
          // 从props中传过来的数据不可修改，因此只能使用这样的方式进行修改
        }
    },
    methods:{
      updataAge(){
        this.myAge++;
      }
    },
    props:['name','age','sex']//顺序不论,简单声明接收

    //接收的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String,
    // }

   //接收的同时对数据进行类型限制+默认值指定+必要性的限制
    // props:{
    //   name:{
    //     type:String,//name的类型是字符串
    //     required:true,//名字是必要的
    //   },
    //   sex:{
    //     type:String,
    //     default:'female',//默认值
    //   },
    //   age:{ 
    //     type:Number,
    //     required:true,
    //   }
    // }
}
</script>

<style>
  .school{
    background-color: gray;
  }
</style>