import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

export const DELETE = async (request: NextRequest) => {

    const client = await db.connect();

    const req = request.nextUrl;

    try {

        if (req.searchParams.has("id")) {

            const reqID = req.searchParams.get("id");

            await client.sql`DELETE FROM Cart WHERE ID = ${reqID};`;

            return NextResponse.json({ message: "Data Deleted" });

        }

        return NextResponse.json({ message: "Invalid ID" });

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }

};