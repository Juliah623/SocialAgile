import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventosComponent } from './eventos/eventos.component';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-body',
  template: '<router-outlet (activate)="onActivate($event)"></router-outlet>',
})

export class BodyComponent implements OnInit {
  private idPage: Number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['Principal/Eventos']);
  }

  onActivate(componentRef) {
    this.idPage = componentRef.sayhello();
  }
  changeidPage() {
    return this.idPage;
  }
}
