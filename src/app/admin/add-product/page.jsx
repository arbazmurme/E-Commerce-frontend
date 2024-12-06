"use client";
import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      setImage(selectedFile);
    } else {
      console.error("No file selected.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    formData.append("stock", productData.stock);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }
  
      const response = await axios.post(
        "https://e-commerce-api-ten-sable.vercel.app/api/products ",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Product added successfully!");
      setProductData({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
      });
      setImage(null);
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else {
        console.error("Error adding product:", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={productData.stock}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
