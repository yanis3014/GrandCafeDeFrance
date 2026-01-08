import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groupe Grand Café de France - Restaurants de Luxe à Nice",
  description: "Découvrez nos 3 restaurants d'exception à Nice : Grand Café de France, Le Petit Café de France - Rina's Bar, et Le Rooftop. Une expérience gastronomique unique.",
  keywords: "restaurant Nice, brasserie Nice, rooftop Nice, gastronomie Nice, restaurant luxe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
