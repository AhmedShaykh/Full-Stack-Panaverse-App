import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";
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
            product_id: req.product_id,
            quantity: req.quantity || 1,
            user_id: cookies().get("user_id")?.value as string
        }).returning();

        return NextResponse.json({ res });

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};

export const DELETE = async (request: NextRequest) => {

    const req = await request.json();

    try {

        const res = await db.delete(cartTable).where(eq(cartTable.id, req.id));

        return NextResponse.json({ res, message: "Data Deleted" });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};