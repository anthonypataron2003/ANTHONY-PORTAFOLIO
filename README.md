# Portafolio Web | Anthony Pataron

Portafolio web personal de **Anthony Pataron**, estudiante de Ingeniería en Software en la Universidad Estatal de Milagro (UNEMI). El sitio presenta información profesional, habilidades técnicas, proyectos destacados, un pequeño Design System y una sección de contacto.

El proyecto fue desarrollado con **HTML5 semántico, CSS propio (custom properties) y JavaScript nativo**, sin frameworks ni build tools, manteniendo una estructura simple, fácil de entender y lista para publicarse con GitHub Pages.

## Sitio publicado

[Ver portafolio en GitHub Pages](https://anthonypataron2003.github.io/ANTHONY-PORTAFOLIO/)

## Tabla de contenido

## Características

- Diseño en tema oscuro (carbón + teal) con opción de tema claro.
- Navegación clara entre secciones mediante anclas internas.
- Sección de habilidades con niveles por tecnología.
- Proyectos destacados con modal de detalle y enlaces a repositorio y demo.
- Design System con variables de color, tipografía, espaciado y componentes reutilizables.
- Efecto de máquina de escribir en la presentación.
- Formulario de contacto con validación básica.
- Diseño responsive para computadora, tablet y teléfono.
- Código separado en archivos de HTML, CSS y JavaScript.

## Vista previa
## Incio
<img width="1339" height="631" alt="image" src="https://github.com/user-attachments/assets/baac2110-ab11-4c74-a955-55b5eef031d7" />

## Tecnologías Que Domino 
<img width="1343" height="539" alt="image" src="https://github.com/user-attachments/assets/e4c68e5f-7d73-441f-8cf7-feb508f04b17" />

## Tecnologías y Competencias 

<img width="934" height="582" alt="image" src="https://github.com/user-attachments/assets/21375f90-4aa5-4011-8376-1532de8a374e" />
<img width="1341" height="561" alt="image" src="https://github.com/user-attachments/assets/00770bd9-e964-4ab7-9709-bd01754762a5" />

## Proyectos Destacados

<img width="1344" height="635" alt="image" src="https://github.com/user-attachments/assets/2f7b7261-4c7e-4451-9fca-2c919b25865a" />
## Contactos
<img width="1344" height="635" alt="image" src="https://github.com/user-attachments/assets/98ded10f-845e-49f5-82b3-850e8e9ac757" />

## Tecnologías

| Tecnología | Uso en el proyecto |
| --- | --- |
| HTML5 | Estructura semántica del sitio |
| CSS3 | Estilos, layout responsive, variables y tema claro/oscuro |
| JavaScript | Menú, tema, filtro de proyectos, modal y formulario |
| Git / GitHub | Control de versiones y repositorio remoto |
| GitHub Pages | Publicación del portafolio |

## Estructura del proyecto

```
portfolio/
├── assets/
│   ├── css/
│   │   └── styles.css        Sistema de diseño: variables, componentes, responsive, tema claro/oscuro
│   ├── icons/
│   │   └── favicon.svg       Ícono de la pestaña del navegador
│   ├── images/
│   │   └── foto-anthony.jpg  Foto de perfil (hero y "Sobre mí")
│   └── js/
│       └── main.js           Menú, tema, filtro, modal de proyecto y validación de formulario
├── index.html                Portafolio completo en una sola página
└── README.md
```

## Secciones del sitio

- **Inicio:** presentación profesional, foto de perfil y accesos principales.
- **Sobre mí:** información académica, perfil profesional e intereses.
- **Habilidades:** tecnologías con su nivel de dominio.
- **Proyectos:** tarjetas de proyectos con filtro y modal de detalle.
- **Design System:** paleta, tipografía, espaciados y componentes usados.
- **Contacto:** enlaces profesionales y formulario de contacto.

La navegación funciona con anclas internas, por lo que no se necesitan otros archivos HTML.

## Funcionalidades JavaScript

- Menú responsive para pantallas pequeñas.
- Cambio entre tema claro y oscuro.
- Filtro de proyectos por categoría.
- Modal de proyecto con enlaces a repositorio y demo (se ocultan si no existen).
- Validación básica del formulario de contacto.
- Efecto de máquina de escribir configurable con `data-words`.

## Cómo ejecutar el proyecto

**Opción simple:**

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en el navegador.

**Opción con servidor local:**

```bash
python -m http.server 5500
```

Luego abre en el navegador: <http://localhost:5500>

## Control de versiones

```bash
cd portfolio
git init
git add .
git commit -m "Estructura base: HTML semántico y sistema de diseño"
```

Los commits se hicieron por avance:

- Estructura HTML del portafolio.
- Sistema de diseño en CSS (variables, componentes).
- Interactividad en JavaScript (menú, tema, filtro, modal, formulario).
- Ajustes de contenido y datos reales de contacto.

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub y sube el proyecto:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git branch -M main
   git push -u origin main
   ```

2. En GitHub ve a **Settings → Pages → Source** y selecciona la rama `main` y la carpeta `/ (root)`.
3. Espera a que se genere la URL pública: `https://TU-USUARIO.github.io/TU-REPO/`.

## Autor

**Anthony Pataron**

- GitHub:https://github.com/anthonypataron2003
- Email: anthonypataron0@gmail.com

