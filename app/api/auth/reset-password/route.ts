import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import User from '@/models/User';  // Adjust path if needed
import connect from '@/utils/db';  // Adjust path if needed
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();  // Ensure email is received from the request body
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await connect();  // Ensure the DB is connected before proceeding

    const user = await User.findOne({ email });  // Find user with the given email

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Generate a unique token
    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    await user.save();

    // Send reset email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,  // Ensure environment variable is correctly set
        pass: process.env.SMTP_PASS,  // Ensure the app password is set
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Password Reset',
      text: `Please click the following link to reset your password: ${process.env.BASE_URL}/reset-password/${token}`,
  };
  

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Password reset email sent successfully' });
  } catch (error: any) {
    // More detailed logging to identify the issue
    console.error('Error while sending password reset email:', error);

    return NextResponse.json({
      error: 'Failed to send email',
      details: error.message || 'Unknown error'
    }, { status: 500 });
  }
}
