/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "4ptgejwq",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        NEXT_PUBLIC_API_VERSION: "2023-05-29",
        NEXT_PUBLIC_SANITY_ACCESS_TOKEN: "skQfxgIwD8GYVRKlgRdL3IyeEeXCK0JsPTBcLFaMpeQGdmofau2H8rD0cjC570FyQfojs4d0kb7NtjoytccfOTAAwzGLgL4fTZIyWt6dp3Fpjm6O9fQiDnmtoPqoYJBPRDTm65vbDIxXALEe2fxBiSBf1peVguNRkdVnXvaGiw9g67NpLFlo",
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_ZmluZS10ZXJtaXRlLTQ4LmNsZXJrLmFjY291bnRzLmRldiQ",
        CLERK_SECRET_KEY: "sk_test_eRhDHzxCfkfF57kiod7w4Aqo0X583DPO4zHOEouJ38"
    },
    images: {
        domains: ["cdn.sanity.io"]
    }
};

module.exports = nextConfig;