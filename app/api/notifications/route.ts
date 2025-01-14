import connect from "@/utils/db";
import Notification from "@/models/Notification";
import { NextResponse } from "next/server";

// Handler for GET requests to fetch notifications
export const GET = async () => {
  await connect();

  try {
    const notifications = await Notification.find({}).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(notifications), { status: 200 });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// Handler for creating a notification (POST)
export const POST = async (request: Request) => {
  await connect();
  try {
    const { type, content, link, status } = await request.json();
    const newNotification = new Notification({ type, content, link, status });

    await newNotification.save();
    return new NextResponse("Notification created successfully", { status: 201 });
  } catch (error) {
    console.error("Error creating notification:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};