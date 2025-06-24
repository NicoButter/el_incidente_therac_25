import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private slides: Slide[] = [
    {
      title: '¿Qué fue el Therac-25?',
      text: ``,
      paragraphs: [
        `<h3>
                    El Therac-25 fue un acelerador lineal de radioterapia producido por AECL (Atomic Energy of Canada Limited), sucesor de los 
                    modelos Therac-6 y Therac-20. Prometía mayor seguridad gracias al uso intensivo de software… grave error.
                    El aparato estuvo comprometido en al menos <strong>seis accidentes entre junio de 1985 y enero de 1987</strong>, 
                    en los que varios pacientes recibieron <mark>sobredosis de radiación</mark>. 
                    <br><br>
                    <strong><em>Tres de los pacientes murieron como consecuencia directa</em></strong> en el que para entonces fue el accidente más grave en los 
                    <strong>35 años de los aceleradores lineales médicos</strong>.<br><br>
                    Estos accidentes pusieron en duda la fiabilidad del control por software de sistemas de seguridad crítica, 
                    convirtiéndose en <strong>caso de estudio obligatorio</strong> en la informática médica y en la ingeniería de software.
                  </h3>`
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
      text: '',
      paragraphs: [
        `<h2>
                    Reemplazo de hardware por softwar. Aprobación rápida por equivalencia
                    El <strong>Therac-25</strong>, lanzado en <em>1983</em>, fue el primer modelo de <strong>Atomic Energy of Canada Limited (AECL)</strong> que eliminó prácticamente todos los 
                    <mark>bloqueos físicos (interlocks)</mark> utilizados en sus predecesores (Therac-6 y Therac-20), confiando completamente en controles electrónicos y software.
                  </h2>

                  <h2>
                    Este cambio fue acreditado por la <strong>FDA</strong> bajo la categoría de <em>“equivalente premercado”</em>, 
                    ya que el sistema se basaba en software y hardware previamente existentes. Esto <mark>evitó pruebas rigurosas</mark>, 
                    aunque internamente la arquitectura hubiera cambiado drásticamente.
                  </h2>`
      ],
      images: [{
        url: 'assets/img/therac_25_origenes.png',
        caption: 'Origenes de Therac-25 (1983-1987)'
      }]
    },
    {
      title: '¿Cómo funcionaba el Therac‑25?',
      text: '',
      paragraphs: [
        `<h2>Modos de operación del Therac-25</h2>
                <ul><h3>
                  <li><strong>Haz de electrones (modo directo)</strong> → baja energía, radiación superficial.</li>
                  <li><strong>Haz de fotones (modo X)</strong> → alta energía, radiación profunda. Necesitaba un dispersor de haz para no quemar el tejido.</li>
                </h3></ul>

                <h2>Proceso normal de funcionamiento</h2>

                <ol><h3>
                  <li>El operador introducía los datos del paciente en la interfaz.</li>
                  <li>El software programaba la energía y el modo.</li>
                  <li>El hardware debía mover físicamente el dispersor si se usaban fotones.</li>
                  <li>Se liberaba la radiación.</li>
                </h3></ol>`
      ],
      images: [{
        url: 'assets/img/Medical_Linac_Animation.gif',
        caption: 'Principio de funcionamiento del Acelerador Therac-25'
      }]
    },
    {
      title: 'Errores de Software - Condiciones de Carrera',
      text: '',
      paragraphs: [
        `<h3>
                    El operador ingresaba los datos del tratamiento a través de un teclado y una interfaz tipo terminal <em>verde monocroma</em>, 
                    una especie de menú textual donde se elegía el tipo de haz, la dosis y la posición del paciente.
                  </h3>

                  <h3>
                    Si se ingresaba mal un dato, se podía corregir rápidamente usando la tecla <kbd>↑</kbd> para editar. 
                    Sin embargo, si el operador era rápido y modificaba un parámetro —por ejemplo, de <strong>haz de electrones</strong> a <strong>haz de rayos X</strong>— 
                    la interfaz mostraba el cambio, pero el <strong>estado interno del software no se actualizaba correctamente</strong>.
                  </h3>

                  <h3>
                    Esto generaba una <strong>condición de carrera</strong> (<em>race condition</em>): dos procesos ejecutándose casi al mismo tiempo, 
                    donde uno no alcanzaba a actualizar al otro.
                  </h3>

                  <h5>
                    <mark>Resultado:</mark> el sistema pensaba que debía usar un haz de baja energía (electrones), pero no activaba el dispersor para rayos X, 
                    dejando pasar una dosis <strong>100 veces más potente</strong> directamente al cuerpo del paciente.
                  </h5>`
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
      paragraphs: [
        `<h3>Durante el ajuste manual del paciente (usando la función Field-light ), el sistema ejecuta repetidamente una rutina llamada Set-Up Test. 
                En cada pasada, se incrementa una variable compartida llamada Class3 para garantizar que no haya inconsistencias durante el ajuste. El problema 
                surgió porque Class3 era una variable de 1 byte (0–255) . Al superarse ese límite: Se producía un desbordamiento (overflow) La variable 
                volvía a 0 El sistema interpretaba esto como “todo verificado”, omitiendo las comprobaciones de seguridad Esto permitió que el Therac-25 
                disparara radiación sin verificar la posición correcta del colimador, resultando en un haz a máxima potencia.</h3>`
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
        `<hr class="divider">
                    <h3>MALFUNCTION 54</h3>
                    <p><h3>NO DOSE DELIVERED</h3></p>
                    <hr class="divider">
                    <p>
                      <h3>Traducción humana:</h3><br>
                      Parece que no se administró la dosis. Vuelva a intentarlo.
                    </p>
                    <div class="highlight-box">
                      <strong>Pero en realidad…</strong><br>
                      El paciente ya había recibido una descarga letal de radiación.
                    </div>`
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
        `<h3>Kennestone Regional Oncology Center – Junio 1985</h3>

                  <ul>
                    <li><strong>Paciente:</strong> Mujer de 61 años, tratamiento de radioterapia.</li>
                    <li><strong>Error:</strong> Sobredosis de entre <mark>15,000 y 20,000 rad</mark> (en lugar de 200 rad).</li>
                    <li><strong>Consecuencias:</strong>
                      <ul>
                        <li>Extirpación quirúrgica del pecho</li>
                        <li>Inmovilidad del brazo y hombro</li>
                        <li>Dolor constante</li>
                      </ul>
                    </li>
                    <li><strong>Datos clave:</strong>
                      <ul>
                        <li>No hubo registro impreso del tratamiento</li>
                        <li>El error fue reportado a la FDA en marzo de 1986</li>
                      </ul>
                    </li>
                  </ul>

                  <hr class="divider">`,

        `<h3>Ontario Cancer Foundation – Julio 1985</h3>

                  <ul>
                    <li><strong>Paciente:</strong> Mujer de 40 años, tratamiento para cáncer de cuello uterino.</li>
                    <li><strong>Error:</strong> La máquina se detuvo repetidamente con el mensaje «H-Tilt». El operador continuó el tratamiento manualmente.</li>
                    <li><strong>Dosis estimada:</strong> Entre <mark>13,000 y 17,000 rad</mark></li>
                    <li><strong>Consecuencias:</strong>
                      <ul>
                        <li>Falleció en noviembre de 1985 por cáncer avanzado</li>
                        <li>Se sospecha que habría necesitado prótesis de cadera por daños óseos</li>
                      </ul>
                    </li>
                  </ul>`
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
        `<h3>East Texas Cancer Center – Marzo 1986</h3>

                  <ul>
                    <li><strong>Paciente:</strong> Tratamiento para tumor en la espalda.</li>
                    <li><strong>Error:</strong> Cambio rápido de modo X a E provocó un fallo de software no detectado → <mark>Error 54</mark> ("dosis muy alta o muy baja").</li>
                    <li><strong>Dosis aplicada:</strong> Entre <mark>16,500 y 25,000 rad</mark> en menos de un segundo (en lugar de ~200 rad).</li>
                    <li><strong>Síntomas inmediatos:</strong>
                      <ul>
                        <li>Sensación de descarga eléctrica</li>
                        <li>Crepitación audible al dispararse la radiación</li>
                      </ul>
                    </li>
                    <li><strong>Consecuencias:</strong>
                      <ul>
                        <li>Parálisis del brazo izquierdo</li>
                        <li>Mielitis de médula espinal</li>
                        <li>Falleció cinco meses después.</li>
                      </ul>
                    </li>
                  </ul>

                  <hr class="divider">`,

        `<h3>East Texas Cancer Center – Abril 1986</h3>

                  <ul>
                    <li><strong>Paciente:</strong> Tratamiento para cáncer de piel facial.</li>
                    <li><strong>Operador:</strong> Misma persona que en el caso anterior.</li>
                    <li><strong>Error:</strong> Repetición del error 54 tras edición rápida de parámetros.</li>
                    <li><strong>Dosis aplicada:</strong> Estimada en <mark>25,000 rad</mark>.</li>
                    <li><strong>Consecuencias:</strong>
                      <ul>
                        <li>Quemadura intensa en rostro</li>
                        <li>Daño cerebral (lóbulo temporal y tronco encefálico)</li>
                        <li>Falleció el 1 de mayo de 1986.</li>
                      </ul>
                    </li>
                  </ul>`
      ],
      images: [
        {
          url: 'assets/img/radiation_danger.png',
          caption: 'Falla mortalTherac-25 (1983-1987)'
        }
      ]
    },
    {
      title: 'Lecciones Aprendidas',
      text: '',
      images: [{
        url: 'assets/img/lecciones_aprendidas_1.png',
        caption: 'Lecciones aprendidas - Therac-25 (1983-1987)'
      }],
      paragraphs: [
        `<p>
                    Los accidentes del <strong>Therac-25 no fueron causados por un único error</strong>, sino por una combinación de factores técnicos, humanos y organizativos que llevaron al desastre.
                  </p>

                  <h3>Factores clave:</h3>

                  <ul>
                    <li><strong>Fallo en la gestión de incidentes:</strong> Los errores iniciales no se investigaron ni reportaron adecuadamente, impidiendo aprender antes de los fallos.</li>

                    <li><strong>Confianza excesiva en el software:</strong> Se eliminaron bloqueos físicos (<em>interlocks</em>) y se confió únicamente en el código → convirtiendo al software en un <mark>"punto único de fallo"</mark>.</li>

                    <li><strong>Error humano ≠ causa final:</strong> Casi todos los fallos se pueden rastrear a decisiones o acciones humanas, pero culpar al operador sin revisar el sistema completo es superficial.</li>

                    <li><strong>Falta de redundancia y validación:</strong> No hubo mecanismos de seguridad secundarios ni registros de eventos que permitieran entender qué salió mal.</li>

                    <li><strong>Diseño poco seguro y reutilización riesgosa de código:</strong> El software heredado del Therac-6/20 no fue ajustado a las nuevas necesidades. La falta de pruebas modulares y trazabilidad fue crítica.</li>

                    <li><strong>Evaluaciones de riesgo poco realistas:</strong> AECL afirmó que la seguridad había aumentado "cinco órdenes de magnitud" tras un cambio físico menor. Esto no era justificable.</li>

                    <li><strong>Obligación de transparencia:</strong> Los fabricantes deben reportar incidentes a reguladores y usuarios. En este caso, muchos errores se repitieron porque otros no fueron advertidos.
                  </ul>

                  <div class="highlight-box">
                    <strong>Lección más importante:</strong><br>
                    En sistemas de seguridad crítica, la usabilidad no debe nunca sobreponerse a la protección humana.
                  </div>`
      ]
    },
    {
      title: 'Soluciones técnicas implementadas',
      text: '',
      images: [{
        url: 'assets/img/soluciones_tecnicas_1.png',
        caption: 'Soluciones tecnicas - Therac-25 (1983-1987)'
      }],
      paragraphs: [
        `<h3>Soluciones técnicas al fallo del Therac‑25</h3>`,

        `<p>El error del Therac‑25 no se solucionó solo con un cambio de código. Fue necesario un enfoque integral que abordara tanto lo técnico como lo organizativo.</p>`,

        `<h4>Detección del desbordamiento de la variable <code>Class3</code></h4>`,
        `<p>La variable <mark>Class3</mark> era de solo 1 byte (valores entre 0 y 255). Al superarse ese límite:</p>`,
        `<ul>
          <li>Se producía un <em>desbordamiento (overflow)</em></li>
          <li>La variable volvía a 0</li>
          <li>El sistema interpretaba esto como “todo verificado” y omitía comprobaciones de seguridad</li>
        </ul>`,
        `<p>La solución fue cambiarla a un valor fijo distinto de cero durante el proceso de ajuste, evitando errores silenciosos.</p>`,

        `<h4>Restablecimiento de bloqueos físicos (interlocks)</h4>`,
        `<p>Se reintrodujeron medidas de seguridad física, como microinterruptores y sistemas redundantes. Así, incluso si fallaba el software, el hardware detenía el disparo del haz.</p>`,

        `<h4>Mejoras en la interfaz y validación de entrada</h4>`,
        `<p>Se implementaron controles más estrictos para evitar cambios rápidos entre modos sin confirmación explícita, reduciendo condiciones de carrera por edición apresurada.</p>`,

        `<h4>Validación independiente del estado del sistema</h4>`,
        `<p>Se añadieron rutinas externas que verificaban el estado de los componentes antes de permitir el tratamiento.</p>`
      ]
    },
    {
      title: 'Consecuencias Sociales y Económicas',
      text: '',
      images: [{
        url: 'assets/img/consecuencias_sociales.png',
        caption: 'Consecuencias sociales - Therac-25 (1983-1987)'
      }],
      paragraphs: [
        `<h3>Consecuencias Sociales y Económicas</h3>

                        <p>
                          Los accidentes del Therac-25 no solo tuvieron un <strong>impacto humano</strong>, sino también social, económico e institucional.
                        </p>

                        <ul>
                          <li><strong>Impacto en la salud de los pacientes:</strong> Tres pacientes fallecieron como consecuencia directa de las sobredosis de radiación. Otros sufrieron efectos secundarios graves, incluyendo daño cerebral, parálisis y quemaduras crónicas.</li>

                          <li><strong>Repercusión legal:</strong> Las familias de las víctimas presentaron demandas contra AECL y los hospitales involucrados. En varios casos se llegó a acuerdos extrajudiciales por montos millonarios (ajustados a la época).</li>

                          <li><strong>Daño a la reputación de AECL:</strong> El caso generó un escándalo público y profesional. La empresa fue criticada por su retraso en reportar incidentes y por sus respuestas iniciales poco transparentes.</li>

                          <li><strong>Crisis de confianza en sistemas médicos automatizados:</strong> Estos accidentes llevaron a que muchos profesionales y pacientes desconfiaran de la automatización en equipos médicos, especialmente aquellos controlados únicamente por software.</li>

                          <li><strong>Regulaciones más estrictas:</strong> La FDA y otras agencias revisaron sus protocolos de seguridad. Se establecieron nuevas normativas para evaluar el riesgo del software en dispositivos médicos.</li>

                          <li><strong>Influencia en la ingeniería de software seguro:</strong> El Therac-25 se convirtió en <mark>un caso de estudio obligatorio</mark> en disciplinas como la informática médica, la ingeniería de software y la ética profesional.</li>
                        </ul>`
      ]
    },
    {
      title: 'Lecciones del Therac-25',
      text: '',
      images: [{
        url: 'assets/img/therac_25_lessons_1.png',
        caption: 'Lecciones - Therac-25 (1983-1987)'
      }],
      paragraphs: [
        `<h3>Lecciones culturales y éticas del caso Therac‑25</h3>`,

        `<h4>Pruebas modulares y trazabilidad del código</h4>`,
        `<p>La corrección del software incluyó:</p>`,
        `<ul>
          <li><strong>Pruebas unitarias</strong> por módulo</li>
          <li><strong>Revisiones constantes</strong> del estado interno</li>
          <li><strong>Documentación desde el inicio</strong> → trazabilidad total</li>
        </ul>`,

        `<h4>Transparencia y reporte obligatorio de errores</h4>`,
        `<p>Se estableció una política clara de notificación inmediata de fallos a reguladores y hospitales, fomentando la mejora continua.</p>`,

        `<div class="highlight-box">
          <strong>Enfoque ético y de seguridad crítica:</strong><br>
          El caso del Therac‑25 marcó un hito en la ingeniería de software seguro. Desde entonces, se exige que:
          <ul>
            <li>El software no sea el único responsable de la seguridad</li>
            <li>Siempre haya respaldo físico o lógico</li>
            <li>Los operadores tengan herramientas claras para entender qué ocurre</li>
          </ul>
        </div>`
      ]
    },
    {
      title: 'Impacto en la Industria',
      text: '',
      paragraphs: [
        `<p>
                    Los accidentes del <strong>Therac-25</strong> marcaron un antes y un después en el desarrollo de sistemas médicos controlados por software.
                    Fueron uno de los primeros casos en mostrar que <mark>un error de software puede ser fatal</mark>, y no solo técnico, sino también organizativo.
                  </p>`,

        `<h3>Nuevas normativas y estándares de seguridad</h3>
                  <ul>
                    <li><strong>FDA – Regulaciones revisadas:</strong> La Administración de Alimentos y Medicamentos (FDA) actualizó sus protocolos de evaluación de dispositivos médicos, exigiendo validación explícita del software incluso si es reutilizado.</li>
                    <li><strong>IEC 62304:</strong> En 2006 se publicó este estándar internacional para el ciclo de vida del software médico, inspirado en gran parte por los errores del Therac-25.</li>
                    <li><strong>IEC 61508:</strong> Se estableció como base para evaluar sistemas electrónicos de seguridad funcional, aplicable a equipos médicos, industriales y automotrices.</li>
                  </ul>`,

        `<h3>Cambios en diseño de sistemas críticos</h3>
                  <ul>
                    <li><strong>No confiar únicamente en software:</strong> Hoy se exige redundancia física o lógica en sistemas de alta criticidad.</li>
                    <li><strong>Validación independiente:</strong> Las rutinas de verificación deben ser externas al proceso principal.</li>
                    <li><strong>Pruebas modulares:</strong> El código debe probarse por partes, no solo en sistema completo.</li>
                  </ul>`,

        `<h3>Influencia en la formación técnica y ética profesional</h3>
                  <ul>
                    <li><strong>Ejemplo obligatorio en ingeniería de software seguro:</strong> Aparece en libros como <em>Safety, Reliability and Risk in Systems Engineering</em> y <em>Engineering Ethics: Concepts and Cases</em>.</li>
                    <li><strong>Estudio en carreras de informática y bioingeniería:</strong> Es caso de estudio en universidades como MIT, Stanford y UPM (Universidad Politécnica de Madrid).</li>
                    <li><strong>Ética en el desarrollo:</strong> El Therac-25 mostró cómo la sobreconfianza en la automatización y la falta de transparencia pueden llevar a consecuencias irreparables.</li>
                  </ul>`,

        `<div class="highlight-box">
                      <strong>Reflexión final:</strong><br>
                      El Therac-25 no fue un fallo aislado. Fue un síntoma de una cultura de desarrollo que priorizaba la eficiencia sobre la seguridad humana.
                    </div>`
      ],
      images: [{
        url: 'assets/img/impact_on_industry.png',
        caption: 'Impacto en la industria - Therac-25 (1983-1987)'
      }]
    },
    {
      title: 'Conclusiónes',
      text: '',
      paragraphs: [
        `<h3>1. El software no debe ser el único responsable de la seguridad</h3>
          <p>
            La confianza absoluta en el software sin respaldo físico fue un error grave. 
            Los sistemas críticos deben tener múltiples niveles de protección → hardware, software y humano.
          </p>`,

        `<h3>2. Las condiciones de carrera son errores reales y difíciles de replicar</h3>
          <p>
            El error 54 se producía solo bajo ciertas condiciones específicas de tiempo. 
            Esto demuestra que los bugs de concurrencia pueden ser fatales si no están bien documentados y probados.
          </p>`,

        `<h3>3. La transparencia ante los errores salva vidas</h3>
          <p>
            AECL no reportó inmediatamente los incidentes a reguladores ni a otros usuarios. 
            Si hubiera habido alerta temprana, muchos accidentes podrían haberse evitado.
          </p>`,

        `<h3>4. Validación independiente del sistema es esencial</h3>
          <p>
            No basta con que el sistema "piense" que está verificado. 
            Se necesitan mecanismos externos que confirmen el estado real del hardware y software.
          </p>`,

        `<h3>5. Reutilizar código no garantiza seguridad</h3>
          <p>
            El Therac-25 reutilizó gran parte del código del Therac-6 y Therac-20, pero su contexto era diferente. 
            El código debe validarse siempre en su nuevo entorno.
          </p>`,

        `<h3>6. Ética y responsabilidad profesional en ingeniería</h3>
          <p>
            Como futuros profesionales, tenemos una obligación ética: diseñar sistemas seguros, transparentes y humanocéntricos. 
            En sistemas médicos, un bug puede costar vidas.
          </p>`,

        `<div class="highlight-box">
            <strong>Finallmente:</strong><br>
            El Therac-25 no fue un fallo técnico aislado. Fue un síntoma de una cultura de desarrollo que priorizaba eficiencia sobre seguridad humana.
          </div>`
      ],
      images: [{
        url: 'assets/img/conclusiones.png',
        caption: 'Conclusiones del incidente - Therac-25 (1983-1987)'
      }],
      footerText: ''
    },
    {
      title: 'Glosario Técnico (Parte 1)',
      text: '',
      paragraphs: [
        `<ul class="glossary-list">
          <li><h3>Therac-25:</h3> Acelerador lineal de radioterapia fabricado por AECL, sin bloqueos físicos. Lanzado en 1983.</li>
          <li><h3>AECL:</h3> Atomic Energy of Canada Limited. Empresa desarrolladora del Therac-25. Confió únicamente en software → error grave.</li>
          <li><h3>Radiación ionizante:</h3> Radiación con energía suficiente para liberar electrones, dañina si no se controla correctamente.</li>
          <li><h3>Interlock físico:</h3> Sistema de seguridad basado en hardware que impide la activación si no se cumplen condiciones físicas.</li>
          <li><h3>Error 54 / Malfunction 54:</h3> Mensaje que indicaba "dosis muy alta o muy baja", pero no detenía el tratamiento ni alertaba sonoramente.</li>
          <li><h3>Race Condition:</h3> Condición crítica donde dos procesos compiten por recursos → el resultado depende del orden de ejecución.</li>
          <li><h3>SOUP:</h3> Software Of Unknown Provenance. Código reutilizado sin documentación formal ni controles verificables.</li>
        </ul>`
      ],
      images: [{
        url: 'assets/img/therac_25_origenes.png',
        caption: 'Orígenes de Therac-25 (1983–1987)'
      }]
    },
    {
      title: 'Glosario Técnico (Parte 2)',
      text: '',
      paragraphs: [
        `<ul class="glossary-list">
      <li><h3>IEC 62304:</h3> Estándar internacional para desarrollo seguro de software médico. Exige trazabilidad y validación desde el inicio.</li>
      <li><h3>FDA - Equivalente premercado:</h3> Sistema usado por la FDA para aprobar dispositivos similares a otros ya existentes, sin pruebas exhaustivas.</li>
      <li><h3>Desbordamiento de variable (overflow):</h3> Error en programación donde una variable numérica supera su límite → vuelve a cero.</li>
      <li><h3>Dosis administrada:</h3> Cantidad real de radiación aplicada al paciente. En los accidentes fue hasta 100 veces mayor que la esperada.</li>
      <li><h3>Malfuncionamiento:</h3> Situación inesperada en sistemas médicos que puede afectar la seguridad del paciente.</li>
      <li><h3>Condiciones de carrera:</h3> Errores causados por edición rápida de parámetros, comunes en interfaces lentas o mal diseñadas.</li>
    </ul>`
      ],
      images: [{
        url: 'assets/img/therac_25_origenes.png',
        caption: 'Orígenes de Therac-25 (1983–1987)'
      }]
    },
    {
      title: 'Bibliografía',
      text: '',
      paragraphs: [
        `<h3>Documentos Oficiales</h3>
        <ul class="bibliography-list">
          <li><strong>[1]</strong> U.S. Food and Drug Administration (FDA). "Medical Device Safety Action Plan", 2019.</li>

          <li><strong>[2]</strong> Leveson, N.G. & Turner, C.S. "An Investigation of the Therac-25 Accidents". IEEE, 1993.</li>

          <li><strong>[3]</strong> Canadian Radiation Protection Bureau. "Informe técnico sobre sobredosis del Therac-25", 1987.</li>
        </ul>`,

        `<h3>Estándares Técnicos</h3>
        <ul class="bibliography-list">
          <li><strong>[4]</strong> IEC 62304:2006 – Software de dispositivos médicos. Disponible en: <a href="https://webstore.iec.ch/publication/3772"  target="_blank">IEC Webstore</a></li>

          <li><strong>[5]</strong> IEC 61508 – Seguridad funcional de sistemas electrónicos. Disponible en: <a href="https://webstore.iec.ch/publication/4696"  target="_blank">IEC 61508</a></li>

          <li><strong>[6]</strong> ISO 14971 – Gestión de riesgos en dispositivos médicos.</li>
        </ul>`,

        `<h3>Bibliografía adicional</h3>
        <ul class="bibliography-list">
          <li><strong>[7]</strong> Leveson, N.G. <em>Safeware: Systematic Software Development</em>. Addison-Wesley, 1995.</li>

          <li><strong>[8]</strong> Harris, C.E., Pritchard, M.S., James, M.J. <em>Engineering Ethics: Concepts and Cases</em>. Cengage Learning, 2013.</li>

          <li><strong>[9]</strong> Atomic Energy of Canada Limited (AECL). "Informe interno sobre análisis del Therac-25", 1986.</li>

          <li><strong>[10]</strong> University of Virginia. "The Therac-25 Incidents - Engineering Case Study"</li>

          <li><strong>[11]</strong> https://es.wikipedia.org/wiki/Therac-25</li>
        </ul>`,

        `<div class="highlight-box">
          <strong>Fuentes consultadas:</strong><br>
          La mayoría de los datos fueron extraídos de informes públicos, investigaciones técnicas y estudios académicos disponibles online.
        </div>`
      ],
      images: [{
        url: 'assets/img/therac_25_origenes.png',
        caption: 'Orígenes de Therac-25 (1983–1987)'
      }]
    },
    {
      title: 'Gracias por tu atención',
      paragraphs: [
        `<h2>
          Esta presentación fue desarrollada con <strong>Angular</strong>, como parte del estudio del caso Therac-25.
        </h2>`,

            `<h3>
          🔗 <a href="https://gpselincidentetherac25.netlify.app/"  target="_blank" rel="noopener noreferrer">
            https://gpselincidentetherac25.netlify.app/ 
          </a><br>
          Puedes visitar esta dirección cuantas veces quieras si este tema te interesa.
        </h3>`,

            `<div class="highlight-box">
              <h3><strong>Autor:</strong> Nicolás Butterfield<br>
              <h4>Asignatura: Gestión de Proyectos de Software<br>
              Docentes: Mg. Osiris Sofía, Mg. Leonardo González, LeS Jorge Climis.<br>
              Carrera: Licenciatura en Sistemas<br>
              Universidad Nacional de La Patagonia Austral</h4>
            </h3></div>`,

            `<div class="highlight-box">
              <h4>¿Quieres saber más?<br>
              ¡Visita el repositorio GitHub!<br>
              🔹 Repositorio: <a href="https://github.com/NicoButter/el_incidente_therac_25"  target="_blank">nibutterfield/therac25-study</a>
            </h4></div>`
      ],
      images: [{
        url: 'assets/img/gracias.png',
        caption: 'Desarrollado con Angular'
      }],
      backgroundUrl: '',
      footerText: 'Therac-25 - Estudio de Caso | Nicolás Butterfield'
    }
  ];

  getSlides(): Slide[] {
    return this.slides;
  }
}