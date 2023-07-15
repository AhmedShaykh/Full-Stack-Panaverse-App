import { NextRequest, NextResponse } from "next/server";
// import { cartTable, db } from "@/lib/drizzle";
import { db } from '@vercel/postgres';

export const GET = async (request: NextRequest) => {

    const client = await db.connect();

    try {

        const res = await client.sql`SELECT * FROM Cart;`;

        return NextResponse.json({ res: res.rows });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};