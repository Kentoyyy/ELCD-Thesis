import User from "@/models/User";
import Notification from "../../../models/Notification";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    const { parentName, childName, childAge, accountName, accountEmail, password } = await request.json();

    console.log("Received Data:", { parentName, childName, childAge, accountName, accountEmail, password });

    await connect();

    try {
        const existingUser = await User.findOne({ email: accountEmail });

        if (existingUser) {
            console.log(`Email already registered: ${accountEmail}`);
            return new NextResponse("Email is already in use", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const newUser = new User({
            name: accountName,
            email: accountEmail,
            password: hashedPassword,
            parentName,
            childName,
            childAge,
        });

        console.log("Saving User:", newUser);

        await newUser.save();

        // Create a notification for the new user registration
        const newNotification = new Notification({
            type: "New User Registered",
            content: `${accountName} has just signed up. Click here to view the profile.`,
            link: `/admin/users`, // Adjust the link as needed
        });

        await newNotification.save();

        return new NextResponse("User is registered", { status: 200 });
    } catch (err: any) {
        console.error("Error during registration:", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
