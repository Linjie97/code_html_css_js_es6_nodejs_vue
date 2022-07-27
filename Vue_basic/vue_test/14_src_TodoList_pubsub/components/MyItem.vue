<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不推荐，因为会修该props传过来的值，
      只是vue没有监测到对象中的todo的done值的改变因此没有报错，但原则上props只读 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelelte(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: "MyItem",
  //声明接收todo
  props: ["todo"],
  //   mounted() {
  //       console.log(this.todo);
  //   },
  methods: {
     // 勾选或取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo',id);
    },
     // 删除
    handleDelelte(id){
      if(confirm('确定删除吗？')){
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id);
        pubsub.publish('deleteTodo',id)
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button{
  display: block;
}
</style>