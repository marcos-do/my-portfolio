import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StickyThemeButton from "./components/buttons/StickyThemeButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Marcos de Oliveira",
  description: "Portfolio Marcos de Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}<StickyThemeButton /></body>
    </html>
  );
}
