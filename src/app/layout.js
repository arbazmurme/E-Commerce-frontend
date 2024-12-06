import "./globals.css";
import { AuthProvider } from "../Context/handleLogin";
import LayoutContent from "../components/LayoutContent";

export const metadata = {
  title: "AZ Shop - E-Commerce Platform",
  description: "Shop for the best products on AZ Shop!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <AuthProvider>
          <LayoutContent>{children}</LayoutContent>
        </AuthProvider>
      </body>
    </html>
  );
}
