import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkSummaryComponent } from './park-summary.component';

describe('ParkSummaryComponent', () => {
  let component: ParkSummaryComponent;
  let fixture: ComponentFixture<ParkSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
