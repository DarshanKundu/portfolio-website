import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExpComponent } from './professional-exp.component';

describe('ProfessionalExpComponent', () => {
  let component: ProfessionalExpComponent;
  let fixture: ComponentFixture<ProfessionalExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalExpComponent]
    });
    fixture = TestBed.createComponent(ProfessionalExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
