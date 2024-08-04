import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { AuthHeaderComponent } from "../../home/auth-header/auth-header.component";

@Component({
  selector: 'app-signup-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AuthHeaderComponent],
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})

export class SignupStudentComponent {
  signupForm: FormGroup;
  signupError: string = '';

  levels: string[] = [''];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      termsAccepted: [false, Validators.requiredTrue],
      newsletterSubscribe: [false]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.signup();
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  signup(): void {
    this.authService.signupStudent(this.signupForm.value).subscribe({
      next: (response: any) => {
        // Handle successful signup
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        this.signupError = 'Signup failed. Please try again.';
        console.error('Signup error:', error);
      }
    });
  }
}