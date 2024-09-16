import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // Adjust the path as needed
import User from '@/models/User';
import connect from '@/utils/db';
import { Session } from 'next-auth'; // Import the Session type

export async function GET(request: Request) {
    const session: Session | null = await getServerSession(authOptions);

    // Check if the session exists and has a user object with an email
    if (!session || !session.user?.email) {
        return NextResponse.redirect('/login');
    }

    await connect();

    // Find the user by email
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        return NextResponse.error();
    }

    return NextResponse.json(user);
}

export async function PUT(request: Request) {
    const session: Session | null = await getServerSession(authOptions);

    // Check if the session exists and has a user object with an email
    if (!session || !session.user?.email) {
        return NextResponse.redirect('/login');
    }

    const { name, parentName, childName, childAge } = await request.json();

    await connect();

    // Find and update the user
    const user = await User.findOneAndUpdate(
        { email: session.user.email },
        { name, parentName, childName, childAge },
        { new: true } // This option returns the updated document
    );

    if (!user) {
        return NextResponse.error();
    }

    return NextResponse.json(user);
}
