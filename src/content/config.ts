import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('News'),
    image: z.string().optional(),
    author: z.string().default('Nagpur Mail Desk')
  }),
});
export const collections = { blog };

