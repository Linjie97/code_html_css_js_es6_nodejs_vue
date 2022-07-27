<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <!-- todos不改是因为里面是数组而非函数，不可用自定义事件的模式，
        而在MyList中不使用是因为MyList还有子组件，方法是给MyList的子组件使用的 -->
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
//引入子组件
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: "001", title: "吃饭", done: true },
        { id: "002", title: "学习", done: true },
        { id: "003", title: "睡觉", done: false },
      ],
    };
  },
  // 数据在哪，方法就在哪
  methods: {
     //增加一个todo
      addTodo(todoObj){
          this.todos.unshift(todoObj)
      },
      // 勾选或取消勾选
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      // 删除
      deleteTodo(id){
        this.todos = this.todos.filter(todo=> todo.id !== id)
      },
      // 全选或者取消全选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done
        })
      },
      //清除所有已经完成的todo
      clearAllTodo(){
        this.todos=this.todos.filter((todo)=>{
          //函数体
          return !todo.done
        })
      }
  },
  components: { MyHeader, MyList, MyFooter },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>