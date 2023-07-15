import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";

export const GET = async (request: NextRequest) => {

    try {

        const res = await db.select().from(cartTable);

        return NextResponse.json({ res });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};