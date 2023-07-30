import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

export const POST = async (request: NextRequest) => {

    const req = await request.json();

    const uid = uuid();

    const setCookies = cookies();

    const user_id = cookies().get("user_id");

    if (!user_id) {
        setCookies.set("user_id", uid);
    }

    try {

        const res = await db.insert(cartTable).values({
            user_id: cookies().get("user_id")?.value as string,
            product_id: req.product_id,
            title: req.title,
            quantity: req.quantity || 1,
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