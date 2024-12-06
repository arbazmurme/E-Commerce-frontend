"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We value your trust and prioritize protecting your personal
            information.
          </p>
        </div>

        {/* Policy Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              Information We Collect
            </h2>
            <p className="text-gray-600 mt-4">
              AZ Shop collects data to provide better services, including:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and addresses.
              </li>
              <li>
                <strong>Payment Details:</strong> Securely processed payment
                methods and transaction data.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, browsing duration,
                and analytics.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mt-4">
              Your data is used to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Fulfill orders and provide seamless service.</li>
              <li>Personalize your shopping experience.</li>
              <li>
                Notify you of updates, offers, and promotions (only with your
                consent).
              </li>
              <li>Ensure secure transactions and prevent fraud.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              Protecting Your Information
            </h2>
            <p className="text-gray-600 mt-4">
              We follow industry-standard security protocols to safeguard your
              personal data. However, no online method is 100% secure, and we
              encourage vigilance when sharing sensitive information.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mt-4">
              Cookies enhance your browsing experience. They help us:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Remember your preferences and login information.</li>
              <li>Offer personalized product recommendations.</li>
              <li>Analyze traffic and site performance.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your Rights
            </h2>
            <p className="text-gray-600 mt-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Access and update your personal information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request details about data usage.</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-4">
              Have questions about your privacy? Reach out to us:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Email:</strong> support@azshop.com <br />
              <strong>Phone:</strong> +1-234-567-8900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
