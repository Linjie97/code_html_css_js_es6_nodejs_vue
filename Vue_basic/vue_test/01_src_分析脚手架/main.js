/*
 该文件是整个项目的入口文件
*/ 

//引入vue
// import Vue from 'vue/dist/vue.js'//这才是完整版的vue的路径
import Vue from 'vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象vm
new Vue({
  // 将App组件放入容器 
  render: h => h(App),
  // 上面引入的vue是一个残缺版的vue.runtime.esm.js文件夹，不能直接写template模板，会报错
  // render是一个渲染函数
}).$mount('#app')