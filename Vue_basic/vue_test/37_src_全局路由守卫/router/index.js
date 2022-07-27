// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    // 子路由路径不需要加/
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'suiyi',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },

                            // props的第一种写法，值为对象
                            // 该对象中的所有key-value都会以props的形式传给Detail组件
                            // 这样传的数据是死数据
                            // props:{a:1,b:'hello'}

                            // props的第二种写法，值为布尔值
                            // 若布尔值为真，就会把该路由收到的所有params参数，以props的形式传给Detail组件
                            // props:true,

                            // props的第三种写法，值为函数,$route是回调函数
                            // 用query也行，看Message.vue文件中使用的是什么参数传递
                            props($route) {
                                return { id: $route.params.id, title: $route.params.title };
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

// // 全局前置路由守卫——初始化的时候及每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log(to, from);
//     // if (to.path === '/home/news' || to.path === '/home/message') {
//     if (to.meta.isAuth) {//判断是否需要鉴权
//         if (localStorage.getItem('school') === 'SZU') {//权限控制的具体规则
//             next();//放行
//         } else {
//             alert('学校名不对,无查看权限!')
//         }
//     } else {
//         next();
//     }

// });

// // 全局后置路由守卫——初始化的时候及每次路由切换之后被调用
// // 只有to和from，没有next
// router.afterEach((to, from)=>{
//     // console.log('后置路由守卫',to, from);
//     document.title = to.meta.title;
// });


export default router;

