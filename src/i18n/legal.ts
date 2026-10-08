// Textos legales (borrador, en español). Los datos del titular están aquí, en un solo sitio.
export const TITULAR = {
  nombre: 'Marina Descalzi Guercio',
  nif: '47296050T',
  domicilio: 'Calle Picos de Urbión, 1, Pozuelo de Alarcón (Madrid)',
  email: 'arte@marinadescalzi.es',
  web: 'marinadescalzi.com',
  actualizado: 'octubre de 2026',
};

export const nota: Record<string, string> = {
  es: '',
  en: 'The legal texts are available in Spanish only.',
  it: 'I testi legali sono disponibili solo in spagnolo.',
};

type Seccion = { h: string; p: string[] };
const T = TITULAR;
const mail = `<a href="mailto:${T.email}">${T.email}</a>`;

export const textos: Record<string, Seccion[]> = {
  'aviso-legal': [
    { h: 'Titular del sitio web', p: [
      `En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de que el titular de este sitio web (${T.web}) es ${T.nombre}, con NIF ${T.nif} y domicilio en ${T.domicilio}.`,
      `Contacto: ${mail}.`] },
    { h: 'Objeto', p: [
      'Este sitio web presenta la obra de la artista visual Marina Descalzi y permite consultar y encargar obra original disponible. La navegación implica aceptar este aviso legal.'] },
    { h: 'Propiedad intelectual', p: [
      'Las obras, fotografías, vídeos, textos, logotipo, firma y diseño de este sitio son de Marina Descalzi Guercio o se usan con autorización, y están protegidos por la normativa de propiedad intelectual. Queda prohibida su reproducción, distribución o transformación sin permiso por escrito, salvo para uso personal y privado.',
      'La compra de una obra original no transfiere los derechos de explotación ni de reproducción de la imagen, que siguen perteneciendo a la autora.'] },
    { h: 'Responsabilidad', p: [
      'La titular procura que la información de la web sea exacta y esté actualizada, pero no garantiza que no haya errores o interrupciones. Los colores de las obras pueden variar según la pantalla. No se responsabiliza del contenido de webs de terceros enlazadas.'] },
    { h: 'Legislación y jurisdicción', p: [
      'Este aviso se rige por la legislación española. Si eres consumidor, podrás acudir a los juzgados de tu domicilio.'] },
  ],
  privacidad: [
    { h: 'Responsable del tratamiento', p: [
      `${T.nombre}, NIF ${T.nif}, ${T.domicilio}. Contacto: ${mail}.`] },
    { h: 'Qué datos tratamos y para qué', p: [
      'Contacto y consultas: si escribes por WhatsApp o por correo, usamos tu nombre, teléfono o email y el contenido del mensaje para responderte. Base jurídica: tu consentimiento y la aplicación de medidas precontractuales a petición tuya.',
      'Compra de obra: para gestionar el encargo, el pago, el envío y el certificado de autenticidad, tratamos tus datos identificativos, dirección de entrega, contacto y datos del pago. Base jurídica: ejecución del contrato y obligaciones legales (fiscales y contables).',
      'Newsletter «Cartas desde el taller»: si te suscribes, usamos tu email para enviarte novedades. Base jurídica: tu consentimiento, que puedes retirar en cualquier momento.'] },
    { h: 'Conservación', p: [
      'Conservamos los datos mientras dure la relación y, después, durante los plazos exigidos por la ley (por ejemplo, la documentación fiscal). Los de la newsletter, hasta que te des de baja.'] },
    { h: 'Destinatarios', p: [
      'No cedemos tus datos a terceros salvo obligación legal. Pueden acceder a ellos proveedores que prestan servicios a esta web, como el alojamiento, el servicio de envío de newsletter, WhatsApp (Meta), mensajería y gestoría, solo para ese servicio y con las garantías que exige la normativa.'] },
    { h: 'Tus derechos', p: [
      `Puedes solicitar el acceso, rectificación, supresión, oposición, limitación y portabilidad de tus datos escribiendo a ${mail}. Si consideras que no se han tratado correctamente, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`] },
  ],
  cookies: [
    { h: 'Qué son las cookies', p: [
      'Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo. Sirven, por ejemplo, para recordar preferencias o medir visitas.'] },
    { h: 'Qué usamos en esta web', p: [
      'Esta web no utiliza cookies de publicidad, de seguimiento ni de análisis. Solo puede usar almacenamiento técnico imprescindible para funcionar (por ejemplo, recordar una preferencia de visualización), que no requiere consentimiento.',
      'Si en el futuro se añaden herramientas de analítica o contenido de terceros, se actualizará esta política y se pedirá tu consentimiento antes de activarlas.'] },
    { h: 'Cómo gestionarlas', p: [
      'Puedes borrar o bloquear las cookies desde la configuración de tu navegador. Hacerlo puede afectar al funcionamiento de algunas webs.'] },
    { h: 'Contacto', p: [`Para cualquier duda: ${mail}.`] },
  ],
  'condiciones-de-venta': [
    { h: 'Vendedora', p: [
      `${T.nombre}, NIF ${T.nif}, ${T.domicilio}. Contacto: ${mail} o WhatsApp.`] },
    { h: 'Producto', p: [
      'Se vende obra original, pieza única, con certificado de autenticidad. Cada obra figura con su título, medidas, técnica y precio en euros. Una obra marcada como vendida deja de estar disponible. Los colores pueden variar ligeramente según la pantalla.'] },
    { h: 'Cómo comprar', p: [
      'Escríbenos por WhatsApp o por correo indicando la obra que te interesa. Te confirmaremos su disponibilidad y los datos de pago. La obra queda reservada cuando se confirma el encargo.'] },
    { h: 'Precio y pago', p: [
      'El precio publicado incluye el envío a la España peninsular y a Baleares. El pago se realiza por Bizum o transferencia bancaria; los datos se facilitan por WhatsApp o por correo al confirmar el encargo.'] },
    { h: 'Envío', p: [
      'La obra se envía debidamente embalada en un plazo de 7 días desde el encargo. Se enviará únicamente a la España peninsular y a Baleares. Recibirás los datos de seguimiento cuando se envíe. Al recibir el paquete, comprueba su estado; si hay daños por el transporte, avísanos en un máximo de 48 horas con fotografías.'] },
    { h: 'Derecho de desistimiento', p: [
      'Si eres consumidor, puedes desistir de la compra en un plazo de 14 días naturales desde que recibes la obra, sin necesidad de justificación. Para ello, comunícalo por correo o WhatsApp. Debes devolver la obra en perfecto estado y con su embalaje en un máximo de 14 días desde que nos lo comunicas; los gastos directos de devolución corren a cargo del comprador. Te reembolsaremos el importe en un máximo de 14 días desde que recibamos la obra.',
      'Este derecho no se aplica a obras realizadas por encargo según tus especificaciones.'] },
    { h: 'Garantía y reclamaciones', p: [
      `Se aplica la garantía legal que corresponda según la normativa de consumidores. Puedes dirigir cualquier incidencia a ${mail}. Disponemos de hojas de reclamaciones a tu disposición.`] },
    { h: 'Legislación', p: [
      'Estas condiciones se rigen por la legislación española. Si eres consumidor, podrás acudir a los juzgados de tu domicilio.'] },
  ],
};
