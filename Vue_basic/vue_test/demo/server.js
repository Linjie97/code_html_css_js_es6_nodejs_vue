const express = require('express');
// 引入中间件解决history模式下的404问题
const history = require('connect-history-api-fallback');

const app = express();
// 需要在静态资源前面引用
app.use(history());
app.use(express.static(__dirname+'/static'))

// 配置后端路由
app.get('/person',(req,res)=>{
    // req=request,res=response
    res.send({
        name:'tom',
        age:18,
    })
})

// 端口监听
app.listen(5005,(err)=>{
    if(!err) console.log('服务器启动成功了！');
})