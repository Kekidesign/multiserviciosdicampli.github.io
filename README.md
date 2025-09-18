# Sitio Web para Empresa de Multiservicios

Este es un sitio web moderno y receptivo para una empresa de servicios múltiples que se especializa en:
- Reparación de aires acondicionados
- Reparaciones eléctricas
- Refacciones de construcción

## Características

- Diseño completamente responsivo que funciona en dispositivos móviles, tabletas y escritorios
- Navegación suave entre secciones
- Formulario de contacto funcional
- Animaciones sutiles al hacer scroll
- Optimizado para motores de búsqueda (SEO)
- Código limpio y bien documentado

## Estructura del Proyecto

```
.
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── script.js       # Funcionalidad JavaScript
└── img/                # Directorio para imágenes
    └── hero-bg.jpg     # Imagen de fondo del encabezado
```

## Personalización

### 1. Contenido

Puedes personalizar el contenido editando el archivo `index.html`. Busca y reemplaza el texto de ejemplo con la información real de tu empresa.

### 2. Imágenes

1. **Imagen de fondo del encabezado**: Reemplaza `img/hero-bg.jpg` con tu propia imagen. Asegúrate de que tenga una resolución alta.
2. **Iconos de servicios**: Los iconos se cargan desde Font Awesome. Puedes cambiarlos modificando las clases en las etiquetas `<i>` dentro de las tarjetas de servicios.

### 3. Información de contacto

Actualiza la información de contacto en la sección de contacto (`#contacto`) con:
- Número de teléfono
- Correo electrónico
- Dirección física
- Enlaces a redes sociales

### 4. Colores

Puedes personalizar la paleta de colores modificando las variables CSS en el archivo `css/styles.css`:

```css
:root {
    --primary-color: #3498db;      /* Color principal (azul) */
    --secondary-color: #2c3e50;    /* Color secundario (azul oscuro) */
    --accent-color: #e74c3c;       /* Color de acento (rojo) */
    --light-color: #ecf0f1;        /* Color de fondo claro */
    --dark-color: #2c3e50;         /* Color de texto oscuro */
}
```

### 5. Google Analytics (Opcional)

Para agregar Google Analytics, inserta tu código de seguimiento justo antes de la etiqueta de cierre `</head>` en `index.html`.

## Despliegue

Puedes desplegar este sitio web en cualquier servicio de hosting estático como:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Soporte

Si necesitas ayuda con la personalización o tienes alguna pregunta, no dudes en contactarnos.

---

© 2023 Multiservicios Integrales. Todos los derechos reservados.
