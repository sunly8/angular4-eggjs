// Input 接收值 
// OnChanges 检测值变化
// 向父组件传值需要引入 EventEmitter
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],

})

// 注意要添加 Input, OnChanges 接口
// 向父组件传值用 Output
export class ChildComponent implements OnInit, Input, OnChanges, Output {

  // 接收 父组件通过 [toChild]="xxx" 传来的值
  @Input() toChild: string

  // json方式
  @Input() jsonData: object

  public myValue: string

  ngOnInit() {
    // 初始化组件时将接收到的值赋给本组件变量
    this.myValue = this.toChild
  }

  ngOnChanges(toChild) {
    // toChild 发生变化时将接收到的值赋给本组件变量
    this.myValue = this.toChild
  }



  // 向父组件传值
  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>()

  myclick() {
    this.myEvent.emit('子组件数据' + (new Date()).getTime().toString())
  }

}
