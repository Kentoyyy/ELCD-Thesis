import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          At <strong>Early Child Detection of Learning Disabilities using Machine Learning</strong>,
          we are committed to protecting your personal information and your right to privacy. 
          This Privacy Policy explains how we collect, use, and safeguard your information
          when you use our system.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect personal information that you voluntarily provide to us when registering
          or using our system. This includes:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Parent's Full Name</li>
          <li>Child's Name</li>
          <li>Child's Age</li>
          <li>Email Address</li>
          <li>Password (securely stored)</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>To register and manage user accounts</li>
          <li>To provide personalized test results</li>
          <li>To analyze and improve the performance of our machine learning models</li>
          <li>To respond to user inquiries and support requests</li>
          <li>To maintain the security and integrity of our system</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          We implement industry-standard security measures to protect your personal information.
          Your data is encrypted during storage and transmission. Access to your data is restricted
          to authorized personnel only.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Data Sharing and Third Parties
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell, trade, or share your personal information with third-party entities
          except as required by law or to enhance our services. 
          Any third-party services we use comply with strict privacy standards.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Your Privacy Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Access and review your personal data</li>
          <li>Request corrections to inaccurate or incomplete information</li>
          <li>Request the deletion of your account and data</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our system
          or legal obligations. You will be notified of any significant changes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy or how we handle your data, 
          please contact us at:
        </p>
        <p className="text-gray-700 font-medium">
          Email: <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
