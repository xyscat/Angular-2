"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: '九尾妖狐' },
    { id: 12, name: '黑暗之女' },
    { id: 13, name: '寒冰射手' },
    { id: 14, name: '星界游神' },
    { id: 15, name: '魔蛇之拥' },
    { id: 16, name: '皎月女神' },
    { id: 17, name: '时间刺客' },
    { id: 18, name: '海洋之灾' },
    { id: 19, name: '刀锋意志' },
    { id: 20, name: '无极剑圣' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = '英雄之旅';
        // hero 数组属性
        this.heroes = HEROES;
    }
    // 事件处理函数
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // 模板 数据绑定
            template: "\n  <h1>{{title}}</h1>\n\n<div *ngIf=\"selectedHero\">\n\n  <h2>{{selectedHero.name}} details!</h2>\n<div><label>id: </label>{{selectedHero.id}}</div>\n<div>\n    <label>name: </label>\n    <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n</div>\n\n</div>\n\n\t<h2>\u6211\u7684\u82F1\u96C4\u5217\u8868</h2>\n\t<ul class=\"heroes\">\n\t\t<li *ngFor=\"let hero of heroes\" \n\t\t\t[class.selected]=\"hero === selectedHero\"\n\t\t\t(click)=\"onSelect(hero)\">\n\t\t\t<span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n\t\t</li>\n\t</ul>\n  ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map