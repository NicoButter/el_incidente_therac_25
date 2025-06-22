---

<p align="center">
  <img src="img/unpa_logo.png" alt="Logo UNPA" height="100" />
</p>

---

# 💥 Therac‑25: Cuando el software mata

> 📚 Presentación final para la materia **Gestión de Proyectos de Software**  
> 🎓 Carrera: **Licenciatura en Sistemas**  
> 🏫 **Universidad Nacional de la Patagonia Austral** – Año 2025

## 🎯 Descripción

Este proyecto es una **presentación interactiva construida con Angular 20**, que relata y analiza el incidente real del **Therac‑25**, una máquina de radioterapia que, por errores de software no controlados, provocó múltiples lesiones y muertes entre 1985 y 1987.

🔍 Se abordan temas como:

- El funcionamiento técnico del Therac‑25.
- Los errores de diseño, desarrollo y gestión.
- Las consecuencias éticas, legales y humanas.
- Las lecciones aprendidas para la ingeniería de software moderna.

---

## 🔧 Tecnologías utilizadas

- ⚙️ **Angular 20**
- 🎨 **HTML/CSS responsivo** con animaciones suaves
- 🔡 **TypeScript** para lógica de presentación
- 🐧 **Sistema operativo:** openSUSE Tumbleweed
- 🎧 **Música de fondo:** Clementine + buena onda

> 💻 Desarrollado íntegramente en mi **Victus 16** con Linux, como tiene que ser 😉

---

## 📁 Estructura del proyecto

```text
EL_INCIDENTE_THERAC_25/
├── .angular/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── cover/             # Portada de la presentación
│   │   ├── models/            # Interfaces y estructuras de datos
│   │   ├── presentation/      # Lógica de navegación de slides
│   │   ├── services/          # Servicios de lógica
│   │   ├── slide/             # Componente para cada diapositiva
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── README.md
```

---

## 📸 Capturas

| Portada interactiva | Diapositiva informativa | Diagrama técnico |
|---------------------|--------------------------|------------------|
| ![](./src/assets/images/cover.png) | ![](./src/assets/images/slide1.png) | ![](./src/assets/images/diagram.png) |

---

## 🧑‍💻 Cómo ejecutarlo localmente

1. Cloná el repo:

```bash
git clone https://github.com/tu_usuario/therac25-presentacion.git
cd therac25-presentacion
```

2. Instalá las dependencias:

```bash
npm install
```

3. Iniciá el servidor local:

```bash
ng serve
```

4. Accedé desde tu navegador:  
👉 `http://localhost:4200`

---

## 📚 Fuentes y bibliografía

- 📘 *Set Phasers on Stun*, S. Casey
- 📗 *Computer-Related Risks*, Peter G. Neumann
- 🧠 Análisis de Nancy Leveson (MIT)
- 📄 Informe oficial de la FDA (1987)
- 📺 [Video explicativo – “El software que te mataba”](https://www.youtube.com/watch?v=v5mfyj0S2Ss)

## 👨‍💻 Autor

**Nicolás Butterfield**  
Desarrollador entusiasta del software seguro y libre.  
**UNPA - Lic. en Sistemas** – 2025  
📧 nicobutter@gmail.com  
🧠 Linux user – 🧃 Clementine fan – 🧰 Builder of bugs (a veces).

---

## 🪪 Licencia

Este proyecto está bajo la licencia **MIT**.  
Podés usarlo, compartirlo y mejorarlo, siempre con conciencia crítica sobre el impacto del software.

---

## 🧠 Frase final + guiño gamer

> *“El software debe fallar de forma segura... o no merece estar en producción.”*

<p align="center">
  <img src=img/fallout.png" alt="Epic gamer quote" width="60%" />
</p>

> 🎮 *“War... war never changes.”* – Fallout  
> 🕹️ Porque hasta en los videojuegos, sabemos que una mala decisión de diseño... mata.

---
