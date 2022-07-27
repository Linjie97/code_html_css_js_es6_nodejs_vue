// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        // 将判断逻辑写在actions中，别写在mutations
        jiaOdd(context, value) {
            // console.log(context);//context对象中含有commit，dispatch，state等属性
            if (context.state.sum % 2) {
                context.commit('JIA', value);
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value);
            }, 500);
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,//当前的和
        school: 'SZU',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            // 假装这是个逻辑很复杂的代码
            return state.sum * 10
        }
    },
}
export default countOptions