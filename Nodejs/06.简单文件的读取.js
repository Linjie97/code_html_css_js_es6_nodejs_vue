/*
  简单文件读取
  fs.readFile(path[, options], callback)
   -callback回调函数,通过回调函数将读取的内容返回（err,data）
     data是buffer，可以读取txt，jpg，MP3等不同类型的文件
  fs.readFileSync(path[, options])
*/  
var fs = require("fs")
fs.readFile("hello3.txt",function(err,data){
    if(!err){
        // console.log(data.toString());
        // fs.writeFile()//可以写入到其他文件中
    }else{
        console.log(err);
    }
})