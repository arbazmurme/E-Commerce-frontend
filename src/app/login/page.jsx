"use client";

import { useState } from "react";
import { useAuth } from "../../Context/handleLogin";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setError(""); // Clear previous errors

    try {
      await handleLogin(email, password); // Call context's login function
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border rounded-md p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-md p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md transition-all ${
              isLoading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <ImSpinner2 className="animate-spin mr-2" />
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
