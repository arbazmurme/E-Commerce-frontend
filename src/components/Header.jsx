"use client";

import Link from "next/link";
import { useAuth } from "../Context/handleLogin";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const { user, isLoggedIn, handleLogout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Assume you have a state or context for managing the cart items
  const cartItems = 3; // You can replace this with actual cart state from your context or store.

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2 hover:text-blue-400">
          <FaShoppingCart className="text-blue-400" />
          <span className="font-extrabold">AZ Shop</span>
        </Link>

        {/* Centered Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center mx-auto">
          <Link href="/" className="hover:text-blue-400 transition ease-in-out duration-300">Home</Link>
          <Link href="/products" className="hover:text-blue-400 transition ease-in-out duration-300">Products</Link>
          <Link href="/about" className="hover:text-blue-400 transition ease-in-out duration-300">About</Link>
          <Link href="/contact" className="hover:text-blue-400 transition ease-in-out duration-300">Contact</Link>
        </nav>

        {/* Cart Icon */}
        {isLoggedIn === true &&
          <Link href="/cart" className="relative flex items-center text-white hover:text-blue-400 transition duration-300 ease-in-out">
            <FaShoppingCart className="text-2xl" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        }

        {/* Search Box (Desktop) */}
        <div className="relative flex items-center ml-4 hidden lg:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 pl-10 pr-16 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
          />
          <button
            onClick={() => console.log("Searching for:", searchQuery)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            <FaSearch />
          </button>
        </div>

        {/* Desktop User Menu */}
        <nav className="hidden md:flex space-x-6 items-center ml-4">
          {isLoggedIn ? (
            <>
              <span className="flex items-center space-x-2 text-gray-300">
                <FaUser />
                <span>{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition ease-in-out duration-300"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition ease-in-out duration-300"
            >
              <FaUser />
              <span>Login</span>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation (Menu) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <nav className="flex flex-col space-y-4 p-6">
            <Link href="/" className="hover:text-blue-400 transition ease-in-out duration-300">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-400 transition ease-in-out duration-300">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition ease-in-out duration-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition ease-in-out duration-300">
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <span className="flex items-center space-x-2 text-gray-300">
                  <FaUser />
                  <span>Hi, {user.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition ease-in-out duration-300"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition ease-in-out duration-300"
              >
                <FaUser />
                <span>Login</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
