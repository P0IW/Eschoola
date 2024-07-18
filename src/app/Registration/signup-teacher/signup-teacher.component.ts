import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { AuthHeaderComponent } from '../../home/auth-header/auth-header.component';


@Component({
  selector: 'app-signupTeacher',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AuthHeaderComponent],
  templateUrl: './signup-teacher.component.html',
  styleUrl: './signup-teacher.component.css'
})
export class SignupTeacherComponent {
  signupTeacherForm: FormGroup;
  signupTeacherError: string = '';
  selectedFile: File | null = null;
  currentPage = 1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signupTeacherForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNum: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      typeOfJob: ['', Validators.required],
      category: ['', Validators.required],
      skills: ['', Validators.required],
      experience: ['', Validators.required],
      files: [null]
    });
  }

  categories: string[] = [
    'English',
    'French',
    'Geography',
    'German',
    'History',
    'Italian',
    'Mathematic',
    'Philosophy',
    'Science',
    'Spanish'
  ].sort();

  skills: string[] = ['Communication', 'Problem Solving', 'Creativity'];

  experienceLevels: string[] = ['0-1 years', '1-3 years', '3-5 years', '5+ years'];

  nextPage() {
    if (this.currentPage < 2) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  onSubmit(): void {
    if (this.signupTeacherForm.valid) {
      this.signupTeacher();
    } else {
      this.signupTeacherForm.markAllAsTouched();
    }
  }

  signupTeacher(): void {
    this.authService.signupTeacher(this.signupTeacherForm.value).subscribe({
      next: (response: any) => {
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        this.signupTeacherError = 'Signup failed. Please try again.';
        console.error('Signup error:', error);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.signupTeacherForm.patchValue({
        proofFile: this.selectedFile,
      });
    }
  }
}