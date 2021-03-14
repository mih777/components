import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  notify: string = ''
  alert: string = 'Вы авторизовались !'

  constructor() { }

  ngOnInit(): void {
  }

}
