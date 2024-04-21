import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamo Vision",
  description: "Photo, Video, Business Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={twMerge(inter.className, "min-h-screen flex flex-col")}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 overflow-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
