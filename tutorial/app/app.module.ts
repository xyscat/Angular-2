import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 从 forms 添加 FormsModule 模块
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
	BrowserModule,
	// FormsModule 模块
	FormsModule
  ],
  declarations:	[ AppComponent ],
  bootstrap:	[ AppComponent ]
})
export class AppModule { }
