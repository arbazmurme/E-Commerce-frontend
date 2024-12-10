import "./globals.css";
import { AuthProvider } from "../Context/handleLogin";
import LayoutContent from "../components/LayoutContent";
import { ProductProvider } from "@/Context/ProductContext";
import { CartProvider } from "@/Context/CartContext";

export const metadata = {
  title: "AZ Shop - E-Commerce Platform",
  description: "Shop for the best products on AZ Shop!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <LayoutContent>{children}</LayoutContent>
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
