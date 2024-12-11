'use client';
import Image from 'next/image';
import { useProductContext } from "../Context/ProductContext";
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import AddToCartButton from '@/components/card/Add-to-Cart';

export default function HomePage() {
  const { products } = useProductContext();

  return (
    <div className="bg-gray-50 p-4">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="h-[450px] max-w-sm rounded-lg overflow-hidden shadow-md border bg-white transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col justify-between"
            >
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name || 'Product Image'}
                  width={900}
                  height={900}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-lg font-semibold truncate text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-xl font-bold text-green-600 mt-2">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.stock > 0 ? (
                      <span className="text-green-500">
                        In Stock: {product.stock}
                      </span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center gap-2">
                  <AddToCartButton productId={product._id} />
                  <button
                    className="flex items-center gap-2 bg-gray-200 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition"
                    onClick={() => console.log(`View Details: ${product.name}`)}
                  >
                    <FaEye />
                    <Link href={`/products/${product._id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>No Products Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
