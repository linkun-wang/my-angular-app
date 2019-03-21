import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // 初始化路由器，并让它开始监听浏览器中的地址变化， forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
