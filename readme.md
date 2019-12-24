## 骨架屏项目

#### 1 介绍

里面包含两个骨架屏项目，一个是手动生成的骨架屏（baseSkeletonDemo），一个是自动生成的骨架屏（autoSkeletonDemo），前者使用的是vue-skeleton-webpack-plugin, 既支持history路由，又支持hash路由，而后者使用的page-skeleton-webpack-plugin,只支持history路由。

#### 2 项目运行

#### 2.1 autoSkeletonDemo

- git clone 克隆项目
- `cd skeletonDemo/autoSkeletonDemo`
- `npm i`
- 修改node_modules/page-skeleton-webpack-plugin/src/skeletonPlugin.js
    ```
    if (!this.server) {
        const server = this.server = new Server(this.options) // eslint-disable-line no-multi-assign
        server.listen().catch(err => server.log.warn(err))
      }
    ```
- `npm run serve`
- 打开谷歌浏览器输入地址：`localhost:8080`
- 按下`ctrl +enter`
- 然后页面最上面会出现一个导航条，点击左面的p按钮
- 等待一会以后会弹出一个页面（注意：如果没有弹出页面，是由于没有配置谷歌的环境变量，将谷歌的安装目录放到Path中即可）
- 然后点击又上角编辑按钮进行保存。
- 此时会生成在`autoSkeletonDemo`目录下面会出现一个shell文件。
- `npm run build` 将生成对的文件dist 文件丢到服务器上即可。



#### 2.2 baseSkeletonDemo

- git clone 克隆项目
- `cd skeletonDemo/baseSkeletonDemo`
- `npm i`
- `npm run serve`

