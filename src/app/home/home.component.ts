import { ScrollableMenuComponent } from './scrollable-menu/scrollable-menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, ScrollableMenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
// implements AfterViewInit
 {

  // @ViewChild('scrollContainer', { static: false }) scrollContainer: ElementRef<HTMLElement>;

  // ngAfterViewInit() {
  //   if (this.scrollContainer) { 
  //     this.setGradientMask();
  //   } else {
  //     console.warn('scrollContainer not found!');
  //   }
  // }

  // scroll(direction: 'left' | 'right') {
  //   const container = this.scrollContainer.nativeElement;
  //   const scrollAmount = direction === 'left' ? -200 : 200;
  //   container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  // }

  // private setGradientMask() {
  //   const container = this.scrollContainer.nativeElement;
  //   container.style.maskImage = 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)';
  //   container.style.webkitMaskImage = 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)';
  // }
}
