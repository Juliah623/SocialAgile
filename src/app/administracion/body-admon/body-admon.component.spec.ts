import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyadmonComponent } from './body-admon.component';

describe('BodyComponent', () => {
  let component: BodyadmonComponent;
  let fixture: ComponentFixture<BodyadmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyadmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyadmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
