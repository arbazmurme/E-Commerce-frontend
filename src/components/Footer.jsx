import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Column 1: About */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">About AZ Shop</h3>
            <p className="text-gray-400">
              AZ Shop offers a wide range of products at unbeatable prices. Your one-stop shop for quality and value.
            </p>
          </div>
          
          {/* Column 2: Links */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/products"><a className="hover:text-blue-400 hover:underline">Shop Products</a></Link></li>
              <li><Link href="/about"><a className="hover:text-blue-400 hover:underline">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-blue-400 hover:underline">Contact Us</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-blue-400 hover:underline">Privacy Policy</a></Link></li>
            </ul>
          </div>
          
          {/* Column 3: Newsletter */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-gray-200 mb-4 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex space-x-4 justify-center">
              <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} AZ Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
