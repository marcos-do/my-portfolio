import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StickyMenu from "./components/menus/StickyMenu";
import TextButton from "./components/buttons/TextButton";
import Image from "next/image";
import { DARK_THEME_CLASS, THEME_KEY } from "@/app/constants/theme";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Marcos de Oliveira",
  description: "Portfolio Marcos de Oliveira",
};

const updateThemeValue = (value: string) => {
  localStorage.setItem(THEME_KEY, value);
};

const getThemeValue = () => {
  return localStorage.getItem(THEME_KEY);
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const changeToLightTheme = () => {
    "use client"
    const root = document.documentElement;
    root.classList.remove(DARK_THEME_CLASS);
    updateThemeValue("");
  };

  const changeToDarkTheme = () => {
    "use client"
    const root = document.documentElement;
    root.classList.add(DARK_THEME_CLASS);
    updateThemeValue(DARK_THEME_CLASS);
  };
  return (
    <html lang="es">
      <body className={inter.className}>
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
