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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // increment() {
    //   this.$store.dispatch("jia", this.n);
    // },
    // decrement() {
    //   this.$store.dispatch("jian", this.n);
    // },
    // 进一步简化，跳过actions步骤
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },

    // incrementOdd(){
    //   if(this.$store.state.sum % 2){
    //     this.$store.dispatch('jia', this.n)
    //   }
    // },
    // 把判断放在别的地方
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },

    // incrementWait() {
    //   setTimeout(() => {
    //     this.$store.dispatch("jia", this.n);
    //   }, 500);
    // },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  computed: {

    //这里将模板语法改成he,xuexiao,xueke 
    // // 靠程序员自己去写计算属性
    // he() {
    //   return this.$store.state.sum;
    // },
    // xuexiao() {
    //   return this.$store.state.school;
    // },
    // xueke() {
    //   return this.$store.state.subject;
    // },

    // // 使用mapState生成计算属性,从state中读取数据（对象写法）
    // // 扩展运算符将对象中的属性罗列出来赋给computed
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    // 使用mapState生成计算属性,从state中读取数据（数组写法）
    // 这里需要方法和属性同名，但是这里属性需要加''不然会被认为是变量，所以写成数组形式
    ...mapState(['sum','school','subject']),

   /***********************************************************************************/
    // 使用mapGetters生成计算属性,从getters中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),
    // 使用mapGetters生成计算属性,从getters中读取数据（数组写法）
    ...mapGetters(['bigSum']),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>