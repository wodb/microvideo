# microvideo

## 目录结构
```
├─public
└─src
    ├─api             # api目录
    ├─assets          # 资源
    ├─components      # 组件
    │  ├─Pagination
    │  └─SvgIcon
    ├─filters         # 过滤器
    ├─icons           # svg图标
    │  └─svg
    ├─layout          # 页面布局
    │  └─component
    │      └─Header
    ├─plugins         # 插件
    ├─router          # 路由(分模块)
    │  └─modules
    ├─store           # 仓储(模块)
    │  └─modules
    ├─styles          # 全局样式及变量mixin
    ├─utils           # 工具库
    └─views           # 页面
└─.env.*              # 环境变量
└─.editorconfig       # 编辑器配置
└─.eslint
└─.eslintignore
└─babel.config.js
└─package.json
└─package-lock.json
└─README.md
└─vue.config.js
```

## 配置
* .env.* 在文件中以键值对方式增加。会增加到process.env中

## 别名
css中别名: ~@ 
```
 alias: {
  '@': resolve('src')
}
```

## 一、 CSS/SASS规则
1. 如果使用SCSS，注意在任意组件/页面中的内置样式style标签中写 `<style lang="scss" scoped>`
   
   
## 二、axios 使用
1. request.js是对axios二次封装
2. 方法包含拦截响应，拦截请求 将来token 可以加入
3. 封装入了 请求头的信息 包含base地址/timeout/状态码（后台暂未设置）
4. ajax方法在api目录中增加并且以函数的方式返回
```js
import request from '@/utils/request'
export function getInfo() {
  return request.get('/api/getUser')
}
```
## 四、字体图标

本站的SVG矢量图标采用阿里的字体库 http://iconfont.cn/

好处是矢量文件 可任意更改大小，颜色等
首先你要注册一个账号 然后在搜索栏搜索自己需要的图标。然后添加到icon/svg文件夹中。代码会以Symbol的方式添加到DOM树中。
```
<svg-icon icon-class={icon}/>
```
