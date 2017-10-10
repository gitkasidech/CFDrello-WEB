import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourdashboardComponent } from './yourdashboard.component';

describe('YourdashboardComponent', () => {
  let component: YourdashboardComponent;
  let fixture: ComponentFixture<YourdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
