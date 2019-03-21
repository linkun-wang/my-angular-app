import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// AppComponent是根组件
import { AppComponent } from './app.component';
// 每个组件都必须声明在（且只能声明在）一个NgModule中
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// @NgModule装饰器，接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [ // 配置当前项目运行的组件
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [ // imports数组是该应用所需外部模块的列表
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], // 配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图（根组件），通过引导根模块AppModule来启动应用
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
