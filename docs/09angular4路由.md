# angular 4 路由

使用cli命令创建根路由模块 `ng g cl app.router` 或自己建一个路由配置文件 如:`app/app.router.ts`

```ts
// app/app.router.ts
// 将文件修改为

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 以后在这里改动配置
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
// 将路由配置导出为 appRouting 以供调用, 子模块中的路由使用 forChild 而不是 forRoot
export const appRouting = RouterModule.forRoot(routes);
```

在根模块中引入路由, 为特性模块定义的路由在其模块中引入

```ts
// app/app.module.ts
import { appRouting } from "./router/router.module"
// @NgModule({
//  imports: [ ... ,
  appRouting
// ...
```

## 路由配置

```ts
const routes: Routes = [
  // path:路径 /news component:组件
  { path: 'news',  component: Newsomponent },
  // path:路径 /detail/1 component:组件
  { path: 'detail/:id', component: DetailComponent },
  // 懒加载子模块, 子模块需要配置路由设置启动子组件
  { path: 'other', loadChildren:"./other/other.module#otherModule" },
  // 重定向
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
```

- pathMatch?: string; 默认为前缀匹配 "prefix"; "full" 为完全匹配
- outlet?: string; 路由目标
- children?: Routes; 子路由的规则

## 加载路由

在根组件或当前组件的模板中

```html
<router-outlet></router-outlet>
```

## 多个路由区域

```js
  { path: 'news', outlet:'let1'  component: NewsComponent }
  { path: 'news', outlet:'let2'  component: News2Cmponent }
```

```html
<router-outlet name="let1"></router-outlet>
<router-outlet name="let2"></router-outlet>
```

即访问 `/news/` 时同时加载 `NewsComponent` 和 `News2Cmponent` 两个组件

## 链接及访问

```html
<a routerLink="/detail/1" routerLinkActive="active">detail</a>
<a [routerLink]="['/detail', news.id]">{{news.title}}</a>
```

`routerLinkActive="active"` 即在本路由激活时添加样式 `.active`

或

```ts
import { Router } from '@angular/router';
// ...
constructor(private router: Router) {}

// ...

this.router.navigate(['/detail', this.news.id])
```

navigateByUrl 方法指向完整的绝对路径