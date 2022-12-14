/*
同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出  
*/

var fs = require("fs");
// 流式文件写入
/*
  创建一个可写流
   fs.createWriteStream(path[, options]) 
*/
var ws = fs.createWriteStream("hello4.txt");

// 可以通过监听流的open和close事件来监听流的打开和关闭
/*
  on(事件字符串，回调函数): 可以为对象绑定一个事件
  once(事件字符串，回调函数)：可以为对象绑定一个一次性事件，该事件会在触发一次后自动失效
*/ 
ws.once("open",function(){
    console.log("流打开了");
});
ws.once("close",function(){
    console.log("流关闭了");
});

// 通过ws向文件中输出内容,只要该流还存在，就可以一直写进去
ws.write("通过可写流写入文件的内容");
ws.write("锄禾日当午");
ws.write("风急天高猿啸哀");
ws.write("前无古人后无来者");
ws.write("渚青沙白鸟飞回");
ws.write("一览众山小");

// 关闭
ws.close();
// 这样即可全部写入