import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/**
 *  @Injectable() 装饰器，它把这个类标记为依赖注入系统的参与者之一
 */
@Injectable({
  providedIn: 'root' // 用根注入器将你的服务注册成为提供商
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('From HelloService: fetched heroes.');
    return of(HEROES)
  }
}
