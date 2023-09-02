import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/drizzle.ts",
    driver: "pg",
    out: "./src/migration"
} satisfies Config;