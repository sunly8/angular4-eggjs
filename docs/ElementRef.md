# angular4 @ViewChild ElementRef  renderer2 invokeElementMethod

angular 如何操作 DOM ? 这是一个问题, 熟练了 Jquery 就会想引入 Jquery 去操作, 但是这不是一个好办法.

先看看看 ElementRef 和 renderer2 是否满足你的需求:

## 选择组件内节点

```html
<!--视图  -->
<div #mydiv><input></div>
```

```ts
// 选择
@ViewChild('mydiv') mydiv: ElementRef

// 返回原生节点
let el = this.mydiv.nativeElement // 

// 使用原生方法
let ipt = el.querySelector('input')

// 调用节点的方法
ngAfterViewInit() { //视图加载之后
  this.renderer2.invokeElementMethod(ipt, 'focus')
}
```

## @ViewChild @ContentChild @ViewChildren @ContentChildren 又是什么

@ViewChild 选择组件模板内的节点

@ContentChild 选择当前组件引用的子组件 `@ContentChild(组件名)`

而 @ViewChildren @ContentChildren 则为对应的复数

## renderer2

```ts
// 添加类
this.renderer2.addClass(el, 'active')
// 移除了类
this.renderer2.removeClass(el, 'active')
// 设置样式
this.renderer2.setStyle(el, 'height', '10px')
// 移除样式
this.renderer2.removeStyle(el, 'height')
// 设置属性
this.renderer2.setAttribute(el, 'data-id', 'id')
// 移除属性
this.renderer2.removeAttribute(el, 'data-id')
// 设置值
this.renderer2.setValue(ipt, 'some str')
// 监听事件
this.renderer2.listen(el, 'click', (e)=>{console.log(e)}) //el|'window'|'document'|'body'

// 其他类似
createElement 创建元素
createComment 动态创建组件
createText 创建文本节点
destroyNode 销毁节点
appendChild 插入子节点
insertBefore (parent: any, newChild: any, refChild: any): void
removeChild(parent: any, oldChild: any): void 移除子元素
selectRootElement(selectorOrNode: string|any): any
parentNode(node: any): any
nextSibling(node: any): any
```

虽然大面积地操作dom没有 Jquery 方便, 比如要做一个编辑器, 但是常规的用途建议使用 renderer2 而不是 引入Jquery