import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtoolComponent } from './navtool.component';

describe('NavtoolComponent', () => {
  let component: NavtoolComponent;
  let fixture: ComponentFixture<NavtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
