# 文档

## 1. 简介

英雄之旅

我们的目标是创建一个 app 去帮助人事管理部门管理，即时是英雄也要去工作。

当然，在教程中我们只进行一小部分。为了实现一个期望的成熟的、数据驱动的(获取和展示英雄列表，编辑英雄的详细信息，浏览不同视角下的英雄数据) app，我们还要做很多专题。

这个项目覆盖 Angular 的核心基础。我们使用内置的指令去显示、隐藏元素和英雄数据列表。

我们会创建一个组件去展示英雄详细信息，展示英雄的数组。

我们使用单向数据绑定展示只读信息。

我们使用双向数据绑定，添加可编辑的区域去更新一个模型。

我们把组件方法绑定到用户事件上，比如键盘事件和鼠标点击。

我们会从总表选择一个英雄并且在一个详细信息视图编辑它。

我们格式化用管道。

我们创建一个分享服务集合我们的英雄。

我们使用路由去在不同视图和它们的组件下进行导航。

我们学习足够的 Angular 核心知识可以开始并且获得创建任何你想要的app的信心。我们在初级课程里将覆盖很多方面，但是我们为每节都搜集了大量的链接去深度地学习。

先看看完成的app效果：[链接](http://plnkr.co/edit/?p=preview)

## 游戏结束

这是我们要做的app，开始是我们的仪表盘视图和我们英勇的英雄：

在仪表盘的上方是两个链接：仪表盘和英雄。我们可以点击他们去在两个视图间切换。

当我们点击仪表盘的英雄，路由会把我们带到英雄详细信息视图，在这个视图我们可以编辑英雄的名字。

点击返回按钮我们会返回到仪表盘的视图。顶部的链接也能带我们到主视图界面。点击英雄链接选项，我们就到英雄主列表视图。

我们点击一个英雄，只读的迷你信息会显示到我们选择的下方。

我们点击下方的详细视图按钮会跳转到可编译的页面。

### 下一节

我们会实现这个示例，一步一步，我们每一步会带一个要求，那是我们在很多app中遇到的。所有事都有缘由。

在这个过程中我们会遇到很多 Angular 核心基础知识。

## 编写hero示例

我们编写一个简单的英雄编辑器app

### 以前

每个故事都有开始，我们的故事开始在 quickstart 的结束。

在这节我们创建了一个简单的示例。

创建一个`angular-tour-of-heroes`文件夹，安装 quickstart 的步骤，那节提供了 Angular 项目的一些必须条件、项目文件结构和核心文件。

当然，你也可以直接下载quickstart的资源，地址：github。文件里有详细的注释，建议你看一下 quickstart 文章。

我们必须的项目结构：

- app
	- app.component.ts
	- app.module.ts
	- main.ts
- node_modules……
- typing……
- index.html
- package.json
- style.css
- systemjs.congig.js
- tsconfig.json
- typings.json

### 编译app并且运行

启动TypeScript编辑器，它会动态检查文档的变化，然后启动我们的服务器。

上述操作只需要在命令行输入 `npm start`

这个命令会完成上述任务，启动编译器、服务器，自动在浏览器运行app，并且当我们在之后进行项目编辑的时候会一直运行。

### 显示我们的英雄

我们想要在app显示英雄信息。

给我们的`AppComponent`添加两个属性，`title`属性是指 app 的名称，`hero` 属性为英雄的名字。

```

	// app.component.ts
	export class AppComponent {
		title = '英雄之旅';
		hero = 'xyscat';
	}

```

在`@Component`装饰器更新模板，将新属性实现数据绑定。

`template: '<h1>{{title}}</h1><h2>{{hero}} 详细介绍！</h2>'`

保存修改，浏览器会刷新并显示我们的title和hero属性值。

`{{}}`双括号告诉 app 从组件去读取title和hero属性并且渲染它们。这是单项数据绑定的插入。

> 了解跟多关于插入 在显示数据那一节：[地址](https://angular.io/docs/ts/latest/guide/displaying-data.html)

### hero 对象

现在，我们的英雄只是一个名字。我们的英雄需要更多的属性。让我们把hero从字符串转换为一个类。

创建一个带有id和name属性的 Hero 类。把它放在app.component.ts文件的顶部，在导入声明下面。

```
	// app.component.ts
	export class Hero {
		id: number;
		name: string;
	}

```

现在有了 `Hero` 类，让 `Hero` 类我们根据重构我们组件的 `hero` 属性。然后初始化它id为1，name为 "xyscat"。

```

	// app.component.ts
	// 由Hero类初始化hero属性
	hero：Hero = {
		id: 1,
		name: 'XYSCAT'
	};

```

因为我们把 hero 从一个字符串转换为了对象，所以要在模板更新数据绑定。

`template: '<h1>{{title}}</h1><h2>{{hero.name}} 详细介绍！</h2>'`

保存修改，浏览器会刷新并显示我们的英雄名字。

> 【注意】在这块，我添加了类，并且进行了绑定，但是出错，不知道是写入的位置，还是格式出错。


```

	export class Hero {
		id: number;
		name: string;
	}
	// 由Hero类初始化hero属性
	hero：Hero = {
		id: 1,
		name: 'XYSCAT'
	};

```

### 添加 更多的 HTML

显示名字很好，但是我们想要看到所有英雄的属性。我们将分别添加一个`<div>`给我们的id属性和name属性。

```

	template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label>{{hero.name}}</div>'


```

模板的字符串很长了。我们最好仔细点避免出现打字错误。

### 多行模板字符串

我们可以写一种更易读的模板，将字符串分行写。

这是利用 ES 2015和TypeScript 的模板字符串特性保持代码的条理性。

改变模板的引号为重音符，把元素放到一行显示。

```

	  template: `
	  <h1>{{title}}</h1>
	  <h2>{{name}} 详细介绍</h2>
	  <div><label>id: </label>{{title}}</div>
	  <div><label>name: </label>{{hero}}</div>
		`

```

### 编辑我们的 Hero 类

我们想要编辑英雄名字在一个文本框里。

重构英雄的名字的用`<input>`元素去包裹。


```

	template: `
	<h1>{{title}}</h1>
	<h2>{{name}} 详细介绍</h2>
	<div><label>id: </label>{{title}}</div>
	<div>
		<label>name: </label>
		<input value = "{{hero}}" placeholder = "name">
	</div>
	`

```

我们看到英雄的名字已经显示在输入框了，我们可以编辑它，但是编辑后的name不能反映到<h2>元素中，单向数据绑定不能够实现这种效果。

### 双向数据绑定

我们打算在<input>元素显示英雄的名字，编辑它，可以在我们已经绑定了英雄的名字的地方看到变化。简而言之，我们需要双向数据绑定。

在我们为表单输入使用双向数据绑定前，我们需要在 Angular 模块里导入 `FormModule` 包。我们添加它到 `NgModule` 装饰器的 `import` 数组。这个数组包含我们app使用的额外模块列表。现在我们包含表单模块包。

```

	import { NgModule }      from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { FormsModule }   from '@angular/forms';
	import { AppComponent }  from './app.component';
	@NgModule({
	  imports: [
	    BrowserModule,
	    FormsModule
	  ],
	  declarations: [
	    AppComponent
	  ],
	  bootstrap: [ AppComponent ]
	})
	export class AppModule { }


```

> 了解更多关于 FormsModule 和 ngModel，在 [Forms](https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel) 和 [模板语法](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel) 一节中。


让我们使用 内置指令`ngModel` 更新模板实现双向数据绑定。

使用下面的HTML替代 `<input>` 元素：

`<input [(ngModel)] = "hero" placeholder = "name">`

浏览器刷新，我们会看到英雄名字，我们编辑名字会看到`<h2>`元素内容同步变化，我们实现了双向数据绑定。

### 我们已经走过的路

让我们回顾一下我们已经创建的。

- 我们的app使用`{{}}`实现单向数据绑定去展示app的title属性和Hero类。
- 我们使用 ES2015的模板字符串编写多行模板使我们的模板更易读。
- 我们通过插入 `ngModel` 指令实现了双向数据绑定在`<input>`元素显示英雄名字。

运行这部分的示例：地址。

现在的`app.component.ts`文件：

```

	import { Component } from '@angular/core';
	
	export class Hero {
			id: number;
			name: string;
	}
	
	@Component({
	  selector: 'my-app',
	  // 模板 数据绑定
	  template: `
	  <h1>{{title}}</h1>
	  <h2>{{hero.name}} 详细介绍</h2>
	  <div><label>id: </label>{{hero.id}}</div>
	  <div>
		<label>name: </label>
		<input [(ngModel)] = "hero.name" placeholder = "name">
	  </div>
	  `
	})
	
	export class AppComponent {
		title = '英雄之旅';
		// 由Hero类初始化hero属性
		hero: Hero = {
			id: 1,
			name: 'XYSCAT'
		};
	}


```

### 下面的路

我们的app 只显示一个英雄，并且我们想要显示一系列英雄。我们也想允许用户选择一个英雄并显示他们的详细信息。

我们了解更多关于怎样检索列表，绑定它们到模板，允许用户去选择一个英雄，在下节将会学习。