import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connect();
  const { userId, answers, prediction, confidence, severity } = await request.json();

  try {
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    user.testResults.push({
      testType: "Dyslexia",
      result: prediction,
      severity,
      confidence,
    });

    await user.save();
    return NextResponse.json({ message: "Test result saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error saving test result:", error);
    return new NextResponse("Failed to save test result", { status: 500 });
  }
};