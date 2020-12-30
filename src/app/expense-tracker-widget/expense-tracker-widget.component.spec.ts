import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerWidgetComponent } from './expense-tracker-widget.component';

describe('ExpenseTrackerWidgetComponent', () => {
  let component: ExpenseTrackerWidgetComponent;
  let fixture: ComponentFixture<ExpenseTrackerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTrackerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
