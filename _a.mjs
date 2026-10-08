import sharp from 'sharp';
await sharp('C:/Users/fr/Downloads/Marina Descalzi WEB/IMG_3570.jpeg').rotate().metadata().then(m=>console.log(m.width,m.height));
const m=await sharp('public/obras/collage-ojo-gallo.webp').metadata();
const buf=await sharp('public/obras/collage-ojo-gallo.webp').extract({left:0,top:0,width:464,height:m.height}).webp({quality:88}).toBuffer();
await sharp(buf).toFile('public/obras/collage-ojo-gallo.webp');
