"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Tracks initial loading state
  const router = useRouter();

  // Check authentication status on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    const admin = JSON.parse(localStorage.getItem("isAdmin")); // Parse boolean value

    if (token && name) {
      setUser({ name });
      setIsLoggedIn(true);
      setisAdmin(admin || false); // Default to false if undefined
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setisAdmin(false);
    }
    setLoading(false);
  }, []);

  // Login function
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        "https://e-commerce-api-ten-sable.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, name, isAdmin } = response.data;

      // Save user data to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userName", name);
      localStorage.setItem("isAdmin", JSON.stringify(isAdmin)); // Store as stringified boolean

      // Update state
      setUser({ name });
      setIsLoggedIn(true);
      setisAdmin(isAdmin);

      // Redirect to the homepage
      if (isAdmin === true) {
        router.push("/admin/dashboard");
      }
      else {
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      throw new Error("Invalid email or password");
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("isAdmin");
    setUser(null);
    setIsLoggedIn(false);
    setisAdmin(false); // Reset admin state
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isAdmin,
        loading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
