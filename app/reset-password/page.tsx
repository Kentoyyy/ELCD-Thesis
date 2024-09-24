"use client"; // Ensure this page runs on the client side

import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState(''); // State for the email input
  const [message, setMessage] = useState(''); // State for the response message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Clear previous messages
    setMessage('');

    try {
      // Sending POST request with the email
      const response = await axios.post('/api/auth/reset-password', { email });
      // Set success message if the request is successful
      setMessage('Password reset link sent to your email.');
    } catch (error) {
      // Log the entire error object to understand what went wrong
      console.error('Error sending password reset link:', error);

      // Handle different types of errors for better user feedback
      if (axios.isAxiosError(error)) {
        // Extract error message from the response if available
        const errorMessage = error.response?.data?.error || 'Failed to send password reset link.';
        setMessage(errorMessage); // Set the error message to be displayed
      } else {
        setMessage('An unexpected error occurred. Please try again later.'); // General error message
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter your email address
            </label>
            <input
              id="email"
              type="email"
              value={email} // Bind the input value to the email state
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>} {/* Display message if it exists */}
      </div>
    </div>
  );
}

export default ResetPasswordPage;
