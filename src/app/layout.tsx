import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={garamond.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
