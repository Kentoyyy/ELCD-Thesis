"use client"; // Ensure this page runs on the client side

import React, { useState } from "react";
import axios from "axios";
import Footer from '../../app/components/Footer';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState(""); // State for the email input
  const [message, setMessage] = useState(""); // State for the response message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Clear previous messages
    setMessage("");

    try {
      // Sending POST request with the email
      await axios.post("/api/auth/reset-password", { email });
      // Set success message if the request is successful
      setMessage("Password reset link sent to your email.");
    } catch (error) {
      console.error("Error sending password reset link:", error);
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.error
          ? error.response.data.error
          : "An unexpected error occurred. Please try again later.";
      setMessage(errorMessage); // Set the error message to be displayed
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
            <p className="mt-2 text-gray-600">Enter your email address and we’ll send you a link to reset your password.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email} // Bind the input value to the email state
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                required
               className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-sm focus:outline-none focus:border-blue-500 transition duration-200"
                placeholder="example@gmail.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-secondary-color text-white rounded-lg hover:bg-primary-color transition-colors"
            >
              Continue
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes('link sent') ? 'text-primary-color' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-base">
              Don't have an account?{" "}
              <a href="/register" className="text-primary-color hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer placed here to ensure it stays at the bottom */}
    
    </div>
  );
};

export default ResetPasswordPage;
