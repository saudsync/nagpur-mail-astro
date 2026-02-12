import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('General'),
    author: z.string().default('Nagpur Mail Desk'),
    image: z.string().default('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
