  <<template>
     <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
          <button @click="back">后退</button>
          <button @click="forward">前进</button>
          <button @click="testGo">测试一下go</button>
        </div>
     </div>
  </template>
  
  <script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    // go需要用一个数字，正数表示往前走几步，负数表示往前走几步
    testGo(){
      this.$router.go(-2);
    }
  },
};
</script>
