import Link from "next/link";
import { useAuth } from "../Context/handleLogin";

export default function AdminHeader() {
  const { handleLogout } = useAuth();
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">AZ Shop - Admin Panel</h1>
          <nav className="space-x-4">
            <Link href="/admin/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/admin/products" className="hover:underline">
              Manage Products
            </Link>
            <a href="/admin/users" className="hover:underline">
              Manage Users
            </a>
            <Link href="/" onClick={handleLogout} className="hover:underline text-red-300">
              Logout
            </Link>
          </nav>
        </div>
      </header>
    );
  }
  