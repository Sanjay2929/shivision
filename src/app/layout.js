import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://shivisionlifescience.com/",
  title: "Shivision",
  description: "Optimizing Animal Health & Performance Sustainable Solutions",
  openGraph: {
    title: "Shivision",
    description: "Optimizing Animal Health & Performance Sustainable Solutions",
    images: "/meta-img.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
