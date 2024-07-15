import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "FASTFOOD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
