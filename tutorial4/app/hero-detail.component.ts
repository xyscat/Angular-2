// 载入……
import { Component, Input } from '@angular/core';

// 导入 hero.ts 文件里得 Hero 类
import { Hero } from './hero';

// 定义组件
@Component({
  selector: 'my-hero-detail',
  // 模板，HTML结构显示部分
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})
// 载入英雄详情类
export class HeroDetailComponent {
	// 强调限制条件
	@Input()
	// hero 属性
	hero: Hero;
}
