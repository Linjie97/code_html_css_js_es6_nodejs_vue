<template>
    <div class="todo-footer" v-show="total">
      <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
      </label>
      <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
      </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
        total(){
            return this.todos.length
        },
        doneTotal(){
            // es6的reduce方法 pre初始为0，todo就是每一次遍历的todo项
            // 每次遍历都会调用函数，将上一次的return的值作为下一次的pre
            // 最后一次的返回值是reduce函数的返回值
           return this.todos.reduce((pre,todo)=>pre+(todo.done?1:0), 0)
        },
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                this.checkAllTodo(value)
            }
        }
    },
    methods:{
        checkAll(e){
            this.checkAllTodo(e.target.checked)
        },
        clearAll(){
            this.clearAllTodo()
        }
    }
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }  
</style>