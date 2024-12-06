"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://e-commerce-api-ten-sable.vercel.app/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">All Products</h2>
          <Link href="/admin//add-product">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Add Product</button>
          </Link>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Product Name</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Stock</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.stock > 0 ? `Available = ${product.stock}` : "Out of Stock"}</td>
                <td className="px-6 py-4">
                  <Link href={`/edit-product/${product._id}`}>
                    <button className="bg-yellow-500 px-4 py-2 rounded mr-2">Edit</button>
                  </Link>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
