import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalComponent } from './legal.component';

describe('InfoComponent', () => {
  let component: LegalComponent;
  let fixture: ComponentFixture<LegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});