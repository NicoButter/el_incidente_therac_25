import { Component } from '@angular/core';
import { PresentationComponent } from './presentation/presentation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PresentationComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}