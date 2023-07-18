import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const PUT = async (request: NextRequest) => {

    const req = request.nextUrl;

    const reqbody = await request.json();

    const quantity = reqbody.quantity;

    try {

        if (req.searchParams.has("id")) {

            const reqID = req.searchParams.get("id");

            await db.update(cartTable).set(<number | any>{
                quantity
            }).where(eq<number | any>(cartTable.id, reqID));

            return NextResponse.json({ message: "Item Updated" });

        }

        return NextResponse.json({ message: "Invalid ID" });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};