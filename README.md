### 开发测试

运行 `npm run storybook` 启动 storybook 页面查看相关文档。
运行 `npm run start` 启动 demo 页面，使用当前组件进行查看调试。

### 打包发布

使用 `npm run build` 进行打包构建。
使用 `npm run cpublish` 进行发布，会自动打包并同步对应发布的版本号进行发布。

### 提交代码

默认使用了 husky，在提交时候会先进行 eslint 检测和 jest 单元测试，通过后方可提交 commit 信息

### 组价库相关文档

https://ydm1475.github.io/

### 文档部署

使用了 github actions，代码推送到远程分支后，会自动部署到https://ydm1475.github.io/
