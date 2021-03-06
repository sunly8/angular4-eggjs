# typescript补课

## 字符串

```ts
// 多行字符串
var myString = '第一行
换行';

// 字符串模版
function test(template,name,age) {
  console.log(template,name,age)
}
var myname = 'programmer';
var getAge = function () {
  return 18;
}
test `hello my name is ${myname}, I am ${getAge() }`
```

## 类型参数

```ts
// rest and spread操作符
  // 可变参数
  function test(...args) {
    args.forEach(function (arg) {
        console.log(arg)
    })
  }
  test(1, 2, 3, 4);

  // 固定参数可变调用
  function test(a,b,c) {
    console.log(a,b,c);
  };
  var arr = [1, 2];
  test(...arr); //打印1,2,undefined
  var arr2 = [1, 2, 3, 4, 5, 6];
  test(...arr2); //只识别前三个参数,打印1,2,3
```

## generator函数

```ts
function* test(){
  console.log("start")
yield
  console.log("finish")
}
var test1 = test() //须将函数声明为变量使用此方法
test1.next()
```

## 箭头函数

```ts
(par)=>{
  console.log(par)
}
```

## 析构表达式

```ts
const {name,age,...others} = {name:'zhangsan',age:18,a:'a',b:'b','c'}
const [,num2,...others]=[1,2,3,4,5]
```

## 泛型

```ts
class Programmer{
  name;
  skill;
  work(){
    console.log("coding with "+this.skill)
  }
}

var myArr: Array<Programmer> = [] //声明myArr数组里只能放入Programmer类的元素
myArr[0] = new Programmer()
```

