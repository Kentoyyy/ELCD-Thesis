import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 max-w-3xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Terms of Service</h1>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">1. Acceptance of Terms</h2>
        <p className="leading-relaxed">
          By using our services for early child detection of learning disabilities via machine learning, you agree to comply with these Terms of Service. If you do not agree with these terms, please discontinue your use of the platform.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">2. Description of Service</h2>
        <p className="leading-relaxed">
          Our service utilizes machine learning models to assist in the early detection of potential learning disabilities in young children. This information is designed to support educational professionals and parents in identifying areas where a child may benefit from additional resources or assessments.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">3. Disclaimer</h2>
        <p className="leading-relaxed">
          Our service provides preliminary information only and is not intended to be a substitute for professional medical or educational diagnosis. Results and suggestions should be used as supplementary guidance and not as definitive conclusions.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">4. User Responsibilities</h2>
        <p className="leading-relaxed">
          Users agree to use this service responsibly and acknowledge that the results provided by our system are indicative and should be followed up with professional assessment if any concerns arise.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">5. Privacy and Data Usage</h2>
        <p className="leading-relaxed">
          We are committed to protecting the privacy of our users. Any personal data collected is used solely for the purpose of improving our services and will not be shared with third parties without consent. Please refer to our Privacy Policy for more details.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">6. Intellectual Property</h2>
        <p className="leading-relaxed">
          All content and features within our platform, including machine learning algorithms and analytics tools, are the intellectual property of the company and protected under applicable copyright and intellectual property laws.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">7. Limitation of Liability</h2>
        <p className="leading-relaxed">
          The company shall not be liable for any damages resulting from the use of our services. Users assume full responsibility for any actions taken based on the results provided by the platform.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">8. Changes to Terms</h2>
        <p className="leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. Users will be notified of any significant changes. Continued use of our service after such changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-medium text-gray-800 mb-2">9. Contact Information</h2>
        <p className="leading-relaxed">
          If you have any questions regarding these Terms of Service, please contact us at EarlyChildDetection@gmail.com.
        </p>
      </section>

      <p className="text-gray-500 text-sm mt-6">Last Updated: November, 2024</p>
    </div>
  );
};

export default Terms;
