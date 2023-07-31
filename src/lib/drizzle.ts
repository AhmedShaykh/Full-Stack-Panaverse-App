import {
    pgTable,
    serial,
    varchar,
    integer
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255
    }).notNull(),
    product_id: varchar("product_id", {
        length: 255
    }).notNull(),
    // title: varchar("title", {
    //     length: 255
    // }).notNull(),
    quantity: integer("quantity").notNull(),
    // price: integer("price").notNull(),
    // image: varchar("image", {
    //     length: 255
    // }).notNull()
});

export type Cart = InferModel<typeof cartTable>;

export type AddCart = InferModel<typeof cartTable, "insert">;

export const db = drizzle(sql);