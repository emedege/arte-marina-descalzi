# Arte Marina Descalzi — Estructura del sitio

Documento de decisiones acordadas con la artista. Se actualiza a medida que avanza el proyecto.

## Concepto
Artista visual (pintura, escultura, fotografía, joyería). Eje del trabajo: el color, lo ritual y lo procesual.
Reivindica el color en un mundo de grises: obras veladas donde el color se esconde y acaba saliendo.
La web debe transmitirlo: el color se revela (ratón en ordenador, scroll en móvil).

Público: galerías de arte, coleccionistas, decoradores, empresas, arquitectos.
Referencias: malikafavre.com (minimalismo, imágenes grandes), sophieteaart.com (color, tipografía, obras enmarcadas sobre vídeo).

## Mapa del sitio
- **Inicio**: vídeo de fondo (cielo, nubes, plantas, telas, hilos, procesos) con obras enmarcadas que van cambiando. Accesos a Tienda, Portfolio y Galería. Newsletter discreta al pie.
- **Tienda**: obras disponibles y vendidas (con etiqueta "Vendida"). Inicialmente 6 obras (cuadros y láminas).
- **Portfolio**: todo lo realizado, por series.
- **Galería**: vídeos, procesos y piezas no vendibles.
- **Quién soy**
- **Blog**: solo en español.
- **Contacto**: WhatsApp (689 187 877), Instagram @marinadescalzig, solicitud de dossier / encargo.
- **Legales**: Aviso legal, Privacidad, Cookies, Condiciones de venta.

## Idiomas
Español, inglés e italiano (`/es/`, `/en/`, `/it/` con hreflang). El blog solo existe en español.
Los textos se redactan en español y se traducen a inglés e italiano para revisión.

## Modelo de contenido
Colección única **Obra** con campo `estado`: `disponible` | `vendida` | `no a la venta`.
- Tienda: disponible + vendida. Una pieza vendida permanece en Tienda y en Portfolio.
- Portfolio: obras terminadas.
- Galería: colección aparte (vídeos, procesos).
- Cada obra tiene URL propia por idioma (SEO y compartir en redes).
- Ficha visible al pinchar: nombre, medidas, precio. Técnica y año se incluyen como texto discreto para SEO.
- Todas las piezas son únicas. Se envían con certificado de autenticidad.

## Compra
- Pago por PayPal en la web.
- Alternativa: contacto por WhatsApp (botón en cada obra).
- Piezas únicas: al venderse se marcan "Vendida" manualmente (automatizable más adelante).
- Envíos: Península y Baleares al inicio. Tarifas fijas por tamaño; "consultar" para obras muy grandes. Pendiente de definir con las medidas de las 6 obras. Embala y envía la artista.
- Futuro: pañuelos pintados, sudaderas artísticas.

## Newsletter y dossier
- Newsletter discreta al final de la página, llamada **"Cartas desde el taller"**, con botón **"Quiero recibirlas"**.
- Solicitud de dossier para galerías y coleccionistas.

## Diseño
- Rosa (#ecc4c7, el de Sophie Tea; acento #c47f88) y turquesa oscuro (#2f7d63), tonos apagados con identidad.
- Tipografía fina y elegante, todo en MAYÚSCULAS (aplicado por CSS).
- Muy visual, imágenes grandes, mucho espacio.
- Efecto del color: ratón (ordenador) / scroll (móvil). Respeta `prefers-reduced-motion`. Precio e información nunca dependen solo del hover.
- Vídeo hero con imagen de póster y versión ligera para móvil.

## Técnica
- Web a medida (opción A), alojada en hosting estático, con panel sencillo para que la artista suba obras.
- Dominio: marinadescalzi.com (pendiente de registrar).
- Repositorio público: las claves de PayPal y otros secretos nunca se suben (variables de entorno).
- Objetivos: SEO completo, móvil y escritorio optimizados, buena usabilidad y accesibilidad.

## Pendiente
- Logo, textos, fotos y vídeos.
- Tarifas de envío.
- Alta fiscal / IVA / facturación (consultar con gestor).
- Registrar el dominio.
- Elegir panel de gestión y alojamiento.
