import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-body',
  template: '<router-outlet (activate)="onActivate($event)"></router-outlet>',
})

export class BodyComponent implements OnInit {
  private idPage: Number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['Principal/Home']);
  }

  onActivate(HomeComponent) {
    this.idPage = HomeComponent.sayhello();
  }
  changeidPage() {
    return this.idPage;
  }
}



