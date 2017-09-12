import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnameComponent } from './dashboardname.component';

describe('DashboardnameComponent', () => {
  let component: DashboardnameComponent;
  let fixture: ComponentFixture<DashboardnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
