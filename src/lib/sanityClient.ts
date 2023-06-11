import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
    useCdn: true,
});