import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GENS ICHIHARA futsal official",
  description: "Official website for the GENS ICHIHARA futsal team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={orbitron.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
