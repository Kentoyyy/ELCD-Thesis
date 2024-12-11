import connect from "@/utils/db";
import Notification from "@/models/Notification"; // Replace with your actual model
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  await connect();

  try {
    const notifications = await Notification.find({}).sort({ createdAt: -1 });

    // Return the notifications as JSON
    return new NextResponse(JSON.stringify(notifications), { status: 200 });
  } catch (err) {
    console.error("Error fetching notifications:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
