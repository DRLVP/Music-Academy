import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  {ReactNode} from "react";
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Academy",
  description: "Start your journey with music academy",
};

export default function RootLayout(
  {children}:
  Readonly<{children:ReactNode}>
) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex relative w-full items-center justify-center">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
