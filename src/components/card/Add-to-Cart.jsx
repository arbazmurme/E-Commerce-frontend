"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

const AddToCartButton = ({ productId }) => {
  const { setCartItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  

  // Function to get the token from localStorage
  const getToken = () => {
    return localStorage.getItem("token");
  };


  const handleAddToCart = async () => {
    const token = getToken();
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://e-commerce-api-ten-sable.vercel.app/api/cart/add",
        { productId, quantity: 1 }, // Send productId and default quantity
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems(response.data.items.length);
/*       console.log("Product added", response.data.items.length,"2nd", cartItems); */
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={`${
        isLoading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
      } flex items-center justify-center gap-2 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out`}
    >
      <FaShoppingCart className="text-lg" />
      <span>{isLoading ? "Adding..." : "Add to Cart"}</span>
    </button>
  );
};

export default AddToCartButton;
