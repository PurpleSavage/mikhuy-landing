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
  title: "Mikhuy | Gestor de cafetines universitarios",
  description:
    "Mikhuy es una plataforma integral para administrar cafetines universitarios, facilitando la gestión de inventario, pedidos, reportes y más.",
  keywords: [
    "Mikhuy",
    "gestión de cafetines",
    "cafetería universitaria",
    "control de inventario",
    "pedidos en línea",
    "reportes de ventas",
    "software para cafeterías",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
