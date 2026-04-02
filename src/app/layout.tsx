import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "豆腐拉面 | Tofu La Mian — Hand-Pulled Noodles",
  description: "Authentic hand-pulled noodles with rich broths and traditional recipes. Order online from Tofu La Mian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

