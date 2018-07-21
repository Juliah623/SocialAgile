import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteradmonComponent } from './footer-admon.component';

describe('FooterComponent', () => {
  let component: FooteradmonComponent;
  let fixture: ComponentFixture<FooteradmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteradmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteradmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
