import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqdetailsComponent } from './reqdetails.component';

describe('ReqdetailsComponent', () => {
  let component: ReqdetailsComponent;
  let fixture: ComponentFixture<ReqdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
