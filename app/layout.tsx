import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs"; // Importation du fil d'Ariane
import Footer from "@/components/Footer";
import "./globals.css";

// 1. Configuration de la police Baloo 2
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// 2. Métadonnées SEO et Favicon
export const metadata: Metadata = {
  title: "Toiture Marseille | Artisan Couvreur Zingueur local",
  description: "Besoin d'un couvreur à Marseille ? Toiture Marseille intervient rapidement pour vos travaux de couverture, zinguerie, isolation thermique et nettoyage de toit. Devis gratuit.",
  keywords: ["couvreur marseille", "toiture marseille", "zinguerie marseille", "isolation toit", "artisan couvreur"],
  authors: [{ name: "Toiture Marseille" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Toiture Marseille | Artisan Couvreur Zingueur",
    description: "Travaux de couverture, isolation et rénovation de toiture à Marseille et alentours.",
    url: "https://toiture-marseille.fr",
    siteName: "Toiture Marseille",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr" 
      className={`${baloo.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18366446985"
          strategy="afterInteractive"
        />
        <Script id="google-tag-gtag-marseille" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18366446985');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        
        {/* Barre de navigation fixe */}
        <Header />
        
        {/* Conteneur principal */}
        <div className="flex-1 flex flex-col">
          {/* Le fil d'Ariane s'injecte ici et gère le SEO en tâche de fond */}
          <Breadcrumbs />
          
          <main className="flex-1">
            {children}
          </main>
        </div>
        
        {/* Pied de page avec ta signature Codev */}
        <Footer />
      </body>
    </html>
  );
}