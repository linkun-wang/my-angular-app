import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 这个 messageService 属性必须是公共属性，因为将会在模板中绑定它（Angular 只会绑定到组件的公共属性）
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
