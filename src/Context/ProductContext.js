'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a Context for managing products
const ProductContext = createContext();

// Provider component to wrap around the app
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://e-commerce-api-ten-sable.vercel.app/api/products');
        setProducts(response.data); // Set the products state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty array means this effect runs only once on mount

  // Add Product
  const addProduct = async (productData, image) => {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    formData.append("stock", productData.stock);
    if (image) formData.append("image", image); // Add image if available

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      const response = await axios.post(
        "https://e-commerce-api-ten-sable.vercel.app/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the local state with the newly added product
      setProducts((prevProducts) => [...prevProducts, response.data]);
      alert("Product added successfully!");
    } catch (error) {
      handleError(error);
    }
  };

  // Edit Product
  const editProduct = async (productId, updatedProductData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      const response = await axios.put(
        `https://e-commerce-api-ten-sable.vercel.app/api/products/${productId}`,
        updatedProductData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update product in the local state
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? response.data : product
        )
      );
      alert("Product updated successfully!");
    } catch (error) {
      handleError(error);
    }
  };

  // Delete Product
  const deleteProduct = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      await axios.delete(
        `https://e-commerce-api-ten-sable.vercel.app/api/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove deleted product from local state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
      alert("Product deleted successfully!");
    } catch (error) {
      handleError(error);
    }
  };

  // Helper function to handle errors
  const handleError = (error) => {
    if (error.response) {
      console.error("Server Error:", error.response.data);
      alert(`Error: ${error.response.data.message}`);
    } else {
      console.error("Error:", error.message);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, editProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => {
  return useContext(ProductContext);
};
