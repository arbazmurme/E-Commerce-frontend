export default function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-12 p-12">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Total Products</h2>
          <p className="text-4xl font-bold">100</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Total Users</h2>
          <p className="text-4xl font-bold">50</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Total Orders</h2>
          <p className="text-4xl font-bold">20</p>
        </div>
      </div>
    </div>
  );
}
