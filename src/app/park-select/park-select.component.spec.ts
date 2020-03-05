import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkSelectComponent } from './park-select.component';

describe('ParkSelectComponent', () => {
  let component: ParkSelectComponent;
  let fixture: ComponentFixture<ParkSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
