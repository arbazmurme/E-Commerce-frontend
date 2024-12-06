import Link from "next/link";
import React from "react";
const ManageUsers = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">All Users</h2>
        </div>

        <table className="min-w-full bg-white border border-gray-200 rounded shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left">User Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">john@example.com</td>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded mr-2">Make Admin</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
              </td>
            </tr>
            {/* Add more users */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
