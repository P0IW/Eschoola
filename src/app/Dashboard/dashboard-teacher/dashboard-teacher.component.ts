import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


interface Skill {
  name: string;
}


interface Certification {
  name: string;
  link: string;
}

interface GeneralInfo {
  financialReward: string;
  startDate: string;
}

interface Absence {
  type: string;
  used: number;
  total: number;
  color: string;
}

@Component({
  selector: 'app-dashboard-teacher',
  standalone: true,
  imports: [ CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard-teacher.component.html',
  styleUrl: './dashboard-teacher.component.css'
})
export class DashboardTeacherComponent {
  editHourlyRate: boolean = false;
  hourlyRate: number = 0;
  profileImage: string = '';
  name: string = 'Eschoola Name';
  birthDate: string = '1Jan, 1999  ';
  skills: Skill[] = [];
  newSkills: string = '';
  showSkillModal: boolean = false;
  certifications: Certification[] = [];
  generalInfo: GeneralInfo = { financialReward: '45', startDate: '2023-01-01' };
  phone: string = '';
  email: string = '';
  address: string = '';

  newSkill: string = '';
  newCertName: string = '';
  newCertLink: string = '';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleSkillModal() {
    this.showSkillModal = !this.showSkillModal;
    if (!this.showSkillModal) {
      this.newSkills = ''; // Clear the textarea when closing the modal
    }
  }

  addSkills() {
    const skillsArray = this.newSkills.split('\n').filter(skill => skill.trim() !== '');
    this.skills = [...this.skills, ...skillsArray.map(skill => ({ name: skill.trim() }))];
    this.toggleSkillModal();
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }


  addCertification() {
    if (this.newCertName.trim() && this.newCertLink.trim()) {
      this.certifications.push({ name: this.newCertName.trim(), link: this.newCertLink.trim() });
      this.newCertName = '';
      this.newCertLink = '';
    }
  }

  removeCertification(index: number) {
    this.certifications.splice(index, 1);
  }

  calculateAge(birthDate: string): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }
}
