"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Import the necessary icons
import Input from "../../components/input";
import Button from "../../components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    alert("Sign Up");
    console.log(name, email, password);
    
    e.preventDefault();
    try {
      await axios.post("https://e-commerce-api-ten-sable.vercel.app/api/auth/register", {
        name,
        email,
        password,
      });
      router.push("/login");
    } catch (err) {
      console.log(err);
      setError("Error during registration");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp}>
          {/* Name Field with Icon */}
          <div className="mb-4 flex items-center border rounded-md p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field with Icon */}
          <div className="mb-4 flex items-center border rounded-md p-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field with Icon */}
          <div className="mb-4 flex items-center border rounded-md p-2">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <Button label="Sign Up" type="submit" />
        </form>

        {/* Sign In Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
