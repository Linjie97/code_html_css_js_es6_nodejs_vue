// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';

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
            children:[
                {
                    // 子路由路径不需要加/
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail,
                        }
                    ]
                }
            ]
        },
    ]
});

