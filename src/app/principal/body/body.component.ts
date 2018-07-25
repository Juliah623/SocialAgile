import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: '<router-outlet (activate)="onActivate($event)"></router-outlet>',
})

export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

