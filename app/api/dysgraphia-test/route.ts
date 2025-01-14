import connect from "@/utils/db";
import User from "@/models/User";
import Notification from "@/models/Notification";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connect();
  const { userId, prediction, confidence, severity } = await request.json();

  try {
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    user.testResults.push({
      testType: "Dysgraphia",
      result: prediction,
      severity,
      confidence,
    });

    await user.save();

    // Create a notification
    const notification = new Notification({
      type: "Dysgraphia Test",
      content: `User ${user.name} (${user.email}) has taken the Dysgraphia test.`,
      link: `/admin-panel/users/${userId}`,
      status: "taken",
    });
    await notification.save();

    return NextResponse.json({ message: "Test result saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error saving test result:", error);
    return new NextResponse("Failed to save test result", { status: 500 });
  }
};