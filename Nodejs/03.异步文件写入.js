/*
   异步文件写入：要在其他文件执行后再执行异步任务
   1.打开文件
   fs.open(path[, flags[, mode]], callback)
   -异步调用方法，结果都是通过回调函数的参数返回的
   -回调函数的两个参数：
     err 错误对象，如果没有错误则为null
     fd  文件的描述符

   2.写入内容
   fs.write(fd, string[, position[, encoding]], callback)
   回调将接收参数 (err, written, string)，其中 written 指定传入的字符串
   需要被写入的字节数。 写入的字节数不一定与写入的字符串字符数相同。

   3.关闭文件
   fs.close(fd[, callback])
*/

// 引入fs模块
var fs = require('fs');

// 打开文件
// 异步方法没有返回值
fs.open("./hello2.txt","w",function(err,fd){
    // console.log(arguments);
    // //[Arguments] { '0': null, '1': 3 }
    // 判断是否出错
    if(!err){
        // console.log(fd);
        // 如果没有出错，写入内容
        fs.write(fd,"这是异步写入的内容",function(err){
            if(!err){
                console.log("写入成功");
            }
            // 关闭文件
            fs.close(fd,function(err){
                if(!err){
                    console.log("文件已关闭~");
                }
            })
        })
    }else{
        console.log(err);
    }
})


 
