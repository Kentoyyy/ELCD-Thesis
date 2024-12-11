import Notification from "@/models/Notification";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();

  try {
    const notifications = await Notification.find().sort({ createdAt: -1 }); // Sort by newest first
    return NextResponse.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return new NextResponse("Failed to fetch notifications", { status: 500 });
  }
};
