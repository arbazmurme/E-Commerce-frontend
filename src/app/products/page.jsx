import React from 'react';

// Server-side function to fetch data (Server Component)
async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products/');
  const products = await res.json();
  return products;
}

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-500 mt-2">{product.description.substring(0, 100)}...</p>
            <p className="text-lg font-semibold text-blue-600 mt-4">${product.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">{`⭐ ${product.rating.rate}`}</span>
              <span className="ml-2 text-gray-400">{`(${product.rating.count} reviews)`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
