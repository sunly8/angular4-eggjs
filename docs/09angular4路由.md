# angular 4 路由

创建根路由模块 `ng g cl app.router`

```ts
// app/router/router.module.ts
// 将文件修改为

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 以后在这里改动配置
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
// 将路由配置导出为 appRouting 以供调用, 子模块中的路由使用 forChild 而不是 forRoot
export const appRouting = RouterModule.forRoot(routes);
```

在根模块中引入路由

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

## 加载路由

在根组件或当前组件的模板中

```html
<router-outlet></router-outlet>
```

## 链接及访问

```html
<a routerLink="/detail/1" routerLinkActive="active">detail</a>
<a [routerLink]="['/detail', news.id]">{{news.title}}</a>
```

`routerLinkActive="active"` 即在本路由激活时添加类 `.active`

```ts
import { Router } from '@angular/router';
// ...
constructor(private router: Router) {}

// ...

this.router.navigate(['/detail', this.news.id])
```

navigateByUrl 方法指向完整的绝对路径

