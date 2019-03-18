import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// @Component是个装饰器函数，用于为该组件指定Angular所需的元数据
@Component({
  selector: 'app-heroes', // 组件选择器
  templateUrl: './heroes.component.html', // 组件模板文件
  styleUrls: ['./heroes.component.css'] // 组件私有CSS
})

// 一定要export这个组件类，以便于在其他地方导入它
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: '盖伦-Galenus'
  };

  constructor() { }

  // ngOnInit是一个生命周期钩子，Angular在创建完组件后很快就会调用ngOnInit，可以放置初始化逻辑
  ngOnInit() {
  }

}
