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

## 主要的、详细的

为英雄表创建一个主、详情页面：

### 它有很多英雄

我们需要在app显示一系列英雄，允许用户去选择一个英雄，并且显示英雄的详细情况。

运行本节的示例：地址：

让我评估我们需要的显示的一系列英雄。
首先，我们需要一个英雄的清单。
我们想在视图的模板里显示它，所以我们需要一个方法去实现。

### 我们中断的地方

在继续我们昨天的暂停之前，让我们核实第一节后我们的项目结构。不然，我们需要返回去查清我们遗漏了什么。

- angular test
	- app
		- app.component.ts
		- app.module.ts
		- main.ts 
	- node_modules……
	- typings……
	- index.html
	- package.json
	- style.css
	- systemjs.config.js
	- tsconfig.json
	- typings.json

运行编译器和服务器：`npm start`

### 显示我们的英雄

- 创建英雄：

先创建一个是个英雄的数组。

```
	// app.component.ts
	const HEROES: Hero[] = [
		{ id: 11, name: '九尾妖狐'},
		{ id: 12, name: '黑暗之女'},
		{ id: 13, name: '寒冰射手'},
		{ id: 14, name: '星界游神'},
		{ id: 15, name: '魔蛇之拥'},
		{ id: 16, name: '皎月女神'},
		{ id: 17, name: '时间刺客'},
		{ id: 18, name: '海洋之灾'},
		{ id: 19, name: '刀锋意志'},
		{ id: 20, name: '无极剑圣'}
	];

```

`HEROES`数组是`Hero`类的实例，这个类在第一节为了创建一个英雄数组而定义了。我们想从web服务上获取这个英雄列表，但让我们先显示模拟的英雄。

- 显示英雄

让我们在 `AppComponent` 创建一个公共的属性，会预览英雄等待绑定。

```

	// app.component.ts
	heroes = HEROES;

```

我们不必定义 `heroes` 类。TypeScript 能推断出它来自于 `HEROES` 数组。

> 在这个组件类，我们本来要在这儿定义英雄列表。但是我们知道最终我们获取英雄从数据服务。因为我们知道我们正在，它使得分离来自从一开始实现的类英雄数据是有意义的。

- 在模板里显示英雄：

我们的组件有 `heroes`。让我们创建一个无序列表在我们的模板去显示他们。在 title 下面 和 hero 详情上面插入下面的HTML代码块。

```

	// app.component.ts
	// 显示英雄数组
	<h2>我的英雄列表</h2>
	<ul class="heroes">
		<li>
			<!-- 每个英雄在这儿显示 --!>
		</li>
	</ul>

```
 
现在我们有一个模板。我们能用英雄来填满。

- 用`ngFor`监听英雄

在我们的组件里，我们想要把 `heroes`数组绑定到我们的模板，循环它们，并个性化地显示它们。我们需要 Angular 帮我们做到这些。一步一步来。

在<li>标签添加内置命令 `*ngFor`：

```

	// app.component.ts
	<li *ngFor="heroes的hero">

```

> 在 ngFor 前面的星号是这个语法的关键部分。

> ngFor 的星号前缀表明`<li>`元素和它的子元素构成了一个主模板。

> ngFor 命令 遍历 由 AppComponent.heroes 属性返回的 heroes 数组 ，消灭这个模板的实例。

> 后面的 ngFor 意思是 在 heroes 数组获取每个英雄，在本地 hero 变量存储它，并使它对于匹配的模板实例可用。

> 在 hero 前面的 `let` 关键字作为模板的输入变量。我们能在模板里引用这个变量去访问一个英雄的属性。

> 了解更多 ngFor 和模板输入变量，在 显示数据 和 模板语法 一节。

现在，在`<li>`插入一些内容，使用了 hero 模板变量来显示英雄的属性。

```

	<ul class="heroes">
		<li *ngFor="let hero of heroes">
			<!-- 每个英雄在这儿显示 --!>
			<span class="badge">{{hero.id}}</span>{{hero.name}}
		</li>
	</ul>

```

浏览器刷新，查看英雄列表。

> 【注意】在插入的HTML内容中不能使用HTML`<!-- --!>`注释，会导致错误，无法加载刷新。使用`//`注释会被显示出来。

- 设计英雄的岩样式

我们的英雄列表很平淡无奇，我们想去改善它的视觉效果，用户悬停、选中后会样式有所改变。

让我们给我们的组件添加一些样式，这个通过`@component`装饰器的`styles`属性来设置，看下面的 CSS 类。

```

	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`]


```

我们又使用 反勾号 \` 来实现多行字符串。

样式很多，我们可以内联显示它们，也把它们写到单独文件，使它更易编写我们的组件。我们后面会将它放在单独文件，现在暂时内联使用它。

当我们为特定的组件设置样式的时候。我们的样式只会应用到 `AppComponent`，不会泄漏到外部的HTML文档里。

我们的显示英雄的模板现在看起来是：

```

	<h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ngFor="let hero of heroes">
	    <span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>


```

- 选择一个英雄

我们有一系列的英雄并且我们在app里有单独的英雄显示。这个列表和这个单独的英雄是不联系的。我们想让用户在列表选中一个英雄，然后选中的英雄出现在详情视图。这个UI模式被称为是主细表master-detail。在我们的示例中，主指的是英雄列表，细指的是选中的英雄。

我们使用 selectedHero 组件属性 连接主视图和细节视图 绑定到一个事件。

- 单击事件

通过在`<li>`元素插入 Angular 事件绑定到它的单击事件。

```

	<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
		<span class="badge">{{hero.id}}</span>{{hero.name}}
	</li>

```

关注事件绑定`(click)="onSelect(hero)"`

这个标识把`<li>`元素的`click`事件作为目标。等号右边符号调用 `AppComponent`方法，`onSelect()`，通过模板输入变量`hero`作为一个对象。这和我们之前在 `ngFor` 定义的 `hero` 变量是相同的。

> 了解更多关于 事件绑定 在 用户输入 和 模板语法 一节。

- 添加单击处理程序

我们的事件绑定涉及到于一个 `onSelect` 方法还不存在。现在我们给我们的组件添加这个方法。

这个方法做什么？它应该设置用户在组件的英雄选择视图单击的英雄。

我们的组件还没有一个选择英雄视图。我们开始吧。

- 显示选中的英雄

我们不在需要`AppComponent`里静态的 hero 属性。用 `selectedHero`属性来替代。

```

	// app.component.ts
	selectedHero: Hero;


```

我们已经决定在用户选择一个英雄前没有英雄应该被选中。所以当我们对 hero 进行操作的时候，不用初始化 selectedHero 属性。

现在添加一个 onSelect 方法，设置 selectedHero 属性到 用户点击的 hero上。

```

	// app.component.ts
	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}

```

我们将在模板展示选中英雄的详情。此时，它依旧会涉及到旧的 hero 属性。我们修改模板去绑定到新的 selectdHero 属性上。

```

	  <h2>{{selectedHero.name}} details!</h2>
	<div><label>id: </label>{{selectedHero.id}}</div>
	<div>
	    <label>name: </label>
	    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
	</div>

```

- 使用 nglf 隐藏空的详情

app加载我们看见一个英雄列表，但是英雄没有被选中。`selectedHero`是`undefined`。这是我们在浏览器的控制台看见的错误的原因：

```

	ORIGINAL EXCEPTION: Cannot read property 'name' of undefined

```

记住我们在模板里显示 selectedHero.name，这个name属性不存在，因为 selectedHero 本身没有被定义。

我们将解决这个问题，通过使英雄详情脱离DOM，直到有了选中的英雄。

我们隐藏模板`<div>`中英雄细节的HTML。添加 `ngIf` 内置命令到组件的 selectedHero 属性。

```

	<div *ngIf="selectedHero">
	  <h2>{{selectedHero.name}} details!</h2>
	<div><label>id: </label>{{selectedHero.id}}</div>
	<div>
	    <label>name: </label>
	    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
	</div>
	</div>


```

> ngIf 前面的 * 号 是这个语法主要的部分。

当没有 selectedHero 的时候， ngIf 符号从DOM移除英雄的详情HTML。就没有英雄的详情元素和数据绑定要担心了。

当用户选中了英雄，selectedHero 变成真的并且 ngIf 把英雄详情HTML放在DOM里，完成嵌套绑定。

> ngIf 和 ngFor 被称为 “结构性指令”，因为它们能够改变DOM部分的结构。换句话说，它为 Angular 提供了在DOM中显示内容的方法。

> 了解跟多关于 ngIf 和 ngFor 和其他结构性指令 在 结构性指令 和 末班语法 一节。

刷新浏览器，我们看到一个英雄列表，但没有显示英雄的详情。只要 selected Hero 没有定义 ngIf 就会使它脱离DOM。当我们点击一个英雄，选中的英雄详情会显示出来。所有都如期实现了。

- 为选中的部分添加样式

我们在下方看到了选中英雄的详情，但我们在上面的列表中不能快速地定位它。我们可以修改它通过为主列表合适的`<li>`应用 `selected` CSS 类来实现。比如：当我们在英雄列表选中 黑暗之女，我们能使它在视觉中显现出来，通过背景颜色的变化。

我们将添加属性为模板的 `selected` 类绑定`class`。我们将设置一个表达式，它把 selectedHero 和 hero 比较。

键是 CSS 类(selected)的名字。如果两个英雄匹配那么值是true，否则为false。我们会说：如果英雄匹配 应用 selected 类，如果不匹配就移除它。

```

	// app.component.ts
	<li *ngFor="let hero of heroes"
  	[class.selected]="hero === selectedHero"
  	(click)="onSelect(hero)">
  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	</li>



```

注意到在模板里 `class.selected`被方括号`[]`包裹。这是 **属性绑定** 的一个语法，在 数据流和数据源的一种方式与一个 `class` 属性的绑定。


> 了解更多关于 属性绑定  在 模板语法 一节。

加载浏览器，看看效果。

在英雄列表选中英雄，那么它的背景会变化。

完整个 `app.component.ts` 代码：

```

	import { Component } from '@angular/core';
	
	export class Hero {
			id: number;
			name: string;
	}
	
	const HEROES: Hero[] = [
		{ id: 11, name: '九尾妖狐'},
		{ id: 12, name: '黑暗之女'},
		{ id: 13, name: '寒冰射手'},
		{ id: 14, name: '星界游神'},
		{ id: 15, name: '魔蛇之拥'},
		{ id: 16, name: '皎月女神'},
		{ id: 17, name: '时间刺客'},
		{ id: 18, name: '海洋之灾'},
		{ id: 19, name: '刀锋意志'},
		{ id: 20, name: '无极剑圣'}
	];
	
	@Component({
	  selector: 'my-app',
	  // 模板 数据绑定
	  template: `
	  <h1>{{title}}</h1>
	
	<div *ngIf="selectedHero">
	
	  <h2>{{selectedHero.name}} details!</h2>
	<div><label>id: </label>{{selectedHero.id}}</div>
	<div>
	    <label>name: </label>
	    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
	</div>
	
	</div>
	
		<h2>我的英雄列表</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes" 
				[class.selected]="hero === selectedHero"
				(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span>{{hero.name}}
			</li>
		</ul>
	  `,
	  styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`]
	
	})
	
	export class AppComponent {
		title = '英雄之旅';
	
		// hero 数组属性
		heroes = HEROES;
	
		// 选中的英雄属性
		selectHero: hero;
	
		// 事件处理函数
		onSelect(hero: Hero): void{
			this.selectedHero = hero;
		}
	}



```

### 我们已经完成的任务：

在这节，我们完成了：

- 我们的英雄列表可以显示出来了
- 我们添加了一个选中英雄并显示英雄详情的功能
- 我们学会了在组件的模板中使用 ngIf 和 ngFor 内置指令

运行本节的示例，地址：

### 下面的路

我们的项目有所进步，但还远没有完成。我们不能把整个完整的app放到单独的一个组件里。我们需要把它拆成子组件，并且把它们组装在一起工作，我们下节继续。 



