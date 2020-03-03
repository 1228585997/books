
module.exports = {
	devServer: {
		hot:true, //注：hot:true为热更新选项，如不需要，删掉即可。
	    port: 8080, // 端口号，如果端口号被占用，会自动提升1
	    host: "localhost", //主机名， 127.0.0.1，  真机 0.0.0.0
	    https: false, //协议
	    open: true, //启动服务时自动打开浏览器访问
		//proxy:{
		// 		   '/weatherApi':{
		// 			   target:'https://www.apiopen.top/',
		// 			   ws: true,
		// 			   changeOrigin: true //允许跨域
		// 		   }
		// 	   }
	},
	lintOnSave: false, // 关闭格式检查
	productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度 
        css: {
                loaderOptions: {
                  postcss: {
                    // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
                     plugins: [
                      require("postcss-px2rem")({
                        remUnit:64
                  })
                ]
              }
            }
        }
	  //import 'lib-flexible'  main.js
	  // <meta name="viewport" content="width=device-width,
	  //  initial-scale=1, maximum-scale=1, user-scalable=no">
	  // cnpm i lib-flexible --save
	   // cnpm install postcss-loader postcss-px2rem --save
}