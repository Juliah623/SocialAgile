import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiComponent } from './idi.component';

describe('IdiComponent', () => {
  let component: IdiComponent;
  let fixture: ComponentFixture<IdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
