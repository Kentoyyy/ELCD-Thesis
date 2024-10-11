// api/admin/users/route.ts
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();
  
  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse("Failed to fetch users", { status: 500 });
  }
};
