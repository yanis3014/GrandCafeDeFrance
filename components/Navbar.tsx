"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <h1 className="font-playfair text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              Café de France
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {RESTAURANTS.map((restaurant) => (
              <Link
                key={restaurant.slug}
                href={`/restaurants/${restaurant.slug}`}
                className={`font-lato text-sm font-medium transition-colors duration-300 ${
                  pathname === `/restaurants/${restaurant.slug}`
                    ? "text-accent"
                    : "text-primary hover:text-accent"
                }`}
              >
                {restaurant.name}
              </Link>
            ))}
            
            <a
              href="tel:+33493887788"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-lato text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              <Phone size={16} />
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
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
            className="md:hidden bg-background border-t border-primary/10"
          >
            <div className="px-4 py-6 space-y-4">
              {RESTAURANTS.map((restaurant) => (
                <Link
                  key={restaurant.slug}
                  href={`/restaurants/${restaurant.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-lato text-base font-medium transition-colors ${
                    pathname === `/restaurants/${restaurant.slug}`
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  {restaurant.name}
                </Link>
              ))}
              
              <a
                href="tel:+33493887788"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white font-lato text-sm font-semibold rounded-full hover:bg-accent/90 transition-all"
              >
                <Phone size={16} />
                Réserver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
