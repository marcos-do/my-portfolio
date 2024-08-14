import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StickyMenu from "./components/menus/StickyMenu";
import SunIcon from "@/app/assets/sun_icon.svg";
import MoonIcon from "@/app/assets/half_moon_icon.svg";
import TextButton from "./components/buttons/TextButton";
import Image from "next/image";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

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
      <body className={inter.className}>
        {children}
        <script>
          if (localStorage.THEME)
          document.documentElement.classList.add(localStorage.THEME)
        </script>
        <StickyMenu>
          <TextButton>
            <Image src={SunIcon} alt="Light theme"></Image>
          </TextButton>
          <TextButton>
            <Image src={MoonIcon} alt="Dark theme"></Image>
          </TextButton>
        </StickyMenu>
      </body>
    </html>
  );
}
