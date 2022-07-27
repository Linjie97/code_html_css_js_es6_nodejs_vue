<template>
    <div class="row">
      <!-- 展示用户列表 -->
      <div
        v-show="info.users.length"
        class="card"
        v-for="user in info.users"
        :key="user.login"
      >
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <!-- 展示欢迎词 -->
      <h2 v-show="info.isFirst">请输入用户名搜索</h2>
      <!-- 展示加载中 -->
      <h2 v-show="info.isLoading">加载中...</h2>
      <!-- 展示错误信息 -->
      <h2 v-show="info.errorMsg">{{ info.errorMsg }}</h2>
    </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      // 界面有四个状态
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updataListData", (dataObj) => {
      console.log(dataObj);
      // console.log('我是List组件,我收到了数据:',users);
      // 用扩展运算符合并数组
      this.info = {...this.info,...dataObj};
    });
  },
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>