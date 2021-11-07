import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarApiComponent } from './nav-bar-api.component';

describe('NavBarApiComponent', () => {
  let component: NavBarApiComponent;
  let fixture: ComponentFixture<NavBarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
