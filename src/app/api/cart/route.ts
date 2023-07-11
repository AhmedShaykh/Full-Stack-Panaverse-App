import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
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

// export const DELETE = async (request: NextRequest) => {

//     const req = request.nextUrl;

//     const reqID = req.searchParams.get("id");

//     try {

//         await db.delete(cartTable).where(eq(cartTable.id, reqID));

//         return NextResponse.json({ message: "Data Deleted" });

//     } catch (error) {

//         return NextResponse.json({ message: "Something Went Wrong" });

//     }
// };