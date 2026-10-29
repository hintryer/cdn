# mycdn

这是一个基于 GitHub + jsDelivr 的免费静态资源 CDN 仓库，适合存放前端脚本、工具类 JS、资源文件和一些常用页面组件。

## 项目简介

该仓库用于在网页中快速引用公共脚本，同时减少重复上传和维护成本。通过 jsDelivr 可以直接从 GitHub 拉取资源，适合博客、个人站点、教程页面和前端实验项目。

## 目录说明

- `js/`：常用前端脚本和页面功能组件
- `assets/`：资源文件、教程资料和存档内容
- `ssr/`：脚本模块或站点脚本文件

## SSR 模块

以下为 `ssr/` 目录下文件的 jsDelivr 引用方式：

### CamScanner.module

[直链](https://cdn.jsdelivr.net/gh/hintryer/cdn/ssr/CamScanner.module)
[jsdelivr导入](https://cdn.jsdelivr.net/gh/hintryer/cdn/ssr/CamScanner.module)

### script-hub.rocket.module

[直链](https://cdn.jsdelivr.net/gh/hintryer/cdn/ssr/script-hub.rocket.module)
[jsdelivr导入](https://cdn.jsdelivr.net/gh/hintryer/cdn/ssr/script-hub.rocket.module)


## 常用脚本

### 1. MiniDialog

用于页面弹窗提示和自定义对话框。

```html
<script src="https://cdn.jsdelivr.net/gh/hintryer/cdn/js/MiniDialog/MiniDialog.js"></script>
```

### 2. html2md

用于将 HTML 内容转换为 Markdown 文本。

```html
<script src="https://cdn.jsdelivr.net/gh/hintryer/cdn/js/html2md.js"></script>
```

### 3. 目录生成工具

可用于自动生成文章目录、章节定位、滚动跟随和锚点跳转。

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hintryer/cdn/js/toc.js"></script>
```

### 4. 返回顶部

用于页面一键回到顶部。

```html
<script src="https://cdn.jsdelivr.net/gh/hintryer/cdn/js/gotop.js"></script>
```

### 5. 日历/农历

用于显示农历、节气等日期信息。

```html
<script src="https://cdn.jsdelivr.net/gh/hintryer/cdn/js/lunar.js"></script>
```

### 6. 弹窗/提示组件

可扩展用于页面交互提示和轻量型弹窗功能。

```html
<script src="https://cdn.jsdelivr.net/gh/hintryer/cdn/js/popup.js"></script>
```


## 使用方式

1. 将需要的脚本文件复制到页面中。
2. 使用 `script` 标签引入 jsDelivr 地址。
3. 根据脚本的 API 进行初始化或调用。

## 注意事项

- 资源文件会直接依赖 GitHub 仓库状态，修改文件后请注意缓存刷新。
- 部分脚本依赖 jQuery 或其他第三方库，使用前请确认依赖是否已加载。
- 生产环境建议使用版本锁定或固定分支以减少不稳定性。

## 适用场景

- 博客文章页增强功能
- 个人站点组件化开发
- 文档目录和交互效果
- 学习、测试和快速原型实现

## 说明

这个仓库主要面向轻量前端脚本和静态资源分发，方便于快速集成与复用。如果你有新的脚本需求，也可以继续扩展到 `js/` 目录中。
