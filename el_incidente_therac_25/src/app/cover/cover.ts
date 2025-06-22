import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cover',
  standalone: true,
  templateUrl: './cover.html',
  styleUrls: ['./cover.css']
})
export class CoverComponent {
  @Output() iniciar = new EventEmitter<void>();

  comenzar() {
    this.iniciar.emit();
  }
}