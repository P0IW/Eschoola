import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-scrollable-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './scrollable-menu.component.html',
  styleUrl: './scrollable-menu.component.css'
})
export class ScrollableMenuComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.setGradientMask();
  }

  scroll(direction: 'left' | 'right') {
    const container = document.getElementById('scrollContainer');
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  private setGradientMask() {
    const container = document.getElementById('scrollContainer');
    if (container) {
      container.style.maskImage = 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)';
      container.style.webkitMaskImage = 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)';
    }
  }
}

