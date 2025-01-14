import User from "@/models/User";
import ArchivedUser from "@/models/ArchivedUser";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// Get a user by ID
export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  await connect();

  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Failed to fetch user", { status: 500 });
  }
};

// Archive a user by ID
export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  await connect();

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const archivedUser = new ArchivedUser(user.toObject());
    await archivedUser.save();

    return NextResponse.json({ message: "User archived successfully" }, { status: 200 });
  } catch (error) {
    console.error(`Failed to archive user with ID: ${id}`, error);
    return new NextResponse("Failed to archive user", { status: 500 });
  }
};

// Update a user by ID
export const PUT = async (request: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  await connect();

  try {
    const body = await request.json();
    
    // Find the user by ID and update their details
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    
    // Return the updated user data
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(`Failed to update user with ID: ${id}`, error);
    return new NextResponse("Failed to update user", { status: 500 });
  }
};