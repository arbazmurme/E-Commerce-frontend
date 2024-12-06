"use client";

import Header from "@/components/Header";
import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import AdminFooter from "@/components/AdminFooter";
import { useAuth } from "../Context/handleLogin";
import Loader from "@/app/Loader";
export default function LayoutContent({ children }) {
  const { isAdmin } = useAuth(); // Get the admin status

  return (
    <>
      {/* Conditional Header */}
      {isAdmin ? <AdminHeader /> : <Header />}

      {/* Conditional Main Content */}
      <main
        role="main"
        className={`min-h-screen px-4 py-8 ${isAdmin ? "bg-blue-50" : "bg-gray-50"}`}
      >
         <Loader />
        {children}
      </main>

      {/* Conditional Footer */}
      {isAdmin ? <AdminFooter /> : <Footer />}
    </>
  );
}
