//1.引入 fs 模块
const fs = require('fs');

// //2.调用方法读取文件
// fs.readFile('./为学.md',(err,data) => {
//     //如果失败，则抛出错误
//     if(err) throw err;
//     //如果没有错误，则输出内容
//     console.log(data.toString());
// });

// fs.open('./为学.md','r+',function(err,fd){
//     if(err){
//         return console.log(err);
//     }
//     console.log("文件打开成功");
// });

// //3.使用promise封装
// const p = new Promise(function(resolve,reject){
//     fs.readFile("./为学.md",(err,data) => {
//         //如果失败
//         if(err) reject(err);
//         //如果成功
//         resolve(data);
//     })
// });
// p.then(function(value){
//     console.log(value.toString());
// },function(reason){
//     console.error(reason);
// });
