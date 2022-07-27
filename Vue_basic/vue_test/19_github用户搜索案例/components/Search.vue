<template>
   <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
      return {
        keyWord:'',
      }
    },
    methods:{
      searchUsers(){
        // 请求前更新List的数据
        this.$bus.$emit('updataListData',{isFirst:false,isLoading:true,errorMsg:'',users:[]});
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            // 请求成功后更新List的数据
            console.log('请求成功了',response.data);
            this.$bus.$emit('updataListData',{isLoading:false,errorMsg:'',users:response.data.items});
          },
          error => {
            // 请求失败后更新List的数据
            console.log('请求失败了',error.message);
            this.$bus.$emit('updataListData',{isLoading:false,errorMsg:error.message,users:[]});
          },
        )
      }
    }
}
</script>

<style>

</style>