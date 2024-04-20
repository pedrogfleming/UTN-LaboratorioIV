import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdadComponent } from './form-edad.component';

describe('FormEdadComponent', () => {
  let component: FormEdadComponent;
  let fixture: ComponentFixture<FormEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEdadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
