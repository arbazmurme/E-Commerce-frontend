"use client";
import Link from "next/link";
import { useProductContext } from "../../Context/ProductContext";
import Image from "next/image";

export default function ProductsPage() {
  const { products } = useProductContext();

  // Function to group products by category
  const groupedByCategory = products.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Products
      </h1>

      {/* Iterate over categories and display products in each category */}
      {Object.keys(groupedByCategory).map((category) => (
        <div key={category} className="mb-12">
          {/* Category Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>

          {/* Grid for Products in the Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {groupedByCategory[category].map((product) => (
              <div key={product._id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
                {/* Link around each product */}
                <Link href={`/products/${product._id}`}>
                  {/* Product Image */}
                  <div className="w-full h-56 mb-4 flex justify-center items-center bg-gray-200 rounded-lg">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400">No Image Available</span>
                    )}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>

                  {/* Product Price */}
                  <p className="text-gray-800 font-semibold text-xl mb-2">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
