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

