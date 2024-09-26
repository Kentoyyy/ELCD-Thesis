import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';  // Adjust path if needed
import connect from '@/utils/db';  // Adjust path if needed

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();  // Extract token and new password from the request body

    // Check if token and password are provided
    if (!token || !password) {
      return NextResponse.json({ error: 'Token and password are required' }, { status: 400 });
    }

    // Ensure the DB is connected
    await connect();

    // Find the user by reset token and ensure token is not expired
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },  // Ensure token has not expired
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update the user password and clear reset token fields
    user.password = hashedPassword;

    // Clear the reset token and expiry after successful password reset
    user.resetToken = undefined;  // Remove the reset token
    user.resetTokenExpiry = undefined;  // Remove the reset token expiry

    // Save the updated user in the database
    await user.save();

    // Respond with success message
    return NextResponse.json({ message: 'Password successfully reset' });
  } catch (error: any) {
    console.error('Error resetting password:', error);

    // Safely handle the error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({
      error: 'Failed to reset password',
      details: errorMessage,
    }, { status: 500 });
  }
}
