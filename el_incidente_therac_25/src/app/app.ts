import { Component } from '@angular/core';
import { Presentation } from './presentation/presentation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Presentation],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}