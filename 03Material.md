# 使用Angular Material

## 在项目中安装 Angular Material

`npm install --save @angular/material`

`npm install --save @angular/animations`

## 引入material

在需要 material 的模块（如跟模块，/app/app.module.ts）中加载 material 和 material 动画

```ts
// /src/app/app.module.ts
// 导入 BrowserAnimationsModule:动画模块 或 NoopAnimationsModule：模拟动画，用于动画很慢的平台或用于测试时
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 如果不想一一导入 Material 的单个组件，可以直接在跟模块中导入所有 Material 组件
import { MaterialModule } from "@angular/material";
// 如果不想全部引入可单独引入，如：
// import {MdToolbarModule} from '@angular/material'; //引入material工具条

@NgModule({
// ...
  imports: [BrowserAnimationsModule],
  imports: [MaterialModule],
// ...
})
export class AppModule { }
```

## 样式

### 静态样式

首先将 css 改为 scss 以使用Sass 3

```json
// /www/.angular-cli.json
{
"apps":{
    "styles": [
        "styles.scss"
    ]
}
}
```

将 `styles.css` 改名为 `styles.scss`

```sass
/* /src/styles.scss */
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
/* material 提供的模版，同目录下的其他模版均可使用 */
```

### 自定义样式

```sass
/*引入material定义库*/
@import '~@angular/material/theming';
@include mat-core();
/*
定义变量，这些函数都在库里，用到的有:
mat-palette(调色板，默认色级，高亮色级，深色级) 获取调色板
mat-light-theme(主要色板，重要色板，警告色板) 获取高亮皮肤
mat-dark-theme(主要色板，重要色板，警告色板) 获取调色板
mat-color(色板，级别)
颜色级别有：50，100，200...900，从浅到深
*/
$app-primary: mat-palette($mat-teal);
$app-accent: mat-palette($mat-pink, 200, 100, 400);
$app-warn: mat-palette($mat-deep-orange);
$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
$app-dark-primary: mat-palette($mat-blue-grey, 200,100,900);
$app-dark-accent: mat-palette($mat-deep-purple);
$app-dark-warn: mat-palette($mat-deep-orange);
$app-dark-theme: mat-dark-theme($app-dark-primary, $app-dark-accent, $app-dark-warn);

//  默认情况下使用 $app-theme 定义的皮肤
@include angular-material-theme($app-theme);

#sidenav {
    // 局部使用 $app-dark-theme 皮肤
    @include angular-material-theme($app-dark-theme); 
    // 自定义某些样式
    background-color: mat-color(mat-palette($mat-blue-grey),900);
    color: mat-color($app-dark-primary, 50);
}
```

## 使用

```html
<!--组件模版中-->
    <md-input-container>
      <input mdInput value="" [(ngModel)]="user.name" placeholder="姓名">
    </md-input-container>
```

更多：
<https://material.angular.io/components>
