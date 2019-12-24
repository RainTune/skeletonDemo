const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
module.exports = {
 configureWebpack: (config) => {
  config.plugins.push(new SkeletonWebpackPlugin({
   webpackConfig: {
    entry: {
     app: path.join(__dirname, './src/skeleton/skeleton.js')
    }
   },
   // SPA 下是压缩注入 HTML 的 JS 代码
   minimize: true,
   // 服务端渲染时是否需要输出信息到控制台
   quiet: true,
   // 根据路由显示骨架屏
   router: {
     mode: 'hash',
     routes: [
      {
       path: '/',
       skeletonId: 'skeleton-home'
      },
      {
       path: '/about',
       skeletonId: 'skeleton-about'
      }
     ]
   }
  }))
 },
 css: {
  // 使用 css 分离插件 mini-css-extract-plugin，不然骨架屏组件里的 <style> 不起作用，
  extract: true,
 }
}