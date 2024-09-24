import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import User from '@/models/User';  // Adjust path if needed
import connect from '@/utils/db';  // Adjust path if needed

export async function POST(request: Request) {
  const { email } = await request.json();

  await connect();

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Send reset email
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Password Reset',
      text: `Please click the following link to reset your password: ${process.env.BASE_URL}/reset-password/${user._id}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);  // Log the error
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
