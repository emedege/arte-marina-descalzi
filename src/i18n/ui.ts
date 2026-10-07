export const locales = ['es', 'en', 'it'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';

export const WHATSAPP = '34689187877';
export const INSTAGRAM = 'https://www.instagram.com/marinadescalzig/';

export const ui = {
  es: {
    htmlLang: 'es-ES',
    siteDesc: 'Arte visual de Marina Descalzi: pintura, escultura, fotografía y joyería. El color que se esconde y vuelve a salir.',
    nav: { shop: 'Tienda', portfolio: 'Portfolio', gallery: 'Galería', about: 'Quién soy', contact: 'Contacto' },
    home: {
      tagline: 'El color no ha desaparecido. Se esconde.',
      sub: 'Pintura, escultura, fotografía y joyería de Marina Descalzi',
      cta: 'Ver la tienda',
      shopT: 'Tienda', shopD: 'Piezas únicas, con certificado de autenticidad.',
      portT: 'Portfolio', portD: 'Lo que he hecho, serie a serie.',
      galT: 'Galería', galD: 'Procesos, vídeos y todo lo que no se vende.',
    },
    pages: {
      shopTitle: 'Tienda', shopIntro: 'Piezas únicas. Envío a Península y Baleares incluido en el precio.',
      portTitle: 'Portfolio', portIntro: 'Obra realizada.',
      galTitle: 'Galería', galIntro: 'Procesos, vídeos y material que no está a la venta.',
      galEmpty: 'Próximamente.',
      aboutTitle: 'Quién soy', aboutText: 'Texto pendiente. Aquí irá la historia de Marina Descalzi y su trabajo con el color.',
      contactTitle: 'Contacto', contactIntro: 'Escríbeme por WhatsApp para comprar una pieza, encargar una obra o pedir el dossier.',
      whatsapp: 'Escribir por WhatsApp', dossier: 'Pedir dossier', instagram: 'Instagram',
      dossierMsg: 'Hola Marina, me gustaría recibir el dossier.',
    },
    work: {
      sold: 'Vendida', available: 'Disponible', notForSale: 'No a la venta',
      size: 'Medidas', price: 'Precio', technique: 'Técnica', year: 'Año',
      shippingIncl: 'Envío incluido (Península y Baleares). Pieza única con certificado de autenticidad.',
      buyWhatsapp: 'Comprar por WhatsApp', buyPaypal: 'Pagar con PayPal', paypalSoon: 'Pago con PayPal próximamente',
      back: 'Volver', wa: (t: string) => `Hola Marina, me interesa la obra "${t}".`,
    },
    news: { title: 'Cartas desde el taller', text: 'Novedades, procesos y obra nueva, sin prisa.', email: 'Tu email', button: 'Quiero recibirlas' },
    footer: { rights: 'Todos los derechos reservados', legal: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies', terms: 'Condiciones de venta' },
    lang: 'Idioma',
  },
  en: {
    htmlLang: 'en',
    siteDesc: 'Visual art by Marina Descalzi: painting, sculpture, photography and jewellery. Colour that hides, then comes back.',
    nav: { shop: 'Shop', portfolio: 'Portfolio', gallery: 'Gallery', about: 'About', contact: 'Contact' },
    home: {
      tagline: 'Colour has not disappeared. It hides.',
      sub: 'Painting, sculpture, photography and jewellery by Marina Descalzi',
      cta: 'Visit the shop',
      shopT: 'Shop', shopD: 'Unique pieces, with certificate of authenticity.',
      portT: 'Portfolio', portD: 'What I have made, series by series.',
      galT: 'Gallery', galD: 'Processes, videos and everything not for sale.',
    },
    pages: {
      shopTitle: 'Shop', shopIntro: 'Unique pieces. Shipping to mainland Spain and the Balearic Islands included in the price.',
      portTitle: 'Portfolio', portIntro: 'Finished work.',
      galTitle: 'Gallery', galIntro: 'Processes, videos and material not for sale.',
      galEmpty: 'Coming soon.',
      aboutTitle: 'About', aboutText: 'Text pending. The story of Marina Descalzi and her work with colour will go here.',
      contactTitle: 'Contact', contactIntro: 'Write to me on WhatsApp to buy a piece, commission a work or request the dossier.',
      whatsapp: 'Message on WhatsApp', dossier: 'Request dossier', instagram: 'Instagram',
      dossierMsg: 'Hello Marina, I would like to receive the dossier.',
    },
    work: {
      sold: 'Sold', available: 'Available', notForSale: 'Not for sale',
      size: 'Size', price: 'Price', technique: 'Technique', year: 'Year',
      shippingIncl: 'Shipping included (mainland Spain and Balearic Islands). Unique piece with certificate of authenticity.',
      buyWhatsapp: 'Buy via WhatsApp', buyPaypal: 'Pay with PayPal', paypalSoon: 'PayPal payment coming soon',
      back: 'Back', wa: (t: string) => `Hello Marina, I am interested in the work "${t}".`,
    },
    news: { title: 'Letters from the studio', text: 'News, processes and new work, unhurried.', email: 'Your email', button: 'I want to receive them' },
    footer: { rights: 'All rights reserved', legal: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies', terms: 'Terms of sale' },
    lang: 'Language',
  },
  it: {
    htmlLang: 'it-IT',
    siteDesc: 'Arte visiva di Marina Descalzi: pittura, scultura, fotografia e gioielli. Il colore che si nasconde e poi riemerge.',
    nav: { shop: 'Negozio', portfolio: 'Portfolio', gallery: 'Galleria', about: 'Chi sono', contact: 'Contatto' },
    home: {
      tagline: 'Il colore non è scomparso. Si nasconde.',
      sub: 'Pittura, scultura, fotografia e gioielli di Marina Descalzi',
      cta: 'Vai al negozio',
      shopT: 'Negozio', shopD: 'Pezzi unici, con certificato di autenticità.',
      portT: 'Portfolio', portD: 'Ciò che ho fatto, serie dopo serie.',
      galT: 'Galleria', galD: 'Processi, video e tutto ciò che non è in vendita.',
    },
    pages: {
      shopTitle: 'Negozio', shopIntro: 'Pezzi unici. Spedizione in Spagna continentale e Baleari inclusa nel prezzo.',
      portTitle: 'Portfolio', portIntro: 'Opere realizzate.',
      galTitle: 'Galleria', galIntro: 'Processi, video e materiale non in vendita.',
      galEmpty: 'In arrivo.',
      aboutTitle: 'Chi sono', aboutText: 'Testo in arrivo. Qui andrà la storia di Marina Descalzi e del suo lavoro con il colore.',
      contactTitle: 'Contatto', contactIntro: "Scrivimi su WhatsApp per acquistare un pezzo, commissionare un'opera o richiedere il dossier.",
      whatsapp: 'Scrivi su WhatsApp', dossier: 'Richiedi il dossier', instagram: 'Instagram',
      dossierMsg: 'Ciao Marina, vorrei ricevere il dossier.',
    },
    work: {
      sold: 'Venduta', available: 'Disponibile', notForSale: 'Non in vendita',
      size: 'Misure', price: 'Prezzo', technique: 'Tecnica', year: 'Anno',
      shippingIncl: 'Spedizione inclusa (Spagna continentale e Baleari). Pezzo unico con certificato di autenticità.',
      buyWhatsapp: 'Acquista su WhatsApp', buyPaypal: 'Paga con PayPal', paypalSoon: 'Pagamento con PayPal in arrivo',
      back: 'Indietro', wa: (t: string) => `Ciao Marina, sono interessato all'opera "${t}".`,
    },
    news: { title: 'Lettere dallo studio', text: 'Novità, processi e nuove opere, senza fretta.', email: 'La tua email', button: 'Voglio riceverle' },
    footer: { rights: 'Tutti i diritti riservati', legal: 'Note legali', privacy: 'Privacy', cookies: 'Cookie', terms: 'Condizioni di vendita' },
    lang: 'Lingua',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const langNames: Record<Lang, string> = { es: 'ES', en: 'EN', it: 'IT' };
