// api/users/count.ts
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    console.log("Fetching user count...");
    await connect(); // Ensure DB is connected

    try {
        const userCount = await User.countDocuments(); // Get the total count of users
        console.log(`Total users found: ${userCount}`);
        return NextResponse.json({ userCount });
    } catch (err: any) {
        console.error("Error fetching user count:", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
