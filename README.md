# 📰 Capraru News

Una plataforma moderna de noticias construida con **React** y **Vite**, diseñada para proporcionar una experiencia de usuario intuitiva y rápida.

## ✨ Características

- 📱 **Diseño Responsive**: Interfaz adaptada para todos los dispositivos
- 🎯 **Filtrado por Categorías**: Navega entre diferentes categorías de noticias (Deportes, Tecnología, Entretenimiento, etc.)
- ⚡ **Rendimiento Optimizado**: Construido con Vite para carga rápida
- 🎨 **Interfaz Moderna**: Estilos CSS coherentes y bem estructurados
- 🔍 **Búsqueda de Noticias**: Previsualizaciones de noticias destacadas
- 🎭 **Componentes Reutilizables**: Arquitectura modular y escalable
- 🌓 **Variables CSS Personalizables**: Temas y colores fáciles de cambiar
- 🧭 **Navegación Intuitiva**: Navbar con dropdowns y enlaces organizados
- 📄 **Páginas de Noticias Individuales**: Vista detallada para cada artículo
- 🔧 **Hooks Personalizados**: Lógica reutilizable para filtros y dropdowns

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 19+
- **Build Tool**: Vite 8+
- **Lenguaje**: TypeScript 6+
- **Router**: React Router DOM 7+
- **Estilos**: CSS Puro con metodología BEM
- **Linting**: ESLint + TypeScript ESLint

## 📦 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/mstchristian/Capraru-News.git
cd Capraru-News
```

### Instalar dependencias

```bash
npm install
```

## 🚀 Desarrollo

### Ejecutar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Linting

Verificar errores de código:

```bash
npm run lint
```

## 📦 Build

### Generar build de producción

```bash
npm run build
```

### Previsualizar build de producción

```bash
npm run preview
```

## 📖 Documentación

### 📁 Estructura del Proyecto

El proyecto sigue una estructura modular organizada por carpetas. A continuación, se detalla la jerarquía completa con explicaciones de cada archivo:

```
Capraru-News/
├── public/                          # Archivos estáticos públicos
├── src/                             # Código fuente principal
│   ├── components/                  # Componentes reutilizables de React
│   │   ├── category-search-bar/     # Barra de búsqueda y selección de categorías
│   │   │   ├── category-search-bar.css    # Estilos para la barra de búsqueda de categorías
│   │   │   ├── category.css              # Estilos para componentes de categoría
│   │   │   ├── Category.tsx              # Componente para mostrar una categoría individual
│   │   │   └── CategorySearchBar.tsx     # Componente principal de la barra de búsqueda
│   │   ├── layout/                  # Componentes de layout y secciones
│   │   │   ├── news-preview-section.css  # Estilos para la sección de previews
│   │   │   ├── news-section.css          # Estilos para la sección principal de noticias
│   │   │   ├── NewsPreviewSection.tsx    # Componente que renderiza previews de noticias
│   │   │   ├── NewsSection.tsx           # Componente principal de la sección de noticias
│   │   │   └── no-news/             # Componentes para estados sin noticias
│   │   │       ├── no-news.css           # Estilos para mensajes de no hay noticias
│   │   │       ├── NoNewsText.tsx        # Componente de texto cuando no hay noticias
│   │   │       └── NoPreviewsText.tsx    # Componente de texto cuando no hay previews
│   │   ├── navbar/                  # Navegación principal
│   │   │   ├── link-list-container.css   # Estilos para contenedor de listas de enlaces
│   │   │   ├── LinkListContainer.tsx     # Componente contenedor de listas de enlaces
│   │   │   ├── navbar-title.css          # Estilos para el título del navbar
│   │   │   ├── navbar.css                # Estilos principales del navbar
│   │   │   ├── Navbar.tsx                # Componente principal del navbar
│   │   │   ├── NavbarTitle.tsx           # Componente del título del navbar
│   │   │   ├── dropdown/            # Componentes de dropdown
│   │   │   │   ├── dropdown-button.css   # Estilos para botón de dropdown
│   │   │   │   ├── dropdown-content.css  # Estilos para contenido del dropdown
│   │   │   │   ├── dropdown-link.css     # Estilos para enlaces en dropdown
│   │   │   │   ├── dropdown.css          # Estilos generales del dropdown
│   │   │   │   ├── Dropdown.tsx          # Componente principal del dropdown
│   │   │   │   ├── DropdownButton.tsx    # Componente del botón del dropdown
│   │   │   │   ├── DropdownContent.tsx   # Componente del contenido del dropdown
│   │   │   │   └── DropdownLink.tsx      # Componente de enlace en dropdown
│   │   │   ├── link-lists/          # Listas de enlaces organizadas
│   │   │   │   ├── center-link-list.css  # Estilos para lista central
│   │   │   │   ├── CenterLinkList.tsx    # Componente de lista central
│   │   │   │   ├── left-link-list.css    # Estilos para lista izquierda
│   │   │   │   ├── LeftLinkList.tsx      # Componente de lista izquierda
│   │   │   │   ├── link-list.css         # Estilos generales de listas
│   │   │   │   ├── right-link-list.css   # Estilos para lista derecha
│   │   │   │   └── RightLinkList.tsx     # Componente de lista derecha
│   │   │   └── links/               # Componentes de enlaces individuales
│   │   │       ├── default-link.css      # Estilos para enlaces por defecto
│   │   │       └── DefaultLink.tsx       # Componente de enlace por defecto
│   │   ├── new/                     # Componentes para artículos de noticias individuales
│   │   │   ├── new-content.css          # Estilos para contenido de noticia
│   │   │   ├── new-image.css            # Estilos para imagen de noticia
│   │   │   ├── new-summary.css          # Estilos para resumen de noticia
│   │   │   ├── new-text.css             # Estilos para texto de noticia
│   │   │   ├── new-title.css            # Estilos para título de noticia
│   │   │   ├── new.css                  # Estilos generales de noticia
│   │   │   ├── New.tsx                  # Componente principal de noticia
│   │   │   ├── NewContent.tsx           # Componente de contenido de noticia
│   │   │   ├── NewImage.tsx             # Componente de imagen de noticia
│   │   │   ├── NewSummary.tsx           # Componente de resumen de noticia
│   │   │   ├── NewText.tsx              # Componente de texto de noticia
│   │   │   └── NewTitle.tsx             # Componente de título de noticia
│   │   └── new-preview/             # Previsualizaciones de noticias
│   │       ├── new-preview.css          # Estilos para preview de noticia
│   │       └── NewPreview.tsx           # Componente de preview de noticia
│   ├── data/                        # Datos estáticos y mock data
│   │   └── newsData.ts              # Archivo con datos de noticias de ejemplo
│   ├── hooks/                       # Hooks personalizados de React
│   │   ├── useDropdown.ts           # Hook para manejar estado de dropdowns
│   │   └── useNewsFilter.ts         # Hook para filtrar noticias por categoría
│   ├── images/                      # Imágenes del proyecto
│   │   └── news/                    # Directorio para imágenes de noticias
│   └── pages/                       # Páginas principales de la aplicación
│       ├── Account.tsx              # Página de cuenta de usuario
│       ├── ContactUs.tsx            # Página de contacto
│       ├── home.css                 # Estilos específicos para la página Home
│       ├── Home.tsx                 # Página principal/Home de la aplicación
│       └── News.tsx                 # Página para mostrar noticias detalladas
├── .git/                            # Repositorio Git (control de versiones)
├── .vite/                           # Cache temporal de Vite
├── node_modules/                    # Dependencias instaladas de Node.js
├── eslint.config.js                 # Configuración de reglas de linting con ESLint
├── index.html                       # Archivo HTML raíz que carga la aplicación
├── package.json                     # Metadatos del proyecto y dependencias
├── package-lock.json                # Archivo de bloqueo de versiones de dependencias
├── README.md                        # Archivo de documentación del proyecto
├── tsconfig.app.json                # Configuración TypeScript para la aplicación
├── tsconfig.json                    # Configuración principal de TypeScript
├── tsconfig.node.json               # Configuración TypeScript para scripts de Node
└── vite.config.ts                   # Configuración del bundler Vite
```

#### Descripción de Directorios y Archivos Principales

- **public/**: Contiene archivos estáticos accesibles públicamente, como íconos o assets compartidos.
- **src/**: Directorio raíz del código fuente TypeScript/React.
  - **components/**: Componentes modulares organizados por funcionalidad. Cada componente tiene su propio directorio con archivos `.tsx` (componentes React) y `.css` (estilos específicos) para mantener la separación de responsabilidades.
  - **data/**: Almacena datos estáticos y mocks utilizados en la aplicación, facilitando el desarrollo y pruebas.
  - **hooks/**: Contiene hooks personalizados para lógica reutilizable, como manejo de estado de UI y filtrado de datos.
  - **images/**: Imágenes y recursos visuales organizados por categorías para fácil acceso.
  - **pages/**: Componentes de página de alto nivel que representan rutas de la aplicación, con estilos dedicados donde es necesario.
- **Archivos de Configuración Raíz**:
  - **index.html**: Punto de entrada HTML que monta la aplicación React.
  - **package.json**: Define dependencias, scripts y metadatos del proyecto.
  - **vite.config.ts**: Configura el bundler Vite para desarrollo y build.
  - **tsconfig\*.json**: Configuraciones de TypeScript para diferentes contextos (app, node).
  - **eslint.config.js**: Reglas para linting y calidad de código.

### 🎨 Documentación CSS

Los estilos están organizados siguiendo la metodología **BEM (Block Element Modifier)**:

- Cada componente tiene su archivo CSS dedicado (ej: `Navbar.tsx` → `navbar.css`).
- Los nombres de clases siguen el patrón `block__element--modifier`.
- Variables CSS personalizables en archivos como `app.css` para temas y colores.
- Estilos responsivos usando media queries para dispositivos móviles y desktop.
- Separación clara entre estilos de componentes y estilos globales (`main.css`, `app.css`).

Ejemplo de estructura BEM:

- `.navbar` (Block)
- `.navbar__link` (Element)
- `.navbar__link--active` (Modifier)

Esto asegura mantenibilidad, escalabilidad y evita conflictos de nombres.

## 🎯 Categorías de Noticias

- **Todas** - Todas las noticias disponibles
- **Deportes** - Noticias del mundo deportivo
- **Tecnología** - Avances tecnológicos
- **Entretenimiento** - Cine, música y entretenimiento
- **Educación** - Noticias sobre educación
- **Películas** - Estrenos y críticas de cine

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
