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
        <!-- include中写的是组件名！组件名！不写默认全部子组件都保持 -->
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
