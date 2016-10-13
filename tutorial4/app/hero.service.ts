/*
 * hero.service.ts
 * 共享的英雄服务
*/

import { Component } from '@angular/core';

import { Hero } from './hero';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
	// 桩
	getHeroes() : Hero[] {
		return HEROES;
	}
}