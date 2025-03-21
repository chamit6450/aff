import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xclusive Store",
  description: "Xclusive clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black text-white text-sm text-center p-2">
      Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
      <span className="font-bold underline cursor-pointer">ShopNow</span>
    </div>
        {children}
      </body>
    </html>
  );
}
