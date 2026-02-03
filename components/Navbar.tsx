"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANTS } from "@/data/restaurants";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ne pas afficher la navbar sur la page d'accueil
  if (pathname === "/") {
    return null;
  }

  // Déterminer le restaurant actuel basé sur l'URL
  const currentRestaurant = RESTAURANTS.find((r) => 
    pathname.includes(`/restaurants/${r.slug}`)
  );

  // Fonction pour obtenir le label de localisation
  const getLocationLabel = (slug: string) => {
    if (slug === "grand-cafe-zone-pietonne") return "Rue Piétonne";
    if (slug === "grand-cafe-jean-medecin") return "Jean-Médecin";
    if (slug === "rina-bar") return "Rue Piétonne";
    return null;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <h1 className="font-playfair text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
              Café de France
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {RESTAURANTS.map((restaurant) => {
              const locationLabel = getLocationLabel(restaurant.slug);
              const isActive = pathname.includes(`/restaurants/${restaurant.slug}`);
              return (
                <Link
                  key={restaurant.slug}
                  href={`/restaurants/${restaurant.slug}`}
                  className={`font-lato text-sm font-medium transition-all duration-300 flex flex-col items-center px-3 py-2 rounded-lg ${
                    isActive
                      ? "text-accent bg-white/10"
                      : "text-white hover:text-accent hover:bg-white/10"
                  }`}
                >
                  <span>{restaurant.name}</span>
                  {locationLabel && (
                    <span className="text-xs text-white/70 font-normal">
                      {locationLabel}
                    </span>
                  )}
                </Link>
              );
            })}
            
            {currentRestaurant && (
              <Link
                href={`/restaurants/${currentRestaurant.slug}/reservation`}
                className="px-6 py-3 bg-accent text-white font-lato text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                Réserver
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {RESTAURANTS.map((restaurant) => {
                const locationLabel = getLocationLabel(restaurant.slug);
                const isActive = pathname.includes(`/restaurants/${restaurant.slug}`);
                return (
                  <Link
                    key={restaurant.slug}
                    href={`/restaurants/${restaurant.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg font-lato text-base font-medium transition-all ${
                      isActive
                        ? "text-accent bg-white/10"
                        : "text-white hover:text-accent hover:bg-white/10"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{restaurant.name}</span>
                      {locationLabel && (
                        <span className="text-xs text-white/70 font-normal">
                          {locationLabel}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
              
              {currentRestaurant && (
                <Link
                  href={`/restaurants/${currentRestaurant.slug}/reservation`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white font-lato text-sm font-semibold rounded-full hover:bg-accent/90 transition-all"
                >
                  Réserver
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
