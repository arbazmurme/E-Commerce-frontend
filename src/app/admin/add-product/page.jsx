"use client"
import { useState } from "react";
import { useProductContext } from "../../../Context/ProductContext"; // Import the context

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });
  const [image, setImage] = useState(null);
  const { addProduct } = useProductContext(); // Access addProduct from the context

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
    await addProduct(productData, image); // Call the addProduct function from context
    setProductData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
    });
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields here */}
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleInputChange}
        placeholder="Product Name"
      />
      <input
        type="text"
        name="description"
        value={productData.description}
        onChange={handleInputChange}
        placeholder="Product Description"
      />
      <input
        type="text"
        name="price"
        value={productData.price}
        onChange={handleInputChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="category"
        value={productData.category}
        onChange={handleInputChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="stock"
        value={productData.stock}
        onChange={handleInputChange}
        placeholder="Stock Quantity"
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
