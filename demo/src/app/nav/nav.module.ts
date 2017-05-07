import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtoolComponent } from './navtool/navtool.component';

// 浏览器动画支持
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 导入 MaterialModule
import { MaterialModule } from '@angular/material'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    NavtoolComponent
  ],
  declarations: [NavtoolComponent]
})
export class NavModule { }
