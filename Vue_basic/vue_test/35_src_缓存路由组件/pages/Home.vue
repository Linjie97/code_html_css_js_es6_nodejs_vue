<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>

      <div>
       <!-- 缓存多个路由组件 -->
       <!-- <keep-alive include="['News','Message']"> -->

        <!-- include中写的是组件名！组件名！不写默认全部子组件都保持 -->
        <!-- 缓存一个路由组件 -->
       <keep-alive include="News">
         <router-view></router-view>
       </keep-alive>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
