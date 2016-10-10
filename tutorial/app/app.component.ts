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

