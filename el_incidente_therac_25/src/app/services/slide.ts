import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private slides: Slide[] = [
    {
      title: '¿Qué fue el Therac-25?',
      text: 'El Therac-25 fue un acelerador lineal de radioterapia producido por AECL (Atomic Energy of Canada Limited), sucesor de los modelos Therac-6 y Therac-20. Prometía mayor seguridad gracias al uso intensivo de software… grave error. ',
      paragraphs: [
        'El aparato estuvo comprometido en al menos seis accidentes entre junio de 1985 y enero de 1987, en los que varios pacientes recibieron sobredosis de radiación-',
        'Tres de los pacientes murieron como consecuencia directa en el que para entonces fue el accidente más grave en los 35 años de los aceleradores lineales médicos.',
        'Estos accidentes pusieron en duda la fiabilidad del control por software de sistemas de seguridad crítica, convirtiéndose en caso de estudio en la informática médica y en la ingeniería de software',
        //'Párrafo'
      ],
      images: ['assets/img/diapositiva_1_1.png']
    },
    {
      title: 'Origen y Contexto',
      text: 'Reemplazo de hardware por softwar. Aprobación rápida por equivalencia',
      paragraphs:['El Therac‑25, lanzado en 1983, fue el primer modelo de AECL que suprimió prácticamente todos los bloqueos físicos (interlocks) utilizados en sus predecesores (Therac‑6/20), confiando todo en controles electrónicos y software', 
                  'Este cambio fue acreditado por la FDA mediante un “equivalente pre‑mercado” ya que se basaba en software y hardware previamente existentes, lo cual evitó pruebas rigurosas – aunque internamente la arquitectura había cambiado drásticamente '],
    },
    {
      title: '¿Cómo funcionaba el Therac‑25?',
      text: 'Usaba dos modos de operación:',
      paragraphs:['Haz de electrones (modo directo) → baja energía, radiación superficial.', 'Haz de fotones (modo X) → alta energía, radiación profunda. Necesitaba un dispersor de haz para no quemar el tejido.',
        'Proceso normal de funcionamiento: \n 1. El operador introducía los datos del paciente en la interfaz.\n 2. El software programaba la energía y el modo.\n 3. El hardware debía mover físicamente el dispersor si se usaban fotones.\n 4. Se liberaba la radiación.'
      ],
      images: ['assets/img/Medical_Linac_Animation.gif']
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