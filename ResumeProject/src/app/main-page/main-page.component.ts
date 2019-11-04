import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  name = 'Кто-нибудь';
  specialization = 'Web Frontent Developer';
  // tslint:disable-next-line:max-line-length
  img = 'https://www.ivi.ru/titr/uploads/2016/09/01/d2aedf9fa551143a0f006f2187cf376f.jpg/1400x0';

  constructor() { }

  ngOnInit() {
  }

}
