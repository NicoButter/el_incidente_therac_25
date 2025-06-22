import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideService } from '../services/slide';
import { Slide } from '../models/slide';
import { CoverComponent } from '../cover/cover';
import { SlideComponent } from '../slide/slide';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, CoverComponent, SlideComponent],
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.css']
})
export class PresentationComponent implements OnInit {
  slides: Slide[] = [];
  currentSlide = 0;

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    this.slides = this.slideService.getSlides();
  }

  nextSlide(): void {
    if (this.currentSlide < this.slides.length) {
      this.currentSlide++;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}