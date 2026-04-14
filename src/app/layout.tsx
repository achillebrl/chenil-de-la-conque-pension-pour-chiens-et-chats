import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chenil de la Conque — Pension Animale à Izon, Gironde",
  description:
    "Pension animale pour chiens et chats située à Izon, à 20 km de Bordeaux. Domaine de 13 hectares en bordure de rivière. Élevage de Setter Anglais et Golden Retriever.",
  keywords: "chenil, pension animale, chiens, chats, Izon, Bordeaux, Gironde, setter anglais, golden retriever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${cormorant.variable} ${raleway.variable}`}>
      <body className="grain-overlay">
        {children}
      </body>
    </html>
  );
}