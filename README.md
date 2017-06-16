# 使用 react + react-router + node + express + mongodb 搭建的一个简单项目展示系统
简单的实在不能再简单了，只是实现了基本功能，基本未写css样式，丑就丑着用吧，后期慢慢优化，嘿嘿。

待完善功能：
* 路由拦截
* 状态管理
* 表单验证
* 代码高度组件化

## 第一步：连接数据库
``` bash
# 数据库地址 ./data
# 数据库名字：my_db
```

## 第二步：启动服务器
```
cd server
node index.js
```

## 第三步：运行客户端
```
npm install
npm start
npm test
npm run build
```

### 项目目录结构:
参考根目录下的 assets 文件夹，如果文件位置不对，最终前端页面是拿不到数据的。