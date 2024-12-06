import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Details */}
        <div className="flex flex-col justify-center bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Contact Details
          </h2>
          <p className="text-gray-600">
            Have questions? We&apos;d love to hear from you! Reach out to us using
            the following details:
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <span className="font-semibold">Phone:</span> +91 9028121976
            </li>
            <li>
              <span className="font-semibold">Email:</span> support@azshop.com
            </li>
            <li>
              <span className="font-semibold">Address:</span> 123 AZ Shop
              Street, Solapur, Maharashtra, India
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow Us:</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-700"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
