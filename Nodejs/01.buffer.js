var str = "Hello morning";
var buf = Buffer.from(str);
console.log(buf);
console.log(buf.length);

// //创建一个指定大小的buffer
// var buf2 = new Buffer(10);
// console.log(buf2);
// new Buffer()弃用，基本上构造方法都不能直接用
//需要是 Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() 

// 创建长度为 10 的以零填充的缓冲区。
var buf3 = new Buffer.alloc(10)
// 通过索引来操作buf3中的元素
buf3[0] = 88;
buf3[1] = 255;
buf3[2] = 0xaa;
console.log(buf3);

// Buffer.allocUnsafe(size) 创建一个指定大小的buffer，
//但是buffer中可能含有敏感数据
//不会清除原本内存中的数据，因此初始可能不是00