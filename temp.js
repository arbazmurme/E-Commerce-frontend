const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve files in the uploads folder

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-frontend-deployment-url"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use((req, res) => res.send("<h1>Hello World!</h1>"));


const PORT = process.env.POR || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const {
  getProducts,
  getProduct,
  getCategories,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect, isAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware"); // Import the upload middleware

const router = express.Router();

// Public routes
router.get("/", getProducts);
router.get("/categories", getCategories);
router.get("/:id", getProduct);
router.get("/category/:category", getProductsByCategory);

// Admin protected routes
router.post("/", protect, isAdmin, upload.single("image"), addProduct); // Handle image upload
router.put("/:id", protect, isAdmin, updateProduct);
router.delete("/:id", protect, isAdmin, deleteProduct);

module.exports = router;

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Check if the user is an admin
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, description, price, category, stock } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Set the image path
  
    try {
      const product = new Product({
        name,
        description,
        price,
        category,
        image, // Save the image URL in the product document
        stock,
      });
  
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
