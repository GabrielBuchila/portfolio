import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  sList_images: string[] = [
    'assets/images/SList/1.png',
    'assets/images/SList/2.png',
    'assets/images/SList/3.png',
    'assets/images/SList/4.png',
    'assets/images/SList/5.png',
    'assets/images/SList/6.png',
    'assets/images/SList/7.png',
    'assets/images/SList/8.png'
  ];

  classifier_images: string[] = [
    'assets/images/Classifier/1.jpg',
    'assets/images/Classifier/2.jpg',
    'assets/images/Classifier/3.jpg',
    'assets/images/Classifier/4.jpg'
  ];

  currentIndexSlist = 0;
  currentIndexClassifier = 0;

  constructor() {
    setInterval(() => this.nextSlideSlist(), 3000); // Change slide every 3 seconds
    setInterval(() => this.nextSlideClassifier(), 3000); // Change slide every 3 seconds
  }

  nextSlideSlist() {
    this.currentIndexSlist = (this.currentIndexSlist + 1) % this.sList_images.length;
  }

  nextSlideClassifier() {
    this.currentIndexClassifier = (this.currentIndexClassifier + 1) % this.classifier_images.length;
  }

  prevSlideSlist() {
    this.currentIndexSlist = (this.currentIndexSlist - 1 + this.sList_images.length) % this.sList_images.length;
  }

  prevSlideClassifier() {
    this.currentIndexClassifier = (this.currentIndexClassifier - 1 + this.classifier_images.length) % this.classifier_images.length;
  }

}
