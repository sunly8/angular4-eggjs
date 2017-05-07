import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {

  public parentValue: string = 'aaa'
  public c: string = ''

  constructor(
  ) { }

  ngOnInit() {

  }

  chileDate(e) {
    this.c = e
  }


  // json方式传值给子组件
  json = {
    name: "zhangsan",
    profile: {
      mobile:888
    }
  }

}
