/*
  简单文件写入
  fs.writeFile(file, data[, options], callback)
  fs.writeFileSync(file, data[, options])
    options 选项，一般是一个对象{encoding:"utf8",mode:0o666,flag:"w"}
    这里flag设为"w"的话默认是覆盖原文件的内容
*/

// 引入fs模块
var fs = require("fs");
// writeFile这里无需打开关闭文件
fs.writeFile("hello3.txt","这是通过writeFile写入的内容",{flag:"w"},function(err){
    if(!err){
        console.log("写入成功");
    }else{
        console.log(err);
    }
})