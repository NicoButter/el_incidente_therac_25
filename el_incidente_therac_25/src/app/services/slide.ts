import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private slides: Slide[] = [
    {
      title: 'Introducción ¿Qué fue el Therac-25?',
      text: 'Máquina de radioterapia creada en los 80s para tratar cáncer. Diseñada para administrar dosis precisas de radiación.',
      paragraphs: [
        'Este es el primer párrafo.',
        'Aquí va el segundo párrafo con más información.',
        'También puedes incluir aquí una lista de ideas clave.',
        'Y hasta un ejemplo práctico del contenido.'
      ],
      images: ['assets/img/diapositiva_1_1.png']
    },
    {
      title: 'Contexto Histórico',
      text: 'Aquí va el texto sobre el contexto de los años 80 y la tecnología médica.'
    },
    {
      title: 'Funcionamiento del Therac-25',
      text: 'Aquí va el texto sobre cómo funcionaba el equipo.'
    },
    {
      title: 'Errores de Software',
      text: 'Aquí va el texto sobre los bugs críticos en el software.'
    },
    {
      title: 'Incidentes Reportados',
      text: 'Aquí va el texto sobre los accidentes y sus consecuencias.'
    },
    {
      title: 'Causas de los Fallos',
      text: 'Aquí va el texto sobre las causas técnicas y humanas.'
    },
    {
      title: 'Lecciones Aprendidas',
      text: 'Aquí va el texto sobre las mejoras en ingeniería de software.'
    },
    {
      title: 'Impacto en la Industria',
      text: 'Aquí va el texto sobre cambios en regulaciones y estándares.'
    },
    {
      title: 'Conclusión',
      text: 'Aquí va el texto con reflexiones finales.',
      backgroundUrl: 'assets/img/fondo_conclusion.jpg',
      footerText: 'Therac-25 - Estudio de Caso | Nicolás Butterfield'
    }
  ];

  getSlides(): Slide[] {
    return this.slides;
  }
}