// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
        },
        // // 加一个给数组兜底的，不然浏览器会出现warn
        // {
        //     path:'/',
        //     component:About,
        // }
    ]
})