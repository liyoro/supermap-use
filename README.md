# vue2-admin

vue2开发框架，提取自 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/)，稍微做了修改和更新，自家用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 环境

```
node v14.18.3 (npm v6.14.15)
```

### Variable '' is already declared in the upper scope.

```
'vue/no-template-shadow':'off',
```

## iconfont

### 引入

下载的文件，放`assets`-`iconfont`目录下面

### 配置

在`main.js`里面配置

```
import "@/assets/iconfont/iconfont.css"
```

### 使用

xxx是图标名称

```
<i class='iconfont xxx' />
```

## 代码总览

``` 
|-- public
	|-- data	// mock接口数据
|-- src
	|-- api	// 接口
	|-- assets	// 图片、字体、iconfont
    |-- components 	// 组件
    |-- config		// 全局配置文件
    |-- directive		// 指令
    |-- filters		// vue全局过滤器
    |-- layout		// 项目总体布局文件
    |-- plugins	// 主要是element配置
    |-- router		// 项目路由配置
    |-- store		// 项目vuex配置
    |-- styles 	// css配置
    |-- utils 		// 工具类、请求
    |-- views		//
        |-- bigscreen   // 大屏页面，响应式
|-- main.js    // 全局配置
```

## 地图

# SuperMap

https://github.com/SuperMap/vue-iclient

https://github.com/SuperMap/vue-iClient3D_for_Cesium

Vue-iClient-MapboxGL：https://iclient.supermap.io/web/apis/vue/zh/api/guide/installation.html

本地：http://localhost:8001/vue-iEarth/

本地例子：http://localhost:8001/iClient-JavaScript/examples


本地openlayers apidoc：http://localhost:8001/openlayers/apidoc/index.html

在线openlayers examples：https://openlayers.org/en/latest/examples/

本地supermap docs：http://localhost:8001/iClient-JavaScript/docs/openlayers/

在线supermap docs：https://iclient.supermap.io/docs/openlayers/


- vue 引入 2D 超图

[supermap](https://iclient.supermap.io/web/introduction/openlayersDevelop.html#Ready)

[apidoc](https://openlayers.org/en/v6.4.3/apidoc/)

[supermap docs](https://iclient.supermap.io/docs/openlayers/)

- vue 引入 3D 超图

[3DforWebGL](http://support.supermap.com.cn:8090/webgl/web/introduction/3DforWebGL.html#Ready)

有关各种投影的参数定义，可参考 https://spatialreference.org；如果已有定义，可搜索并查看其投影参数，例如 EPSG:21418，其投影参数为 https://spatialreference.org/ref/epsg/21418/proj4/。