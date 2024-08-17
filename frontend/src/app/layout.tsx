import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StickyMenu from "./components/menus/StickyMenu";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

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
      <body className={roboto.className}>
        {children}
        <script>
          if (localStorage.THEME)
          document.documentElement.classList.add(localStorage.THEME)
        </script>
        <StickyMenu>
          
        </StickyMenu>
      </body>
    </html>
  );
}
