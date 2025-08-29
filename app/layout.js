import { Baloo_2 } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo", 
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Toiture Marseille",
  description: "Votre expert de la toiture à Marseille",
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${baloo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
