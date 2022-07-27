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
                            name:'suiyi',
                            path:'detail/:id/:title',
                            component:Detail,

                            // props的第一种写法，值为对象
                            // 该对象中的所有key-value都会以props的形式传给Detail组件
                            // 这样传的数据是死数据
                            // props:{a:1,b:'hello'}

                            // props的第二种写法，值为布尔值
                            // 若布尔值为真，就会把该路由收到的所有params参数，以props的形式传给Detail组件
                            // props:true,

                            // props的第三种写法，值为函数,$route是回调函数
                            // 用query也行，看Message.vue文件中使用的是什么参数传递
                            props($route){
                                return {id:$route.params.id,title:$route.params.title};
                            }
                            // // 可以用连续解构赋值的写法（可读性查，不推荐）
                            // props({params:{id,title}}){
                            //     return {id,title}
                            // }
                        }
                    ]
                }
            ]
        },
    ]
});

