import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsystemComponent } from './bookingsystem.component';

describe('BookingsystemComponent', () => {
  let component: BookingsystemComponent;
  let fixture: ComponentFixture<BookingsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
