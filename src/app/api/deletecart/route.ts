import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const DELETE = async (request: NextRequest) => {

    const req = request.nextUrl;

    try {

        if (req.searchParams.has("id")) {

            const reqID = req.searchParams.get("id");

            await db.delete(cartTable).where(eq<number | any>(cartTable.id, reqID));

            return NextResponse.json({ message: "Data Deleted" });

        }

        return NextResponse.json({ message: "Invalid ID" });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};