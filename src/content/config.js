import { z, defineCollection } from "astro:content"

const blogPosts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        tags: z.array(z.string()),
        publishedDate: z.string(),
        author: z.string(),
        image: z.string().optional(),
        isDraft: z.boolean().optional().default(false)
    })
})

export const collections = {
    'blogPosts': blogPosts,
};