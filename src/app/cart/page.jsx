// Cart.js
"use client";
import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useCart } from "../../Context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, handleDeleteProduct } = useCart();
  useEffect(() => {
    console.log(cart);
    
  })
  // Render loading state if cart is not fetched yet
  if (!cart) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Loading cart...</p>
      </div>
    );
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
        <ul className="space-y-6">
          {cart.items.map((item) => (
            <li
              key={item._id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <Image
                  width={900}
                  height={900}
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{item.product.name}</p>
                  <p className="text-gray-700 font-medium">
                    Price: ${item.product.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity - 1)
                  }
                  className="text-gray-500 hover:text-gray-700 p-1"
                  disabled={item.quantity === 1}
                >
                  <AiOutlineMinus size={20} />
                </button>
                <p className="mx-2">{item.quantity}</p>
                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity + 1)
                  }
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <AiOutlinePlus size={20} />
                </button>
                <button
                  onClick={() => handleDeleteProduct(item.product._id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-medium">
            Total Items: {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
          </p>
          <p className="text-lg font-medium">
            Total Price: ${calculateTotalPrice().toFixed(2)}
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
