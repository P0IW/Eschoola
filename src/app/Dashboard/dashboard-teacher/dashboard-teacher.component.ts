  import { CommonModule } from '@angular/common';
  import { Component, Input } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClient, HttpClientModule } from '@angular/common/http';
  import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

  interface City {
    en: string;
    ar: string;
  }

  interface Degree {
   id: string;
   name: string;
 }

  @Component({
    selector: 'app-dashboard-teacher',
    standalone: true,
    imports: [ CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
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
    showAdditionalFields: boolean = false;
    showEducationModal: boolean = false;
    educationForm: FormGroup;
    degrees: Degree[] = [];

    cities: City[] = [
      { en: 'Algiers', ar: 'الجزائر' },
    { en: 'Oran', ar: 'وهران' },
    { en: 'Constantine', ar: 'قسنطينة' },
    { en: 'Annaba', ar: 'عنابة' },
    { en: 'Blida', ar: 'البليدة' },
    { en: 'Batna', ar: 'باتنة' },
    { en: 'Setif', ar: 'سطيف' },
    { en: 'Sidi Bel Abbès', ar: 'سيدي بلعباس' },
    { en: 'Béjaïa', ar: 'بجاية' },
    { en: 'Tlemcen', ar: 'تلمسان' },
    { en: 'Tizi Ouzou', ar: 'تيزي وزو' },
    { en: 'Béchar', ar: 'بشار' },
    { en: 'Mostaganem', ar: 'مستغانم' },
    { en: 'Skikda', ar: 'سكيكدة' },
    { en: 'Tiaret', ar: 'تيارت' },
    { en: 'Ghardaïa', ar: 'غرداية' },
    { en: 'Jijel', ar: 'جيجل' },
    { en: 'Laghouat', ar: 'الأغواط' },
    { en: 'Biskra', ar: 'بسكرة' },
    { en: 'M\'Sila', ar: 'المسيلة' },
    { en: 'Bouira', ar: 'البويرة' },
    { en: 'Adrar', ar: 'أدرار' },
    { en: 'Médéa', ar: 'المدية' },
    { en: 'El Oued', ar: 'الوادي' },
    { en: 'Ain Defla', ar: 'عين الدفلى' },
    { en: 'Relizane', ar: 'غليزان' },
    { en: 'Bordj Bou Arréridj', ar: 'برج بوعريريج' },
    { en: 'El Tarf', ar: 'الطارف' },
    { en: 'Tipaza', ar: 'تيبازة' },
    { en: 'Mila', ar: 'ميلة' },
    { en: 'Saïda', ar: 'سعيدة' },
    { en: 'Naama', ar: 'النعامة' },
    { en: 'Tindouf', ar: 'تندوف' },
    { en: 'Khenchela', ar: 'خنشلة' },
    { en: 'Souk Ahras', ar: 'سوق أهراس' },
    { en: 'Ain Temouchent', ar: 'عين تيموشنت' },
    { en: 'Guelma', ar: 'قالمة' },
    { en: 'Mascara', ar: 'معسكر' },
    { en: 'Tissemsilt', ar: 'تيسمسيلت' },
    { en: 'Ouargla', ar: 'ورقلة' },
    { en: 'Illizi', ar: 'إليزي' },
    { en: 'Tamanrasset', ar: 'تمنراست' },
    { en: 'Chlef', ar: 'الشلف' },
    { en: 'Boumerdès', ar: 'بومرداس' },
    { en: 'El Bayadh', ar: 'البيض' },
    { en: 'Djelfa', ar: 'الجلفة' },
    { en: 'Oum El Bouaghi', ar: 'أم البواقي' },
    { en: 'Tebessa', ar: 'تبسة' },
    { en: 'Ain Sefra', ar: 'عين الصفراء' },
    { en: 'Tarfaya', ar: 'طرفاية' },
    { en: 'Laghouat', ar: 'الأغواط' },
    { en: "M'Sila", ar: 'المسيلة' },
    { en: 'Bordj Bou Arreridj', ar: 'برج بوعريريج' },
    { en: 'El Tarf', ar: 'الطارف' },
    { en: 'Tizi Ouzou', ar: 'تيزي وزو' },
    { en: 'Tlemcen', ar: 'تلمسان' },
    { en: 'Sidi Bel Abbès', ar: 'سيدي بلعباس' },
    { en: 'Sidi Bel Abbès ', ar: 'بشار' },
    ];

    months = [
      { value: '01', name: 'January' },
      { value: '02', name: 'February' },
      { value: '03', name: 'March' },
      { value: '04', name: 'April' },
      { value: '05', name: 'May' },
      { value: '06', name: 'June' },
      { value: '07', name: 'July' },
      { value: '08', name: 'August' },
      { value: '09', name: 'September' },
      { value: '10', name: 'October' },
      { value: '11', name: 'November' },
      { value: '12', name: 'December' },
    ];

    constructor(private http: HttpClient, private fb: FormBuilder) {
      this.certificationForm = this.fb.group({
        name: ['', Validators.required],
        issueDate: ['', Validators.required],
        expirationDate: [''],
        file: [null]
      });
      this.employmentForm = this.fb.group({})

      this.form = this.fb.group({
        city: [''],
        month: [''],
        year: [''],
        degree: ['']
        
      });
      this.form = this.fb.group({
         startMonth: [''],
         startYear: [''],
         endMonth: [''],
         endYear: [''],
         currentlyWorking: [false]
       });
      this.educationForm = this.fb.group({});
    }

    ngOnInit(): void {
      this.fetchUserData();
      this.fetchSkills(); 
      this.fetchCertifications();
      this.generateYears();
      this.employmentForm.get('currentlyWorking')?.valueChanges.subscribe(value => {
         if (value) {
         this.employmentForm.get('endMonth')?.disable();
         this.employmentForm.get('endYear')?.disable();
         } else {
         this.employmentForm.get('endMonth')?.enable();
         this.employmentForm.get('endYear')?.enable();
         }
      });
      this.fetchDegrees();
    }

    fetchUserData(): void {
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
      
      this.http.get<string[]>('backend-api-url/skills').subscribe(
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
      this.http.post('backend-api-url/save-skills', { skills: this.selectedSkills }).subscribe(
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
        this.http.post('backend-api-url/save-certification', this.certificationForm.value).subscribe(
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
      this.http.get<any[]>('backend-api-url/certifications').subscribe(
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

    // Year Calculation
    generateYears(): void {
      const currentYear = new Date().getFullYear();
      const startYear = 1900;
      for (let year = currentYear; year >= startYear; year--) {
        this.years.push(year);
      }
    }

   // Education Modal
   openEducationModal(): void {
      this.showEducationModal = true;
   }
         
   closeEducationModal(): void {
      this.showEducationModal = false;
      this.educationForm.reset();
   }
         
   onEducationFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
         if (input.files && input.files[0]) {
            const file = input.files[0];
            this.educationForm.patchValue({ file: file });
         }
   }
         
   saveEducation(): void {
      if (this.educationForm.valid) {
         const formData = new FormData();
         Object.keys(this.educationForm.value).forEach(key => {
            formData.append(key, this.educationForm.value[key]);
         });
                 
         console.log('Education data:', this.educationForm.value);
         this.http.post('backend-api-url/save-education', this.educationForm.value).subscribe(
            () => {
               console.log('Education saved successfully');
               this.closeEducationModal();
            },
            (error) => {
               console.error('Error saving education:', error);
            }
         );
         this.closeEducationModal();
      }
   }

   fetchDegrees(): void {
      this.http.get<Degree[]>('API_URL/degrees').subscribe(
        (data) => {
          this.degrees = data;
        },
        (error) => {
          console.error('Error fetching degrees:', error);
        }
      );
    }

  }
