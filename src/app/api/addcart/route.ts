import { NextRequest, NextResponse } from "next/server";
import { AddCart, cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";

export const POST = async (request: NextRequest) => {

    const req: AddCart = await request.json();

    // const { userId } = auth();

    const userId = "648623846286482";

    try {

        if (req) {

            const res = await db.insert(cartTable).values({
                user_id: userId as string,
                product_id: req.product_id,
                quantity: req.quantity,
                image: req.image,
                price: req.price,
                title: req.title,
                dressname: req.dressname,
                total_price: req.price * req.quantity,
            }).returning();

            return NextResponse.json({ res });

        } else {

            throw new Error("Failed to Insert Data");

        }

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }

};