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
      images: ['assets/img/diapositiva_1_1.png'],
      footerText:'Diapositiva_1'
    },
    {
      title: 'Origen y Contexto',
      text: 'Reemplazo de hardware por softwar. Aprobación rápida por equivalencia',
      paragraphs:['El Therac‑25, lanzado en 1983, fue el primer modelo de AECL que suprimió prácticamente todos los bloqueos físicos (interlocks) utilizados en sus predecesores (Therac‑6/20), confiando todo en controles electrónicos y software', 
                  'Este cambio fue acreditado por la FDA mediante un “equivalente pre‑mercado” ya que se basaba en software y hardware previamente existentes, lo cual evitó pruebas rigurosas – aunque internamente la arquitectura había cambiado drásticamente '
      ],
      images: ['assets/img/therac_25_origenes.png']
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
      text: 'El operador y la terminal',
      paragraphs:['El operador ingresaba los datos del tratamiento a través de un teclado y una interfaz tipo terminal verde monocroma. Era una especie de menú con texto donde se elegía el tipo de haz, la dosis, la posición del paciente, etc. Se podía corregir rápidamente un dato mal ingresado usando la tecla "↑" (flecha arriba) para editar.'
      , 'Si el operador era rápido y modificaba un parámetro (por ejemplo, de "haz de electrones" a "haz de rayos X") usando la flecha ↑, la interfaz mostraba el cambio, pero el estado interno del software no actualizaba correctamente. Esto generaba un "race condition" (condición de carrera): dos procesos ejecutándose casi al mismo tiempo, donde uno no alcanzaba a actualizar al otro.', 
    'Resultado: el sistema pensaba que debía usar un haz de baja energía (electrones), pero no activaba el dispersor para rayos X, dejando pasar una dosis 100 veces más potente directamente al cuerpo del paciente.'],
      images: ['assets/img/Terminal_DEC _VT-100.png']
    },
    {
      title: 'Mensaje típico que veía el operador:',
      text: 'En la pantalla de la terminial de operador se disparaban mensajes de error inentendibles por el usuario y que además no se detallaban en la documentación.',
      paragraphs: ['MALFUNCTION 54 \n NO DOSE DELIVERED', 'Traducción humana: \n Parece que no se administró la dosis. Vuelva a intentarlo. \n Pero en realidad… ¡el paciente ya había recibido una descarga letal de radiación!'],
      images: ['assets/img/mensaje_de_error.png']
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