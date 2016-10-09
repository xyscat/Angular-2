# Angular 2 快速上手

前几天看了Angular官网的文档，就一边看一边翻译了下快速开始文档，其实这个快速开始文档只是就如何搭建一个简单的hello world的app说明。

写了博客后，竟然被推荐到了博客首页了，真的是受宠若惊、非常惭愧，翻译的很渣，文章也没有校检过，看到阅读量一直涨感觉很惭愧。

所以，在国庆节结束后，重新梳理整理了下，并添加一些对 Angular 2 的说明，希望大家一起学习，共同进步。

正文开始：

我们要完成第一个 Angular 2 的 app 示例：

你可以先看看示例：链接地址 http://plnkr.co/edit/?p=preview

也可以看看我的GitHub上面的代码：地址

## 构建流程：

- 必需条件：安装Node.js和npm
- 第一步：创建和配置项目
- 第二步：创建app
- 第三步：创建一个组件并添加到app
- 第四步：开始编写app
- 第五步：创建index.html文件
- 第六步：创建并运行app
- 第七部：做一些变化
- 继续学习

下面一步一步详细地说明：

## 必需条件：安装Node.js和npm

安装Node.js和npm，不会请Google，http://blog.npmjs.org/post/85484771375/how-to-install-npm

示例中依赖node v4.x.x及以上，npm 3.x.x及以上。

## 第一步：创建和配置项目

- 创建项目目录
- 创建配置文件
- 安装依赖包

### 创建项目目录

quickstart

### 创建配置文件

典型的 Angular 项目需要几个配置文件：

- package.json：项目中使用的npm包的依赖信息，详细配置信息，请戳地址
- tsconfig.json: 定义项目中TypeScript文件怎样编译成JavaScript，详细配置信息，请戳地址
- typings.json：TypeScript编译器不能识别的函数库添加额外文件
- systemjs.config.js：为模块加载器提供信息，包含app的模块在哪儿，并记录必需的包。它还包括其它将来可能需要的包。

在`quickstart/`下创建上面4个文件，你可以直接下载我的demo，地址：

> SystemJS 和 Webpack ?
> 在这里我们使用SystemJS来说明目的，它仅仅是用来载入模块。你可以使用你更喜欢的模块加载器。
> Webpack 地址 SystemJS 地址：

### 安装依赖包

在`quickstart/`路径下，运行`npm install`，它将会根据`package.json`文件的依赖设置来安装下载依赖包.

完成后的项目目录：

quickstart
	node_modules …
	typings …
	package.json
	systemjs.config.js
	tsconfig.json
	typings.json

## 第二步：创建app

构建Angular app和 NgModules 密切关系 函数功能块

Angular 被分割为 Angular 模块，确保模块的简小，只需要导入你所需要的模块

所有的 Angular app至少需要一个模块，跟模块，被称为 `AppModule`

在`quickstart/`下，创建`app`子文件夹，并在`app/`下创建`app.module.ts`文件夹

这是app的入口点

当app运行在浏览器之后，你的跟模块需要载入 BrowserModule,从`@angular/platform-browser`到`imports`数组。

这个示例app是可以运行的最小 Angular app，它不需要任何其它的模块。在实际的app中，你可能会载入 `FormsModule`、`RouterModule`、`HttpModule`。

# 第三步：创建一个组件并添加到app

每个 Angular app至少需要一个组件：根组件`AppComponent`。

组件是 Angular app 的组成基元。一个组件控制一个视图。

创建组件文件`app/app.component.ts`：

示例app和其它的 Angular 组件有相同的基本结构：

- 一个import声明：载入 Angular的core
- 一个组件装饰器@Component decorator：和AppComponent组件类关联元信息,HTML的CSS选择器选取的元素显示组件，模板表示如何渲染视图。
- 一个组件类：通过模板来控制表现和行为，只包含根组件`AppComponent`。因为示例不需要逻辑行为，所以参数为空。

编译文件`app/app.module.ts`载入新的 `AppComponent` 并且把它添加到声明以及在`NgModule`装饰器bootstrap它。

## 第四步：开始编写app

现在需要告知 Angular 启动 app

创建文件`app/main.ts`：

代码初始化了app运行的平台，使用平台去启动 `AppModule`。

为什么要把main.ts，app module和app component文件分开？

app 启动是一个单独的依赖，创建模块或者显示视图。如果你不想去运行整个app你可以只测试组件。

> bootsrtap 是一个特殊的平台
> 示例app直接运行在浏览器，main.ts 载入 `platformBrowserBynamic`函数从`@angular/platform-browser-dynamic`，而不是`@angular/core`。
在移动设备，你可能会加载`Apache Cordova`或`NativeScript`模块，使用一个各自平台的启动函数。

## 第五步：创建index.html文件

创建文件`quickstart/index.html`：

- JavaScript函数库：`core-js`兼容老浏览器，`zone.js`和`reflect-metadata`函数库是Angular需要的，`SystemJS`函数库是管理模块加载的。

- SystemJS的配置文件：载入和运行刚写的app模块一个脚本。

- `<my-app>`元素：app显示的容器。

添加一些样式：创建`quickstart/style.css`文件：详细的CSS文件，地址


## 第六步：创建并运行app

输入命令 `npm start`：

- TypeStcript 编译器
- 一个静态资源服务器lite-server加载index.html，当app文件改动自动刷新

等待一小会，浏览器显示“My First Angular App”

## 第七步：一些改变

改变`app/app.conponent.ts`文件的信息内容为“Hello World”。

TypeScript编译器和lite-sever将会检查到改变，重新编译ts文件，刷新浏览器，显示改变后的内容。

完成！

项目的最终目录：

http://ww2.sinaimg.cn/mw690/005wQZvtgw1f8kjs3wi68j30600bya9y.jpg

查看示例代码：地址

然后呢？

这个示例很简单，相当于Angular 的Hello World 程序。


