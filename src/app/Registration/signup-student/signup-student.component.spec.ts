import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStudentComponent } from './signup-student.component';

describe('SignupStudentComponent', () => {
  let component: SignupStudentComponent;
  let fixture: ComponentFixture<SignupStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
