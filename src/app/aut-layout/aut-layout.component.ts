import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthHeaderComponent } from '../home/auth-header/auth-header.component';

@Component({
  selector: 'app-aut-layout',
  standalone: true,
  imports: [RouterOutlet, AuthHeaderComponent],
  templateUrl: './aut-layout.component.html',
  styleUrl: './aut-layout.component.css'
})
export class AuthLayoutComponent {

}
