import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const obras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    categoria: z.enum(['pintura', 'fotografia', 'collage', 'diseno']).default('pintura'),
    estado: z.enum(['disponible', 'vendida', 'no a la venta']),
    medidas: z.string(),
    precio: z.number().optional(),
    tecnica: z.string().optional(),
    anio: z.number().optional(),
    serie: z.string().optional(),
    orden: z.number().default(0),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { obras };
