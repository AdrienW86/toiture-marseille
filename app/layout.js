import { Geist, Geist_Mono } from "next/font/google";
import { Baloo_2 } from "next/font/google"; // <-- import Baloo

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo", // tu déclares la variable CSS
  subsets: ["latin"],
  weight: ["400", "700"], // choisis les graisses que tu veux
});

export const metadata = {
  title: "Toiture Marseille",
  description: "Votre expert de la toiture à Marseille",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
