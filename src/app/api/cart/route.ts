import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";
import { v4 as uuid } from "uuid";
import { eq } from "drizzle-orm";

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

export const DELETE = async (request: NextRequest) => {

    const req = request.nextUrl;

    const reqID = req.searchParams.get("id");

    try {

        await db.delete(cartTable).where(eq(cartTable.id, reqID));

        return NextResponse.json({ message: "Data Deleted" });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};