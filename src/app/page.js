'use client'; // Add this line to specify that this component is client-side only
import Image from "next/image";
import { useProductContext } from "../Context/ProductContext";

export default function HomePage() {
  const { products } = useProductContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="max-w-sm rounded overflow-hidden shadow-lg border">
            <Image
              width={900}
              height={900}
              className="w-full h-48 object-cover"
              src={product.image ? `https://e-commerce-api-ten-sable.vercel.app/${product.image}` : "/default-image.png"}
              alt={product.name}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              <p className="text-sm text-gray-600">
                {product.stock > 0 ? `Available: ${product.stock}` : "Out of Stock"}
              </p>
              {product.bestSeller && (
                <span className="inline-block bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full mt-2">
                  Best Seller
                </span>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-center p-4">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
