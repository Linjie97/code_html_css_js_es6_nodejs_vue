//引入 fs 模块
const fs = require("fs");

// //回调地狱：容易重名
// fs.readFile('./为学.md',(err,data1)=>{
//     fs.readFile('./插秧诗.md',(err,data2)=>{
//         fs.readFile('./观书有感.md',(err,data3)=>{
//             let result = data1 + '\r\n'+data2 +'\r\n'+ data3;
//             console.log(result);
//         });
//     });
// });

//使用promise实现
const p =new Promise((resolve,reject)=>{
    fs.readFile('./为学.md',(err,data)=>{
        resolve(data);
    });
});
p.then(value=>{
    return new Promise((resolve,reject)=>{
    fs.readFile('./插秧诗.md',(err,data)=>{
        resolve([value,data]);
    });
  });
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('../观书有感.md',(err,data)=>{
            //压入
            value.push(data);
            resolve(value)
        });
      });
}).then(value=>{
    console.log(`${value}`);
})