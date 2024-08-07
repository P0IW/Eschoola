  import { CommonModule } from '@angular/common';
  import { Component, Input } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
  import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-dashboard-teacher',
    standalone: true,
    imports: [ CommonModule, RouterModule, ReactiveFormsModule],
    templateUrl: './dashboard-teacher.component.html',
    styleUrl: './dashboard-teacher.component.css'
  })
  export class DashboardTeacherComponent {
    selectedImage: string | ArrayBuffer | null = null;
    firstName: string = '';
    lastName: string = '';
    nickname: string = '';
    PDFName: string = '';
    availableSkills: string[] = [];
    selectedSkills: string[] = []; 
    showSkillsModal: boolean = false; 
    showCertificationModal: boolean = false;
    certificationForm: FormGroup;
    form: FormGroup;
    showEmploymentModal: boolean = false;
    employmentForm: FormGroup;
    certifications: any[] = [];
    years: number[] = [];

    constructor(private http: HttpClient, private fb: FormBuilder) {
      this.certificationForm = this.fb.group({
        name: ['', Validators.required],
        issueDate: ['', Validators.required],
        expirationDate: [''],
        file: [null]
      });
      this.employmentForm = this.fb.group({})

      this.form = this.fb.group({
        month: [''],
        year: ['']
      });
    }

    ngOnInit(): void {
      this.fetchUserData();
      this.fetchSkills(); 
      this.fetchCertifications();
      this.form = this.fb.group({
        month: [''],
        year: ['']
      });

      const currentYear = new Date().getFullYear();
      for (let i = currentYear; i >= 1900; i--) {
        this.years.push(i);
      }
    }

    fetchUserData(): void {
      // Example user data fetching
      this.firstName = 'Test';
      this.lastName = 'Try';   
      this.nickname = '@im_testing';
    }

    onImageSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
    
      if (input.files && input.files[0]) {
        const file = input.files[0];
    
        const reader = new FileReader();
        reader.onload = () => this.selectedImage = reader.result;
    
        reader.readAsDataURL(file);
      }
    }

    onPDFSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        this.PDFName = file.name; 
      }
    }

      // methods for Skills

    fetchSkills(): void {
      
      this.http.get<string[]>('your-backend-api-url/skills').subscribe(
        (skills) => {
          this.availableSkills = skills;
        },
        (error) => {
          console.error('Error fetching skills:', error);
        }
      );
    }

    toggleSkill(skill: string): void {
      const index = this.selectedSkills.indexOf(skill);
      if (index === -1) {
        this.selectedSkills.push(skill);
      } else {
        this.selectedSkills.splice(index, 1);
      }
    }

    saveSkills(): void {
      this.http.post('your-backend-api-url/save-skills', { skills: this.selectedSkills }).subscribe(
        () => {
          console.log('Skills saved successfully');
          this.showSkillsModal = false;
        },
        (error) => {
          console.error('Error saving skills:', error);
        }
      );
    }

    // methods for certification 
    openCertificationModal(): void {
      this.showCertificationModal = true;
    }

    closeCertificationModal(): void {
      this.showCertificationModal = false;
      this.certificationForm.reset();
    }

    onCertificationFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        this.certificationForm.patchValue({ file: file });
      }
    }

    saveCertification(): void {
      if (this.certificationForm.valid) {
        const formData = new FormData();
        Object.keys(this.certificationForm.value).forEach(key => {
          formData.append(key, this.certificationForm.value[key]);
        });
        
        console.log('Certification data:', this.certificationForm.value);
        this.http.post('your-backend-api-url/save-certification', this.certificationForm.value).subscribe(
          () => {
            console.log('Certification saved successfully');
            this.closeCertificationModal();
          },
          (error) => {
            console.error('Error saving certification:', error);
          }
        );
        this.closeCertificationModal();
      }
    }

    // fetch certification
    fetchCertifications(): void {
      this.http.get<any[]>('your-backend-api-url/certifications').subscribe(
        (certifications) => {
          this.certifications = certifications;
        },
        (error) => {
          console.error('Error fetching certifications:', error);
        }
      );
    }

        // Employment Modal
    openEmploymentModal(): void {
      this.showEmploymentModal = true;
    }

    closeEmploymentModal(): void {
      this.showEmploymentModal = false;
      this.employmentForm.reset();
    }

    onEmploymentFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        this.employmentForm.patchValue({ file: file });
      }
    }

    saveEmployment(): void {
      if (this.employmentForm.valid) {
        const formData = new FormData();
        Object.keys(this.employmentForm.value).forEach(key => {
          formData.append(key, this.employmentForm.value[key]);
        });
        
        console.log('Employment data:', this.employmentForm.value);
        this.http.post('backend-api-url/save-employment', this.employmentForm.value).subscribe(
          () => {
            console.log('Employment saved successfully');
            this.closeEmploymentModal();
          },
          (error) => {
            console.error('Error saving employment:', error);
          }
        );
        this.closeEmploymentModal();
      }
    }

  }
