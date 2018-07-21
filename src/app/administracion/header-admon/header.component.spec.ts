import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderadmonComponent } from './header-admon.component';

describe('HeaderComponent', () => {
  let component: HeaderadmonComponent;
  let fixture: ComponentFixture<HeaderadmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderadmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderadmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
