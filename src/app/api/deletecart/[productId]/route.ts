import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

export const DELETE = async (
    request: NextRequest,
    { params: { productId } }: { params: { productId: string } }
) => {

    const { userId } = auth();

    try {

        if (productId && userId) {

            await db.delete(cartTable).where(and(
                eq(cartTable.user_id, userId as string),
                eq(cartTable.product_id, productId)
            )).returning();

            return NextResponse.json({ Message: "Item Delete" });

        } else {

            if (productId) {

                throw new Error("Please Login");

            } else {

                throw new Error("Incorrect Product Id");

            }
        }

    } catch (error) {

        return NextResponse.json({ message: "Something Went Wrong" });

    }
};