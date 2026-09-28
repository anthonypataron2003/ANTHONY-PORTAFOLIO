# Portafolio — Anthony

Portafolio web personal construido con HTML5 semántico, CSS propio (con variables/custom properties) y JavaScript nativo, sin frameworks ni build tools. Diseño en tema oscuro (carbón + teal) con opción de tema claro.

![Vista previa del portafolio](anthony-shot.png)

## Estructura

```
portfolio/
├── assets/
│   ├── css/
│   │   └── styles.css       Sistema de diseño: variables, componentes, responsive, tema claro/oscuro
│   ├── icons/
│   │   └── favicon.svg      Ícono de la pestaña del navegador
│   ├── images/
│   │   └── foto-anthony.jpg Foto de perfil (hero y "Sobre mí")
│   └── js/
│       └── main.js          Menú responsive, tema claro/oscuro, filtro de proyectos,
│                            modal de proyecto y validación de formulario
├── index.html               Portafolio completo en una sola página
└── README.md

## Entrada del portafolio

index.html contiene las secciones Inicio, Sobre mí, Habilidades, Proyectos, Design System
y Contacto. La navegación funciona mediante anclas internas, por lo que ya no se necesitan
otros archivos HTML.

## Antes de entregar — pendientes para ti

1. **Correo y GitHub reales**: revisa los datos de contacto de `index.html` si necesitas
   cambiarlos. También puedes ajustar la lista de `data-words` en el
   `<strong data-typewriter>` para cambiar las frases de la "máquina de escribir".
2. **Enlaces de repositorio/demo por proyecto**: en `index.html`, cada `<article class="project-card">`
   puede llevar los atributos `data-repo="https://..."` y `data-demo="https://..."` para que el modal
   muestre esos enlaces automáticamente (si no se agregan, el botón correspondiente se oculta).
3. Revisa los niveles de habilidad en `index.html`: están puestos según tu experiencia descrita,
   ajústalos si no reflejan lo que puedes justificar en la sustentación.

## Git y control de versiones

bash
cd portfolio
git init
git add .
git commit -m "Estructura base: HTML semántico y sistema de diseño"

Haz commits separados por avance (no un único commit final), por ejemplo:
estructura HTML de las 6 páginas
sistema de diseño en CSS (variables, componentes)
interactividad en JavaScript (menú, tema, filtro, modal, formulario)
ajustes de contenido y datos reales de contacto

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub y súbelo:
   bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git branch -M main
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Source** selecciona la rama `main` y la carpeta `/ (root)`.
3. Espera a que se genere la URL pública (algo como `https://TU-USUARIO.github.io/TU-REPO/`).

