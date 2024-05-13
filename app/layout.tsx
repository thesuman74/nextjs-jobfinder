import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/header/navbar";
import Footer from "@/components/ui/footer/footer";
import { SearchBar } from "@/components/ui/header/searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <SearchBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
