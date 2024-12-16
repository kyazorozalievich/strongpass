import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ManopeSans = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope-sans",
  weight: "400 900",
});

export const metadata: Metadata = {
  title: "StrongPass",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ManopeSans.variable}antialiased`}>{children}</body>
    </html>
  );
}
