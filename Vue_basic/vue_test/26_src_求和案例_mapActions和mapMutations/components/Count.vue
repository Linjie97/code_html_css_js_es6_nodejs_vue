<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <!-- v-model.number将绑定的数据转为数字，否则会是字符串 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // 程序员亲自写代码
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    // 此时需要给函数传一个参数n，将n给到按钮事件绑定上即可
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
    // 这里需要将按钮事件绑定的名字改为JIA,JIAN
    // ...mapMutations(['JIA','JIAN']),

    /*********************************************************************/
    //程序员亲自写的代码
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    // 此时需要给函数传一个参数n，将n给到按钮事件绑定上即可
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),

    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
    // 这里需要将按钮事件绑定的名字改为jiaOdd,jiaWait
    // ...mapActions(['jiaOdd','jiaWait']),
  },
  computed: {
    // // 使用mapState生成计算属性,从state中读取数据（对象写法）
    // // 扩展运算符将对象中的属性罗列出来赋给computed
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    // 使用mapState生成计算属性,从state中读取数据（数组写法）
    // 这里需要方法和属性同名，但是这里属性需要加''不然会被认为是变量，所以写成数组形式
    ...mapState(["sum", "school", "subject"]),

    /***********************************************************************************/
    // 使用mapGetters生成计算属性,从getters中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),
    // 使用mapGetters生成计算属性,从getters中读取数据（数组写法）
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>