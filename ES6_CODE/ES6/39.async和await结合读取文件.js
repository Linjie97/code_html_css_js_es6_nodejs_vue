//1.引入 fs 模块
const fs = require("fs");

//读取,函数返回的都是promise对象
function readWeiXue() {
  return new Promise((resolve, reject) => {
    fs.readFile("./为学.md", (err, data) => {
        //如果失败
        if(err) reject(err);
      //如果成功
         resolve(data);
    });
  });
}

function readChaYangShi() {
    return new Promise((resolve, reject) => {
      fs.readFile("./插秧诗.md", (err, data) => {
          //如果失败
          if(err) reject(err);
        //如果成功
           resolve(data);
      });
    });
}

  function readGuanShu() {
    return new Promise((resolve, reject) => {
      fs.readFile("./观书有感.md", (err, data) => {
          //如果失败
          if(err) reject(err);
        //如果成功
           resolve(data);
      });
    });
}

//类似于同步调用，只是这个异步调用需要加await
//async和await结合，其作用更像是promise的语法糖，使其使用起来更像是同步调用方式
//声明一个async函数
async function main(){
    let weixue = await readWeiXue();
    let chayang = await readChaYangShi();
    let guanshu = await readGuanShu();

    console.log(weixue.toString());
    console.log(chayang.toString());
    console.log(guanshu.toString());
}

main();
