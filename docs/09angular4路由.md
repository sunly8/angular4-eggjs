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
<a [routerLink]="[{ outlets: { let2: ['news'] } }]">Contact</a>
```

`routerLinkActive="active"` 即在本路由激活时添加样式 `.active`

或

```ts
import { Router } from '@angular/router';
// ...
constructor(private router: Router) {}

// ...

this.router.navigate(['/detail', this.news.id])
this.router.navigate([{ outlets: { let2: null }}]);
```

navigateByUrl 方法指向完整的绝对路径


## 理由守卫

适用于后台管理等需要登录才能使用的模块

创建一个认证服务

```ts
// app/auth.service.ts

import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  canActivate() {
    // 这里判断登录状态, 返回 true 或 false
    return true;
  }
}
```

添加或修改理由配置

```ts
// app/app.router.ts

// 增加 CanActivate
import { CanActivate ... } from '@angular/router';


  // 配置中增加 canActivate 如:
  { path: 'admin', canActivate:[AuthService] ... }

```


## 退出守卫

适合于编辑器修改后的保存提示等场景

```ts
// app/deac.service.ts

import { Injectable }     from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

// CanDeactivateComponent 是定义的接口,见下段代码
import { CanDeactivateComponent } from './can-deactivate.omponent';

@Injectable()
export class DeacService implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(
    canDeactivateComponent: CanDeactivateComponent,
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ) {
    // 目标路由和当前路由
    console.log(activatedRouteSnapshot);
    console.log(routerStateSnapshot);

    // 判断并返回
    return canDeactivateComponent.canDeactivate ? canDeactivateComponent.canDeactivate() : true

  }
}
```

```ts
// can-deactivate.omponent.ts

// 接口组件, 返回 true 或 false 如表单发生改变则调用对话框服务
export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
```

路由配置

```ts
{
  path: ...,
  canDeactivate: [DeacService],
  component: ...
}
```

模块中添加服务

```ts
providers: [
  DeactivateGuardService
]
```