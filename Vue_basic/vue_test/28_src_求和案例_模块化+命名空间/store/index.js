// 该文件用于创建Vuex中最核心的store

// 引入vue
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 使用vuex 在实例化store之前必须先执行Vue.use(Vuex);
Vue.use(Vuex);


import countOptions from './count';
import personOptions from './person';
// 创建并导出store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
});


