import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OktaCheckComponentComponent } from './okta-check-component.component';

describe('OktaCheckComponentComponent', () => {
  let component: OktaCheckComponentComponent;
  let fixture: ComponentFixture<OktaCheckComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OktaCheckComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OktaCheckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
