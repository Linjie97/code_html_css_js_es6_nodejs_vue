//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// // 第一个方法
// //创建组件
// // Demo是VueComponent，需要new一个vc对象，在非单文件组件中有
// const Demo = Vue.extend({});
// const d = new Demo();
// //在Vue.prototype上添加数据
// // VueComponent.prototype.__proto__ === Vue.prototype
// Vue.prototype.x=d;
// // 将x作为中间商实现兄弟组件间通信

//创建vm
new Vue({
    el:'#app',
    render:h => h(App),
    beforeCreate(){
        // 第二个方法，安装全局事件总线，一般用$bus代替x
        // 有点奇怪，将实例对象放回自己的原型对象中，反正是为了组件都可以访问
        Vue.prototype.$bus=this;
    }
})