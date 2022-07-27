<template>
  <div>
    <h2>当前求和为:{{ $store.state.sum }}</h2>
    <h3>当前求和放大10倍为:{{ $store.getters.bigSum}}</h3>
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
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>