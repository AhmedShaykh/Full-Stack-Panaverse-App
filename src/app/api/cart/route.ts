import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";

export const GET = async (request: NextRequest) => {

    try {

        const res = await db.select().from(cartTable);

        return NextResponse.json({ res });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};

export const POST = async (request: NextRequest) => {

    const req = await request.json();

    try {

        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            title: req.title,
            quantity: 1,
            price: req.price,
            image: req.image
        }).returning();

        return NextResponse.json({ res });

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};