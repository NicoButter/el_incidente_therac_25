export interface Slide {
  title: string;
  text?: string;           // Un solo párrafo opcional
  paragraphs?: string[];   // Hasta 4 párrafos
  images?: string[];       // Hasta 4 imágenes
  backgroundUrl?: string;  // Imagen de fondo del slide
  footerText?: string;     // Pie de página
}