import connect from "@/utils/db";
import Notification from "@/models/Notification"; // Adjust path if needed
import { NextResponse } from "next/server";

// Handler for GET requests
export const GET = async (request: any) => {
  await connect();

  try {
    const notifications = await Notification.find({}).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(notifications), { status: 200 });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// Handler for PUT requests to mark a notification as read
export const PUT = async (request: Request) => {
  await connect();

  try {
    const { id } = await request.json();
    const notification = await Notification.findById(id);

    if (notification) {
      notification.isRead = true;
      await notification.save();
      return new NextResponse("Notification marked as read", { status: 200 });
    } else {
      return new NextResponse("Notification not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
