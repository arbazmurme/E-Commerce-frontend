"use client";

import { useState, useEffect } from "react";
import { useProductContext } from "../../../../Context/ProductContext";

const EditProduct = ({ params }) => {
  const { editProduct } = useProductContext();
  const [slug, setSlug] = useState(null); // Store the resolved slug
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state for the button

  // Resolve `params` Promise and extract slug
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params; // Await the params Promise
      setSlug(resolvedParams.slug);
    };
    resolveParams();
  }, [params]);

  // Fetch product data once slug is resolved
  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://e-commerce-api-ten-sable.vercel.app/api/products/${slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loader when submitting
    try {
      if (product) {
        await editProduct(slug, product); // Update the product
        alert("Product updated successfully!");
      }
    } catch (error) {
      setError("Failed to update product.");
    } finally {
      setIsSubmitting(false); // Hide loader after the update attempt
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center">Edit Product</h1>
      <form onSubmit={handleEditProduct} className="space-y-6 mt-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Product Name"
            value={product?.name || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Product Description"
            value={product?.description || ""}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Product Price"
            value={product?.price || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Product Category"
            value={product?.category || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Product Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Product Image URL"
            value={product?.image || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Stock Quantity
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            placeholder="Stock Quantity"
            value={product?.stock || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? (
              <span className="animate-spin inline-block w-5 h-5 border-4 border-t-transparent border-blue-600 rounded-full"></span>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
