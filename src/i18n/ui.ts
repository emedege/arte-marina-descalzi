export const locales = ['es', 'en', 'it'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';

export const WHATSAPP = '34689187877';
export const INSTAGRAM = 'https://www.instagram.com/marinadescalzig/';

export const ui = {
  es: {
    htmlLang: 'es-ES',
    siteDesc: 'Arte visual de Marina Descalzi: pintura, fotografía, collage y diseño. El color que se esconde y vuelve a salir.',
    nav: { home: 'Inicio', shop: 'Tienda', portfolio: 'Portfolio', gallery: 'Galería', about: 'Quién soy', contact: 'Contacto' },
    home: {
      tagline: 'El color no ha desaparecido. Se esconde.',
      sub: 'Pintura, fotografía, collage y diseño de Marina Descalzi',
      cta: 'Ver la tienda',
      shopT: 'Tienda', shopD: 'Piezas únicas, con certificado de autenticidad.',
      portT: 'Portfolio', portD: 'Lo que he hecho, serie a serie.',
      galT: 'Galería', galD: 'Procesos, vídeos y todo lo que no se vende.',
    },
    pages: {
      shopTitle: 'Tienda', shopIntro: 'Piezas únicas. Envío a Península y Baleares incluido en el precio.',
      portTitle: 'Portfolio', portIntro: 'Obra realizada.',
      galTitle: 'Galería', galIntro: 'Procesos, vídeos y material que no está a la venta.',
      shopEmpty: 'Muy pronto, nuevas piezas. Escríbeme por WhatsApp si quieres saber qué hay disponible.', galEmpty: 'Más procesos, muy pronto.', galVideo1: 'Telas contra el cielo', aboutAlt: 'Marina Descalzi en su taller',
      aboutTitle: 'Quién soy', aboutText: ["Marina Descalzi Guercio (Madrid, 1990), artista plástica de raíces argentinas. Apasionada por la naturaleza, sus texturas y colores, encuentra en la fotografía y la poesía visual una forma de mirar y de acercarse a lo cotidiano. En su obra, la identidad femenina aparece de manera figurativa o abstracta, como presencia, huella o sugerencia.",
        "Vinculada a la educación artística y a la joyería de autor, entiende la creación como un espacio de exploración donde la acción y el proceso tienen un valor propio. Su interés por lo artesanal y lo meditativo se expresa en la atención al gesto, a la materia y al tiempo que requiere cada pieza.",
        "Sus pinturas, de intenso color, suelen quedar cubiertas por una especie de velo que las oculta parcialmente, dejando zonas donde el color emerge con fuerza. Ese juego entre lo visible y lo velado reivindica su presencia en una época que parece diluirse entre blancos, negros y grises. Bajo el velo, el color permanece, encuentra sus resquicios y se hace visible."],
      contactTitle: 'Contacto', contactIntro: 'Escríbeme por WhatsApp para comprar una pieza, encargar una obra o pedir el dossier.',
      whatsapp: 'Escribir por WhatsApp', dossier: 'Pedir dossier', instagram: 'Instagram',
      dossierMsg: 'Hola Marina, me gustaría recibir el dossier.',
    },
    work: {
      sold: 'Vendida', available: 'Disponible', notForSale: 'No a la venta',
      size: 'Medidas', price: 'Precio', priceAsk: 'Consultar', technique: 'Técnica', year: 'Año', exhibited: 'Expuesta en',
      shippingIncl: 'Envío incluido (Península y Baleares). Pieza única con certificado de autenticidad.',
      buyWhatsapp: 'Comprar por WhatsApp', buyPaypal: 'Pagar con PayPal', paypalSoon: 'Pago con PayPal próximamente',
      back: 'Volver', wa: (t: string) => `Hola Marina, me interesa la obra "${t}".`,
    },
    news: { title: 'Cartas desde el taller', text: 'Novedades, procesos y obra nueva, sin prisa.', email: 'Tu email', button: 'Quiero recibirlas' },
    footer: { rights: 'Todos los derechos reservados', legal: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies', terms: 'Condiciones de venta' },
    filters: { label: 'Filtrar por tipo de obra', all: 'Todas', pintura: 'Pintura', fotografia: 'Fotografía', collage: 'Collage', diseno: 'Diseño' },
    lang: 'Idioma',
  },
  en: {
    htmlLang: 'en',
    siteDesc: 'Visual art by Marina Descalzi: painting, photography, collage and design. Colour that hides, then comes back.',
    nav: { home: 'Home', shop: 'Shop', portfolio: 'Portfolio', gallery: 'Gallery', about: 'About', contact: 'Contact' },
    home: {
      tagline: 'Colour has not disappeared. It hides.',
      sub: 'Painting, photography, collage and design by Marina Descalzi',
      cta: 'Visit the shop',
      shopT: 'Shop', shopD: 'Unique pieces, with certificate of authenticity.',
      portT: 'Portfolio', portD: 'What I have made, series by series.',
      galT: 'Gallery', galD: 'Processes, videos and everything not for sale.',
    },
    pages: {
      shopTitle: 'Shop', shopIntro: 'Unique pieces. Shipping to mainland Spain and the Balearic Islands included in the price.',
      portTitle: 'Portfolio', portIntro: 'Finished work.',
      galTitle: 'Gallery', galIntro: 'Processes, videos and material not for sale.',
      shopEmpty: 'New pieces very soon. Message me on WhatsApp to find out what is available.', galEmpty: 'More processes, very soon.', galVideo1: 'Fabrics against the sky', aboutAlt: 'Marina Descalzi in her studio',
      aboutTitle: 'About', aboutText: ["Marina Descalzi Guercio (Madrid, 1990) is a visual artist of Argentine roots. Passionate about nature, its textures and colours, she finds in photography and visual poetry a way of looking at, and drawing close to, the everyday. In her work, female identity appears figuratively or abstractly, as presence, trace or suggestion.",
        "Linked to art education and to author jewellery, she understands creation as a space of exploration where action and process have a value of their own. Her interest in the handmade and the meditative is expressed in her attention to gesture, to matter and to the time each piece requires.",
        "Her paintings, of intense colour, are often covered by a kind of veil that partly hides them, leaving areas where colour emerges with force. This play between the visible and the veiled reclaims colour's presence in an age that seems to dissolve into whites, blacks and greys. Beneath the veil, colour remains, finds its cracks and becomes visible."],
      contactTitle: 'Contact', contactIntro: 'Write to me on WhatsApp to buy a piece, commission a work or request the dossier.',
      whatsapp: 'Message on WhatsApp', dossier: 'Request dossier', instagram: 'Instagram',
      dossierMsg: 'Hello Marina, I would like to receive the dossier.',
    },
    work: {
      sold: 'Sold', available: 'Available', notForSale: 'Not for sale',
      size: 'Size', price: 'Price', priceAsk: 'On request', technique: 'Technique', year: 'Year', exhibited: 'Exhibited at',
      shippingIncl: 'Shipping included (mainland Spain and Balearic Islands). Unique piece with certificate of authenticity.',
      buyWhatsapp: 'Buy via WhatsApp', buyPaypal: 'Pay with PayPal', paypalSoon: 'PayPal payment coming soon',
      back: 'Back', wa: (t: string) => `Hello Marina, I am interested in the work "${t}".`,
    },
    news: { title: 'Letters from the studio', text: 'News, processes and new work, unhurried.', email: 'Your email', button: 'I want to receive them' },
    footer: { rights: 'All rights reserved', legal: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies', terms: 'Terms of sale' },
    filters: { label: 'Filter by type of work', all: 'All', pintura: 'Painting', fotografia: 'Photography', collage: 'Collage', diseno: 'Design' },
    lang: 'Language',
  },
  it: {
    htmlLang: 'it-IT',
    siteDesc: 'Arte visiva di Marina Descalzi: pittura, fotografia, collage e design. Il colore che si nasconde e poi riemerge.',
    nav: { home: 'Home', shop: 'Negozio', portfolio: 'Portfolio', gallery: 'Galleria', about: 'Chi sono', contact: 'Contatto' },
    home: {
      tagline: 'Il colore non è scomparso. Si nasconde.',
      sub: 'Pittura, fotografia, collage e design di Marina Descalzi',
      cta: 'Vai al negozio',
      shopT: 'Negozio', shopD: 'Pezzi unici, con certificato di autenticità.',
      portT: 'Portfolio', portD: 'Ciò che ho fatto, serie dopo serie.',
      galT: 'Galleria', galD: 'Processi, video e tutto ciò che non è in vendita.',
    },
    pages: {
      shopTitle: 'Negozio', shopIntro: 'Pezzi unici. Spedizione in Spagna continentale e Baleari inclusa nel prezzo.',
      portTitle: 'Portfolio', portIntro: 'Opere realizzate.',
      galTitle: 'Galleria', galIntro: 'Processi, video e materiale non in vendita.',
      shopEmpty: 'Nuovi pezzi a breve. Scrivimi su WhatsApp per sapere cosa è disponibile.', galEmpty: 'Altri processi, presto.', galVideo1: 'Tessuti contro il cielo', aboutAlt: 'Marina Descalzi nel suo studio',
      aboutTitle: 'Chi sono', aboutText: ["Marina Descalzi Guercio (Madrid, 1990) è un'artista visiva di origini argentine. Appassionata di natura, delle sue texture e dei suoi colori, trova nella fotografia e nella poesia visiva un modo di guardare e di avvicinarsi al quotidiano. Nella sua opera, l'identità femminile compare in modo figurativo o astratto, come presenza, traccia o suggestione.",
        "Legata all'educazione artistica e alla gioielleria d'autore, intende la creazione come uno spazio di esplorazione in cui l'azione e il processo hanno un valore proprio. Il suo interesse per l'artigianale e il meditativo si esprime nell'attenzione al gesto, alla materia e al tempo che ogni pezzo richiede.",
        "I suoi dipinti, dal colore intenso, restano spesso coperti da una sorta di velo che li nasconde in parte, lasciando zone in cui il colore emerge con forza. Questo gioco tra il visibile e il velato rivendica la presenza del colore in un'epoca che sembra dissolversi tra bianchi, neri e grigi. Sotto il velo, il colore permane, trova i suoi spiragli e si rende visibile."],
      contactTitle: 'Contatto', contactIntro: "Scrivimi su WhatsApp per acquistare un pezzo, commissionare un'opera o richiedere il dossier.",
      whatsapp: 'Scrivi su WhatsApp', dossier: 'Richiedi il dossier', instagram: 'Instagram',
      dossierMsg: 'Ciao Marina, vorrei ricevere il dossier.',
    },
    work: {
      sold: 'Venduta', available: 'Disponibile', notForSale: 'Non in vendita',
      size: 'Misure', price: 'Prezzo', priceAsk: 'Su richiesta', technique: 'Tecnica', year: 'Anno', exhibited: 'Esposta a',
      shippingIncl: 'Spedizione inclusa (Spagna continentale e Baleari). Pezzo unico con certificato di autenticità.',
      buyWhatsapp: 'Acquista su WhatsApp', buyPaypal: 'Paga con PayPal', paypalSoon: 'Pagamento con PayPal in arrivo',
      back: 'Indietro', wa: (t: string) => `Ciao Marina, sono interessato all'opera "${t}".`,
    },
    news: { title: 'Lettere dallo studio', text: 'Novità, processi e nuove opere, senza fretta.', email: 'La tua email', button: 'Voglio riceverle' },
    footer: { rights: 'Tutti i diritti riservati', legal: 'Note legali', privacy: 'Privacy', cookies: 'Cookie', terms: 'Condizioni di vendita' },
    filters: { label: 'Filtra per tipo di opera', all: 'Tutte', pintura: 'Pittura', fotografia: 'Fotografia', collage: 'Collage', diseno: 'Design' },
    lang: 'Lingua',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const langNames: Record<Lang, string> = { es: 'ES', en: 'EN', it: 'IT' };
