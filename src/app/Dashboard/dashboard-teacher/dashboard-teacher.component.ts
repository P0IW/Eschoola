import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-dashboard-teacher',
  standalone: true,
  imports: [ CommonModule, RouterModule,],
  templateUrl: './dashboard-teacher.component.html',
  styleUrl: './dashboard-teacher.component.css'
})
export class DashboardTeacherComponent {
  selectedImage: string | ArrayBuffer | null = null;
  firstName: string = '';
  lastName: string = '';
  nickname: string = '';
  PDFName: string = '';
  availableSkills: string[] = []; // List of skills from backend
  selectedSkills: string[] = []; // Skills selected by user
  showSkillsModal: boolean = false; // Toggle visibility of modal

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUserData();
    this.fetchSkills(); // Fetch skills when component initializes
  }

  fetchUserData(): void {
    // Example user data fetching
    this.firstName = 'Test'; // Replace with real data
    this.lastName = 'Try';   // Replace with real data
    this.nickname = '@im_testing'; // Replace with real data
  }

  fetchSkills(): void {
    // Fetch the list of available skills from the backend
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
    // Save the selected skills to the backend
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

  
}
