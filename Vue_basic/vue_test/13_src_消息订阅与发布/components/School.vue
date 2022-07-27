<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
          name:'SZU',
          address:'深圳',
        }
    },
    mounted(){
      // 事件总线
      // console.log('School',this);
      // // 将hello事件绑定到$bus中
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是School组件,收到了数据',data);
      // })
       this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        //  console.log(this);
        //正常函数形式下的this是undefined,因为这里是调用第三方库
         //箭头函数下的this是vc
        console.log('有人发布了hello消息,hello消息的回调函数执行了',msgName,data);
      })
    },
    beforeCreate(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  padding: 5px;
}
</style>
