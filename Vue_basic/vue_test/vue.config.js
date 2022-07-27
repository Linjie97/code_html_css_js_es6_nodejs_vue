const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查

  // // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/api': {//请求前缀,匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        pathRewrite: { '^/api': '' },//路径重写，将路径中符合正则表达式的部分改成空字符串
        // ws: true,//用于支持websocket,客户端和服务器之间通信的一种通信方式
        changeOrigin: true, 
        /*
        changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
        changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
        changeOrigin默认值为true
        */
      },
    }
  }
})

// module.exports = {
//   pages:{
//     index:{
//       //入口
//       entry:'src/main.js'
//     },
//   },
//   lintOnSave:false,//关闭语法检查
//   // 开启代理服务器
//   devServer: {
//     proxy: 'http://localhost:5000'
//   }
// }
