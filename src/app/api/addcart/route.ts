import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { revalidatePath } from "next/cache";

export const POST = async (request: NextRequest) => {

    const req = await request.json();

    try {

        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            title: req.title,
            quantity: req.quantity || 1,
            price: req.price,
            image: req.image
        }).returning();
        // revalidatePath(new URL("/cart"))

        return NextResponse.json({ res });

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};