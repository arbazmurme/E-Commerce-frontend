import Link from 'next/link';

import React from "react";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-4xl font-bold">150</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-4xl font-bold">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Sales</h2>
          <p className="text-4xl font-bold">$15,000</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Quick Actions</h2>
          <Link href="/admin/products">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Manage Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
