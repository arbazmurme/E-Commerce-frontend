import "./globals.css";
import { AuthProvider } from "../Context/handleLogin";
import LayoutContent from "../components/LayoutContent";
import { ProductProvider } from "@/Context/ProductContext";

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
              <LayoutContent>{children}</LayoutContent>
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
