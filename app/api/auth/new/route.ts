import { NextResponse } from 'next/server';
import User from '@/models/User'; // Adjust path if needed
import connect from '@/utils/db'; // Adjust path if needed
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { token, password } = await request.json();
        if (!token || !password) {
            return NextResponse.json({ error: 'Token and password are required' }, { status: 400 });
        }

        await connect();

        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }, // Check if the token has not expired
        });

        if (!user) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Remove the reset token and expiry date
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;

        // Save the updated user
        await user.save();

        return NextResponse.json({ message: 'Password reset successfully' });
    } catch (error: any) {
        console.error('Error resetting password:', error);
        return NextResponse.json({
            error: 'Failed to reset password',
            details: error.message || 'Unknown error',
        }, { status: 500 });
    }
}
