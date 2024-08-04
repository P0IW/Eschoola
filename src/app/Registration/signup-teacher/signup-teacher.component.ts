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
    'Arabic',
    'English',
    'French',
    'Geography',
    'German',
    'History',
    'Italian',
    'Mathematic',
    'Philosophy',
    'Physics',
    'Science',
    'Spanish'
  ].sort();

  languages: string[] = ['Arabic', 'English', 'French'];

  nationalities: string[] = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia-Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma (Myanmar)",
    "Burundi",
    "Byelorussia (Belarus)",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Cocos Island",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Czechoslovakia",
    "Democratic Republic of Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Germany",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Federated States of Micronesia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "Gabon",
    "Gambia",
    "Gaza Strip",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Heard and McDonald Islands",
    "Holland",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast (Cote D'Ivoire)",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kampuchea",
    "Kazakhstan",
    "Kenya",
    "Kirghizia (Kyrgyzstan)",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Midway Islands",
    "Moldavia (Moldova)",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "No Nationality",
    "North Korea",
    "Norway",
    "Not Designated by IJ",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "People's Republic of Benin",
    "People's Republic of the Congo",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of the Marshall Islands",
    "Romania",
    "Russia",
    "Rwanda",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovak Republic",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "Soviet Union",
    "Spain",
    "Sri Lanka",
    "St. Kitts, West Indies",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Vincent and the Grenadines",
    "Stateless - Alien Unable to Name a Country",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan (Tadzhik)",
    "Tanzania",
    "Thailand",
    "The Republic of Palau",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Unknown Nationality",
    "Upper Volta",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Western Sahara",
    "Western Samoa",
    "Yemen",
    "Yugoslavia",
    "Zaire",
    "Zambia",
    "Zimbabwe"
  ];

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