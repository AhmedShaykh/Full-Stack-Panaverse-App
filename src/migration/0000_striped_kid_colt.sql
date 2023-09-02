CREATE TABLE IF NOT EXISTS "cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"product_id" varchar(255) NOT NULL,
	"product_name" varchar(255) NOT NULL,
	"subcat" varchar(255) NOT NULL,
	"image" text NOT NULL,
	"price" integer NOT NULL,
	"quantity" integer NOT NULL,
	"total_price" integer NOT NULL
);