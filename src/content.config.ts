import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const obras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    categoria: z.enum(['pintura', 'fotografia', 'collage', 'intervencion', 'diseno']).default('pintura'),
    estado: z.enum(['disponible', 'vendida', 'no a la venta']),
    medidas: z.string().optional(),
    precio: z.number().optional(),
    tecnica: z.string().optional(),
    tecnica_en: z.string().optional(),
    tecnica_it: z.string().optional(),
    exposicion: z.string().optional(),
    anio: z.number().optional(),
    serie: z.string().optional(),
    orden: z.number().default(0),
    portada: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

const galeria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeria' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    title_it: z.string().optional(),
    tipo: z.enum(['proceso', 'material', 'inspiracion']),
    image: z.string().optional(),
    alt: z.string().optional(),
    video: z.string().optional(),
    poster: z.string().optional(),
    orden: z.number().default(0),
  }),
});

export const collections = { obras, galeria };
