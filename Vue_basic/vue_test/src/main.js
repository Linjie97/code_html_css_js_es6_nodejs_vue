//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';

// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式(体积太大，达到MB，需要改成按需引入)
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
// 全局组件注册
Vue.component('el-button', Button);//Button.name设置Button标签的名字
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);

//关闭Vue的生产提示
Vue.config.productionTip = false;

// 应用ElementUI
// Vue.use(ElementUI);

//创建vm
new Vue({
    el:'#app',
    render:h => h(App),
})