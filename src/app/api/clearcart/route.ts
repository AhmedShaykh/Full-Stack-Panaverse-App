import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

export const GET = async (request: NextRequest) => {

    const client = await db.connect();

    try {

        await client.sql`TRUNCATE TABLE Cart;`;

        return NextResponse.json({ message: "Table All Items Clear" });

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};