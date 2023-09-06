import { NextRequest, NextResponse } from "next/server";
import { AddCart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

export const PUT = async (request: NextRequest) => {

    const req: AddCart = await request.json();

    const { userId } = auth();

    try {

        if (req) {

            const res = await db.update(cartTable).set({
                quantity: req.quantity,
                total_price: req.price,
            }).where(and(eq(cartTable.user_id, userId as string),
                eq(cartTable.product_id, req.product_id)
            )).returning();

            return NextResponse.json({ res });

        } else {

            throw new Error("Failed to Update Data");

        }

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};