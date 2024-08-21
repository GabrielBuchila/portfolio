import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  images: string[] = [
    'assets/images/SList/1.png',
    'assets/images/SList/2.png',
    'assets/images/SList/3.png',
    'assets/images/SList/4.png',
    'assets/images/SList/5.png',
    'assets/images/SList/6.png',
    'assets/images/SList/7.png',
    'assets/images/SList/8.png'
  ];

  currentIndex = 0;

  constructor() {
    setInterval(() => this.nextSlide(), 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
