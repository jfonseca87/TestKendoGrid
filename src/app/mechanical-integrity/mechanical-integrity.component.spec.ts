import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalIntegrityComponent } from './mechanical-integrity.component';

describe('MechanicalIntegrityComponent', () => {
  let component: MechanicalIntegrityComponent;
  let fixture: ComponentFixture<MechanicalIntegrityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalIntegrityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
