# angular4 http RxJS Observable observer

Observable 可观察对象(观察者们), Observer 观察者

首先学会 Http 类的用法

1. 组件中引入 Http

```ts
// 引入模块
import { Http } from "@angular/http";
// 注入
@Injectable()
export class ApiService {
  constructor(public http: Http){}
```

2. 使用方法, 通过 angular http 返回的就是一个 Observable

```ts
this.http
      //map 操作符返回一个新的 Observable 对象
      .map((r, err) => { return r })
      //filter 操作符执行过滤操作，然后又返回一个新的 Observable 对象
      .filter(r => r.length >= 2)
      // 抖动时间
      .debounceTime(1000)
      //subscribe 操作符, 启动订阅
      .subscribe( //订阅
        r => {
          // r 接收订阅成功后返回的数据
        },
        err => {
          // 错误时的数据
        })
      // 错误处理
      .catch(err=>{})
```

## 好吧, 这个我知道, 怎么自己创建一个呢?

```ts
// 创建一个观察者
const myserver = (observer) => {
  // 返回数据
  observer.next('data')
  // 返回错误
  observer.error()
  // 结束
  observer.complete()
  // 关闭
  observer.closed()
}

// 建立 Observable
const obs = new Observable(myserver)
// 订阅
obs.subscribe(r =>{ console.log(r)})
```

下面的 myhttp 函数演示了从一个 Get 请求获取 json 并缓存下来的例子, 

```ts
let mydata
myhttp(): Observable<any> {
  if (mydata) {
    // 将缓存的数据 mydata 以 Observable 返回
    return new Observable((server: Observer<any>) => {
      server.next(mydata)
      server.complete()
    })
  } else {
    // 通过 Angular Http 获取数据
    return this.http.get('data.json')
    .map(r => {
      // 写入本地 mydata
      mydata = r
      return r
    })
  }
}
```