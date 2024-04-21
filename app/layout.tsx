import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { twMerge } from "tailwind-merge";
import Drawer from "@/components/Drawer";

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
    <html lang="en" className="h-[100vh]">
      <body
        className={twMerge(
          inter.className,
          "flex flex-col min-h-screen drawer drawer-end"
        )}
      >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <Drawer />
      </body>
    </html>
  );
}
