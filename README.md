# INTEGER Desarrollos · Landing Page

Sitio web de una sola página para **INTEGER Desarrollos**, constructora con más de 15 años de experiencia.

## Tecnologías

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Font Awesome](https://fontawesome.com/) (CDN)
- JavaScript vanilla

## Estructura

```
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   ├── js/
│   │   └── main.js         # Lógica (menú, reveal, modal)
│   ├── images/             # Imágenes del portafolio (01–10)
│   └── videos/             # Renders de proyectos
├── .gitignore
└── README.md
```

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

- Antes de publicar, actualiza el **número de WhatsApp** y el `tel:` en `index.html` (actualmente usa un placeholder).
- El `tailwind.config` se configura inline en el `<head>` (requerido por el Play CDN de Tailwind).
