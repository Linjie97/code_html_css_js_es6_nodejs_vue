// 该文件用于创建Vuex中最核心的store

// 引入vue
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 使用vuex 在实例化store之前必须先执行Vue.use(Vuex);
Vue.use(Vuex);

// 准备Actions--用于响应组件中的动作
const actions = {

    // 可以进一步简化，因为这里不需要进行逻辑判断，只是操作数据，直接进入mutations即可
    // jia(context,value){
    //     // 默认小写是actions中的，大写是mutations中的
    //     context.commit('JIA',value);
    // },
    // jian(context,value){
    //     context.commit('JIAN',value);
    // },

    // 将判断逻辑写在actions中，别写在mutations
    jiaOdd(context,value){
        console.log(context);//context对象中含有commit，dispatch，state等属性
        if(context.state.sum % 2){
            context.commit('JIA',value);
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value);
        }, 500);
    },

}
// 准备mutations--用于操作数据（state），连接着开发者工具
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    }
}
// 准备state--用于存储数据
const state = {
    sum:0,//当前的和
    school:'SZU',
    subject:'前端',
}

// 准备getters--用于将state中的数据进行加工(跟vue中的computed属性类似)
const getters = {
    bigSum(state){
        // 假装这是个逻辑很复杂的代码
        return state.sum*10
    }
}


// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});


