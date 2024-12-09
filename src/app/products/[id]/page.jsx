"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaTag, FaClipboardList, FaDollarSign } from "react-icons/fa"; // Importing React Icons

export default function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Store the product data
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store error messages

  // Function to fetch the product details
  const fetchProduct = async () => {
    try {
      setLoading(true); // Start loading
      const res = await fetch(
        `https://e-commerce-api-ten-sable.vercel.app/api/products/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch product"); // Handle fetch error
      const data = await res.json(); // Parse the response
      setProduct(data); // Update state with the fetched product data
    } catch (err) {
      setError(err.message); // Set error message if any
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Use effect to fetch the product when the component mounts or `id` changes
  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Render loading, error, or product details
  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      {product ? (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name || 'Product Image'}
                width={900}
                height={900}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">No Image Available</span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2 flex items-center">
                <FaTag className="text-gray-500 mr-2" />
                {product.name}
              </h1>

              {/* Description */}
              <div className="text-xl text-gray-700 mb-4 flex flex-col space-y-2">
                {/* Split description by commas and render each item on a new line */}
                {product.description.split(',').map((item, index) => (
                  <div key={index} className="flex items-start mb-2">
                    <FaClipboardList className="text-gray-500 mr-2" />
                    <p>{item.trim()}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <FaDollarSign className="text-gray-500 mr-2" />
                ${product.price}
              </p>
            </div>

            {/* Common Product Details Section */}
            <div className="border-t pt-4 mt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product Details</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <FaTag className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{product.category || 'Category not available'}</span>
                </div>
                <div className="flex items-center">
                  <FaClipboardList className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{product.dimensions || 'Dimensions not available'}</span>
                </div>
                <div className="flex items-center">
                  <FaTag className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{product.brand || 'Brand not available'}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2">
                <FaShoppingCart />
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2">
                <FaHeart />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg text-gray-600">Product not found.</div>
      )}
    </div>
  );
}
