# INTEGER Desarrollos · Landing Page

Sitio web de una sola página para **INTEGER Desarrollos**, constructora con más de 15 años de experiencia.

## Tecnologías

- HTML5
- Tailwind CSS (compilado a CSS estático)
- JavaScript vanilla
- Fuentes e iconos self-hosted (sin dependencias externas)

## Estructura

```
├── index.html              # Página principal
├── assets/
│   ├── css/styles.css      # CSS compilado (Tailwind + fuentes + iconos)
│   ├── js/main.js          # Lógica (menú, reveal, modal, videos)
│   ├── fonts/              # Fuentes e iconos (woff2)
│   ├── images/             # Imágenes del sitio y del portafolio
│   └── videos/             # Renders de proyectos
├── src/input.css           # Fuente del CSS (Tailwind + @font-face + estilos)
├── tailwind.config.js      # Configuración de Tailwind
├── package.json            # Script de build
├── .gitignore
└── README.md
```

## Desarrollo

El CSS de `assets/css/styles.css` se **compila** con Tailwind. Si editas clases de Tailwind en `index.html`, vuelve a compilar:

```bash
npm install
npm run build:css
```

> El sitio no usa CDNs: fuentes y subconjunto de iconos (Font Awesome) están en `assets/fonts`.

## Despliegue

### GitHub Pages

1. Sube el contenido a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En *Source*, selecciona **Deploy from a branch** → `main` → carpeta `/ (root)` → **Save**.
4. La página estará disponible en `https://<usuario>.github.io/<repositorio>/`.

### Hostinger (hosting compartido)

1. Sube el contenido de la carpeta a `public_html/` (o a la carpeta raíz del dominio).
2. `index.html` debe quedar en la raíz.
3. Listo: el sitio sirve automáticamente al visitar el dominio.

> Las rutas de recursos son relativas (`assets/...`), por lo que funcionan tanto en un subdirectorio como en la raíz del dominio.

## Notas

- El teléfono y el WhatsApp se configuran en el `index.html` (`tel:` y `wa.me`).
- Las imágenes usan `loading="lazy"`; el hero se precarga. Los videos cargan solo al hacer scroll.
