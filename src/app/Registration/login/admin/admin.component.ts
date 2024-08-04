
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './../../../Services/auth.service';
import { AuthHeaderComponent } from '../../../home/auth-header/auth-header.component';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AuthHeaderComponent],
  providers: [AuthService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminCodeForm!: FormGroup;
  adminLoginForm!: FormGroup; 
  loginError: string = '';
  showAdminForm: boolean = false;

  private readonly ADMIN_SECRET_CODE = 'ADMIN123';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.adminCodeForm = this.fb.group({
      secretCode: ['', Validators.required]
    });

    this.adminLoginForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      img: [''],
      nationality: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  checkAdminCode(): void {
    const { secretCode } = this.adminCodeForm.value;
    if (secretCode === this.ADMIN_SECRET_CODE) {
      this.showAdminForm = true;
      this.loginError = '';
    } else {
      this.loginError = 'Invalid admin code';
      this.showAdminForm = false;
    }
  }

  onSubmit(): void {
    if (this.adminLoginForm.valid) {
      this.loginAdmin();
    } else {
      this.adminLoginForm.markAllAsTouched();
    }
  }

  loginAdmin(): void {
    const adminData = this.adminLoginForm.value;
    this.authService.loginAdmin(adminData).subscribe({
      next: () => {
        this.router.navigate(['/admin-dashboard']);
      },
      error: (error: any) => {
        this.loginError = 'Invalid admin credentials';
        console.error('Admin login error:', error);
      }
    });
  }
}