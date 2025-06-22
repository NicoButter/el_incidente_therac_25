import { Injectable } from '@angular/core';
import { Slide } from './slide.model';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private slides: Slide[] = [
    {
      title: 'Introducción al Therac-25',
      text: '[Aquí va el texto sobre qué fue el Therac-25 y su propósito]',
      imageUrl: '[URL de la imagen, ej: assets/images/therac-25.jpg]'
    },
    {
      title: 'Contexto Histórico',
      text: '[Aquí va el texto sobre el contexto de los años 80 y la tecnología médica]',
      imageUrl: ''
    },
    {
      title: 'Funcionamiento del Therac-25',
      text: '[Aquí va el texto sobre cómo funcionaba el equipo]',
      imageUrl: ''
    },
    {
      title: 'Errores de Software',
      text: '[Aquí va el texto sobre los bugs críticos en el software]',
      imageUrl: ''
    },
    {
      title: 'Incidentes Reportados',
      text: '[Aquí va el texto sobre los accidentes y sus consecuencias]',
      imageUrl: ''
    },
    {
      title: 'Causas de los Fallos',
      text: '[Aquí va el texto sobre las causas técnicas y humanas]',
      imageUrl: ''
    },
    {
      title: 'Lecciones Aprendidas',
      text: '[Aquí va el texto sobre las mejoras en ingeniería de software]',
      imageUrl: ''
    },
    {
      title: 'Impacto en la Industria',
      text: '[Aquí va el texto sobre cambios en regulaciones y estándares]',
      imageUrl: ''
    },
    {
      title: 'Conclusión',
      text: '[Aquí va el texto con reflexiones finales]',
      imageUrl: ''
    }
  ];

  getSlides(): Slide[] {
    return this.slides;
  }
}