# 公共API

本项目主要用于NPM包的实践记录，以及一些常用的API的使用记录。

创建npm包的教程：https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

当前包简要过程如下：

- npm init --scope=@linround
- npm adduser
- npm publish --access public


## 注意事项
- 发布时记得更改 package.json 中的版本号,不要重复发布相同的版本
