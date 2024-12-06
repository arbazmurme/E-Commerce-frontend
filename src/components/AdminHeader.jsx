import { useAuth } from "../Context/handleLogin";

export default function AdminHeader() {
  const { handleLogout } = useAuth();
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">AZ Shop - Admin Panel</h1>
          <nav className="space-x-4">
            <a href="/admin/dashboard" className="hover:underline">
              Dashboard
            </a>
            <a href="/admin/products" className="hover:underline">
              Manage Products
            </a>
            <a href="/admin/users" className="hover:underline">
              Manage Users
            </a>
            <a href="/" onClick={handleLogout} className="hover:underline text-red-300">
              Logout
            </a>
          </nav>
        </div>
      </header>
    );
  }
  