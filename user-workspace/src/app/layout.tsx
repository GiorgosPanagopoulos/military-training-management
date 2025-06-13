"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Military Training Management",
  description: "Manage personnel, services, trainings, and scores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black">
      <head />
      <body className={inter.className}>
        <header className="p-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold">Military Training Management</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 border-t border-gray-300 text-center text-sm text-gray-600">
          &copy; 2024 Military Training Management
        </footer>
      </body>
    </html>
  );
}
