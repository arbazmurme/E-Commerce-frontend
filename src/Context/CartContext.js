"use client";
// Context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context for Cart
const CartContext = createContext();

// Provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState(0);  // Initial cart count

  // Function to get the token from localStorage
  const getToken = () => localStorage.getItem('token');

  // Fetch cart data from server
  const fetchCart = async () => {
    const token = getToken();
    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  // Update cart quantity
  const updateQuantity = async (productId, newQuantity) => {
    const token = getToken();
    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:3001/api/cart/update',
        { productId, quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.product._id === productId ? { ...item, quantity: newQuantity } : item
        ),
      }));
      setCartItems(response.data.items.length);
      
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  // Remove item from cart
  const handleDeleteProduct = async (productId) => {
    const token = getToken();
    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }

    try {
      const response = await axios.delete('http://localhost:3001/api/cart/remove', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      });
      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.filter((item) => item.product._id !== productId),
      }));
      setCartItems(response.data.items.length);
    } catch (error) {
      console.error('Error deleting product from cart:', error);
    }
  };

  // Fetch cart items count
  const getCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }

      const response = await axios.get("http://localhost:3001/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCartItems(response.data.items.length);  // Assuming response has an 'items' array
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCart();
    getCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        updateQuantity,
        handleDeleteProduct,
        fetchCart,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
