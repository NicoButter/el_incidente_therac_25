import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private slides: Slide[] = [
    {
      title: '¿Qué fue el Therac-25?',
      text: `El Therac-25 fue un acelerador lineal de radioterapia producido por AECL (Atomic Energy of Canada Limited), sucesor de los 
            modelos Therac-6 y Therac-20. Prometía mayor seguridad gracias al uso intensivo de software… grave error. `,
      paragraphs: [
                  `El aparato estuvo comprometido en al menos seis accidentes entre junio de 1985 y enero de 1987, en los que varios pacientes recibieron 
                  sobredosis de radiación. Tres de los pacientes murieron como consecuencia directa en el que para entonces fue el accidente más grave en los 
                  35 años de los aceleradores lineales médicos. Estos accidentes pusieron en duda la fiabilidad del control por software de sistemas de 
                  seguridad crítica convirtiéndose en caso de estudio en la informática médica y en la ingeniería de software`
      ],
      images: [
                {
                  url: 'assets/img/diapositiva_1_1.png',
                  caption: 'El acelerador Therac-25 posicionando un paciente'
                }
      ]
    },
    {
      title: 'Origen y Contexto',
      text: 'Reemplazo de hardware por softwar. Aprobación rápida por equivalencia',
      paragraphs:[
                  `El Therac‑25, lanzado en 1983, fue el primer modelo de AECL que suprimió prácticamente todos los bloqueos físicos (interlocks) utilizados 
                  en sus predecesores (Therac‑6/20), confiando todo en controles electrónicos y software', 'Este cambio fue acreditado por la FDA mediante 
                  un “equivalente premercado” ya que se basaba en software y hardware previamente existentes, lo cual evitó pruebas rigurosas aunque 
                  internamente la arquitectura había cambiado drásticamente`
      ],
      images: [{
                  url: 'assets/img/therac_25_origenes.png',
                  caption: 'Origenes de Therac-25 (1983-1987)'
                }]
    },
    {
      title: '¿Cómo funcionaba el Therac‑25?',
      text: 'Usaba dos modos de operación:',
      paragraphs:[
                `Haz de electrones (modo directo) → baja energía, radiación superficial. Haz de fotones (modo X) → alta energía, radiación profunda. 
                Necesitaba un dispersor de haz para no quemar el tejido. 'Proceso normal de funcionamiento: \n
                1. El operador introducía los datos del paciente en la interfaz.
                2. El software programaba la energía y el modo.
                3. El hardware debía mover físicamente el dispersor si se usaban fotones.
                4. Se liberaba la radiación.`
      ],
      images: [{
                  url: 'assets/img/Medical_Linac_Animation.gif',
                  caption: 'Principio de funcionamiento del Acelerador Therac-25'
                }]
    },
    {
      title: 'Errores de Software - Condiciones de Carrera',
      text: '',
      paragraphs:[
                  `El operador ingresaba los datos del tratamiento a través de un teclado y una interfaz tipo terminal verde monocroma, una especie de menú con texto donde se elegía 
                  el tipo de haz, la dosis, la posición del paciente. Se podía corregir rápidamente un dato mal ingresado usando la tecla arriba para editar. Si el operador era 
                  rápido y modificaba un parámetro (por ejemplo, de "haz de electrones" a "haz de rayos X") usando ↑, la interfaz mostraba el cambio, pero el estado interno del 
                  software no actualizaba correctamente. Esto generaba un "race condition" (condición de carrera): dos procesos ejecutándose casi al mismo tiempo, donde 
                  uno no alcanzaba a actualizar al otro. 
                  
                  Resultado: el sistema pensaba que debía usar un haz de baja energía (electrones), pero no activaba el dispersor para rayos X, dejando pasar una 
                  dosis 100 veces más potente directamente al cuerpo del paciente.`
                ],
      images: [{
                  url: 'assets/img/secuencia_de_edicion.gif',
                  caption: 'Secuencia de edición de datos que produce el error 54 en menos de 8 segundos.',
                  
                },
              ]
    },
      {
      title: 'Errores de Software - Error de desbordamiento de la variable',
      text: '',
      paragraphs:[
                `Durante el ajuste manual del paciente (usando la función Field-light ), el sistema ejecuta repetidamente una rutina llamada Set-Up Test. 
                En cada pasada, se incrementa una variable compartida llamada Class3 para garantizar que no haya inconsistencias durante el ajuste. El problema 
                surgió porque Class3 era una variable de 1 byte (0–255) . Al superarse ese límite: Se producía un desbordamiento (overflow) La variable 
                volvía a 0 El sistema interpretaba esto como “todo verificado”, omitiendo las comprobaciones de seguridad Esto permitió que el Therac-25 
                disparara radiación sin verificar la posición correcta del colimador, resultando en un haz a máxima potencia.`
              ],
      images: [{
                  url: 'assets/img/desbordamiento_de_la_variable.gif',
                  caption: 'Terminal DEC VT-100 - Therac-25 (1983-1987)'
                }]
    },
    {
      title: 'Mensaje típico que veía el operador:',
      text: 'En la pantalla de la terminial de operador se disparaban mensajes de error inentendibles por el usuario y que además no se detallaban en la documentación.',
      paragraphs: [
                  `MALFUNCTION 54 
                  NO DOSE DELIVERED'\n
                  Traducción humana: 
                  Parece que no se administró la dosis. Vuelva a intentarlo. 
                  Pero en realidad…¡el paciente ya había recibido una descarga letal de radiación!`
                ],
      images: [{
                  url: 'assets/img/mensaje_de_error.png',
                  caption: 'Mensaje de error no documentado - Therac-25 (1983-1987)'
                }]
    },
    {
      title: 'Casos de Sobredosis con el Therac-25 (1985–1986)',
      text: '',
      paragraphs: [
                  `Kennestone Regional Oncology Center – Junio 1985

                  Paciente : Mujer de 61 años, tratamiento de radioterapia.
                  Error : Sobredosis de entre 15,000 y 20,000 rad (en lugar de 200 rad).
                  
                  Consecuencias :
                  Extirpación quirúrgica del pecho
                  Inmovilidad del brazo y hombro
                  Dolor constante
                  
                  Datos clave :
                  No hubo registro impreso del tratamiento
                  El error fue reportado a la FDA en marzo de 1986.`,
                  
                  `Ontario Cancer Foundation – Julio 1985
                  Paciente : Mujer de 40 años, tratamiento para cáncer de cuello uterino.
                  
                  Error : La máquina se detuvo repetidamente con el mensaje «H-Tilt»; el operador continuó el tratamiento manualmente.
                  Dosis estimada : Entre 13,000 y 17,000 rad
                  
                  Consecuencias :
                  Murió de cáncer en noviembre de 1985
                  Se sospecha que habría necesitado prótesis de cadera por daños óseos`
                ],
      images: [{
                  url: 'assets/img/radiation_danger.png',
                  caption: 'Falla mortal - Therac-25 (1983-1987)'
                }]
    },
    {
      title: 'Casos de Sobredosis con el Therac-25 (1985–1986)',
      text: '',
      paragraphs: [
                  `East Texas Cancer Center – Marzo 1986

                  Paciente : Tratamiento para tumor en la espalda
                  Error : Cambio rápido de modo X a E provocó un fallo de software no detectado → Error 54 ("dosis muy alta o muy baja")
                  Dosis aplicada : 16,500 a 25,000 rad en menos de un segundo
                  Síntomas inmediatos :
                  Sensación de descarga eléctrica - Crepitación audible
                  
                  Consecuencias :
                  Parálisis del brazo izquierdo
                  Mielitis de médula espinal
                  Falleció cinco meses después.`,
                  
                  `East Texas Cancer Center – Abril 1986
                  
                  Paciente : Tratamiento para cáncer de piel facial
                  Operador : Misma persona que en el caso anterior
                  Error : Repetición del error 54 tras edición rápida de parámetros
                  Dosis aplicada : Estimada en 25,000 rad
                  
                  Consecuencias :
                  Quemadura intensa en rostro
                  Daño cerebral (lóbulo temporal y tronco encefálico)
                  Falleció el 1 de mayo de 1986`
                ],
      images: [
              {
                url: 'assets/img/radiation_danger.png',
                caption: 'Falla mortalTherac-25 (1983-1987)'
              }
      ]
      },
    {
      title: 'Lecciones Aprendidas – Seguridad en sistemas críticos',
      text: '',
      images: [],
      paragraphs: [
                  `Los accidentes del Therac-25 no fueron causados por un único error, sino por una combinación de factores técnicos, humanos y organizativos que llevaron al desastre.
                  • Fallo en la gestión de incidentes: Los errores iniciales no se investigaron ni reportaron adecuadamente, impidiendo aprender antes de los fallos.
                  • Confianza excesiva en el software: Se eliminaron bloqueos físicos (interlocks) y se confió únicamente en el código → convirtiendo al software en un "punto único de fallo".
                  • Error humano ≠ causa final: Casi todos los fallos se pueden rastrear a decisiones o acciones humanas, pero culpar al operador sin revisar el sistema completo es superficial.
                  • Falta de redundancia y validación: No hubo mecanismos de seguridad secundarios ni registros de eventos que permitieran entender qué salió mal.
                  • Diseño poco seguro y reutilización riesgosa de código: El software heredado del Therac-6/20 no fue ajustado a las nuevas necesidades. La falta de pruebas modulares y trazabilidad fue crítica.
                  • Evaluaciones de riesgo poco realistas: AECL afirmó que la seguridad había aumentado "cinco órdenes de magnitud" tras un cambio físico menor. Esto no era justificable.
                  • Obligación de transparencia: Los fabricantes deben reportar incidentes a reguladores y usuarios. En este caso, muchos errores se repitieron porque otros no fueron advertidos.
                  El Therac-25 nos dejó una lección clave: \n\nEn sistemas de seguridad crítica, la usabilidad no debe nunca sobreponerse a la protección humana.`       
      ] 
    },
    {
      title: 'Solución técnica y cultural al fallo del Therac-25',
      text: '',
      images: [],
      paragraphs: [
                   `El error del Therac-25 no se solucionó solo con un cambio de código. Fue necesario un enfoque integral que abordara tanto lo técnico como lo organizativo.
                • Detección del desbordamiento de variable Class3: AECL identificó que la variable de control "Class3" era de solo 1 byte (0–255), lo cual provocaba un overflow. La solución fue cambiarla a un valor fijo distinto de cero durante el proceso de ajuste, evitando interpretar accidentalmente que todo estaba verificado cuando no lo estaba.
                • Restablecimiento de bloqueos físicos (interlocks): Se reintrodujeron medidas de seguridad física, como microinterruptores y sistemas redundantes para garantizar que incluso si fallaba el software, el hardware frenaría el disparo del haz.
                • Mejoras en la interfaz y validación de entrada: Se implementaron controles más estrictos en la interfaz del operador para evitar cambios rápidos entre modos sin confirmación explícita. Esto redujo condiciones de carrera causadas por edición apresurada.
                • Validación independiente del estado del sistema: Se añadieron rutinas de verificación externas que comprobaban que todos los componentes estuvieran en posición correcta antes de liberar el tratamiento.
                • Pruebas modulares y trazabilidad del código: La corrección del software incluyó pruebas unitarias, revisiones constantes y documentación desde el inicio del desarrollo.
                • Transparencia y reporte obligatorio de errores: Se estableció una política de registro y notificación inmediata de incidentes tanto a reguladores como a otros hospitales.
                • Enfoque ético y de seguridad crítica: El caso del Therac-25 marcó un hito en la ingeniería de software seguro. Hoy, en sistemas médicos, militares o industriales, se exige que:\n\n  - El software no sea el único responsable de la seguridad.\n  - Siempre haya respaldo físico o lógico.\n  - Los operadores tengan herramientas claras para entender qué pasa.`
      ]  
    },
    {
      title: 'Impacto en la Industria',
      text: 'Aquí va el texto sobre cambios en regulaciones y estándares.',
      images: [{
                  url: 'assets/img/diapositiva_1_1.png',
                  caption: 'El acelerador Therac-25 (1983-1987)'
                }]
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