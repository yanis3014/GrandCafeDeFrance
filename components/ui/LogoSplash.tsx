"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoSplash() {
  return (
    // Conteneur Fixe Plein Écran avec fond blanc
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      
      {/* Wrapper d'animation Framer Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} // Commence transparent et légèrement plus petit
        animate={{ opacity: 1, scale: 1 }}    // Devient visible et reprend sa taille normale
        transition={{
          duration: 1.2,      // Durée de l'animation (plus long = plus doux)
          ease: "easeInOut",  // Courbe d'accélération naturelle
          delay: 0.3          // Petit délai avant le début pour ne pas être trop brusque
        }}
        className="relative w-full max-w-[600px] p-8" // Conteneur de l'image avec une largeur max
      >
        {/* Utilisation de l'image PNG originale.
          Assure-toi que le fichier 'logo-full.png' est bien dans 'public/logo/'.
        */}
        <Image
          src="/logo/logo-full.png" // Chemin vers ton image dans le dossier public
          alt="Logo Le Grand Café de France"
          width={880}  // Largeur originale de l'image (ou une valeur proportionnelle)
          height={1200} // Hauteur originale de l'image
          priority     // Charge l'image en priorité car elle est au-dessus de la ligne de flot
          className="w-full h-auto object-contain drop-shadow-lg" // Rend l'image responsive et ajoute une ombre élégante
        />
      </motion.div>
    </div>
  );
}