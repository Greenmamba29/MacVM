import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MacVM - Kiyomi Bot Dashboard",
  description:
    "VirtualBuddy-powered macOS VM management and Kiyomi bot instance dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
