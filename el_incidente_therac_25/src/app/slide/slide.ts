import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide} from '../models/slide';


@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.html',
  styleUrls: ['./slide.css']
})
export class SlideComponent {
  @Input() slide!: Slide;

  get contentParagraphs(): string[] {
    if (this.slide.paragraphs && this.slide.paragraphs.length > 0) {
      return this.slide.paragraphs;
    }
    if (this.slide.text) {
      return [this.slide.text];
    }
    return [];
  }
}