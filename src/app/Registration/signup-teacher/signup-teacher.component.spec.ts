import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTeacherComponent } from './signup-teacher.component';

describe('SignupTeacherComponent', () => {
  let component: SignupTeacherComponent;
  let fixture: ComponentFixture<SignupTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
