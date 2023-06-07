/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "4ptgejwq",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        NEXT_PUBLIC_API_VERSION: "2023-05-29",
        NEXT_PUBLIC_SANITY_ACCESS_TOKEN: "skW2wOY8lzz6WLl6zrJ1WoGXBziWr3iiVA67HNIu2486rojFs1m25uHF4KLVE4AWUpKWflkgXgzDHXdmDGnwH7bpMx4BbZmHjlwF1MMcz3ZtDKU3lBvGuygxrcD6sh994qU23mQaf5f7ondP1q3UHJrEhZqvW9w3KeWYuocx61JUIHQPeh3a"
    },
    images: {
        domains: ["cdn.sanity.io"]
    }
};

module.exports = nextConfig;