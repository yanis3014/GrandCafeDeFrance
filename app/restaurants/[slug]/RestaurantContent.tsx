"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import type { Restaurant } from "@/data/restaurants";
import RestaurantMenu from "@/components/RestaurantMenu";
import ReservationModal from "@/components/ReservationModal";

interface RestaurantContentProps {
  restaurant: Restaurant;
}

export default function RestaurantContent({ restaurant }: RestaurantContentProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 text-white"
        >
          <p className="font-lato text-accent text-sm md:text-base uppercase tracking-widest mb-4">
            {restaurant.subtitle}
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            {restaurant.name}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-accent" />
              <span className="font-lato text-sm md:text-base">{restaurant.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-accent" />
              <a href={`tel:${restaurant.phone}`} className="font-lato text-sm md:text-base hover:text-accent transition-colors">
                {restaurant.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 mb-12"
          >
            <div className="w-24 h-px bg-accent mx-auto" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
              Notre Histoire
            </h2>
            <p className="font-lato text-lg md:text-xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
              {restaurant.description}
            </p>
          </motion.div>

          {/* History Images Grid */}
          {restaurant.historyImages && restaurant.historyImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mt-12"
            >
              {restaurant.historyImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${restaurant.name} - Histoire ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 mb-16"
          >
            <div className="w-24 h-px bg-accent mx-auto" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
              Notre Carte
            </h2>
          </motion.div>

          <RestaurantMenu menu={restaurant.menu} />
        </div>
      </section>

      {/* Gallery Section */}
      {restaurant.gallery && restaurant.gallery.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 mb-16"
            >
              <div className="w-24 h-px bg-accent mx-auto" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                Galerie Photo
              </h2>
              <p className="font-lato text-lg text-primary/70 max-w-2xl mx-auto">
                Découvrez l'ambiance unique de notre établissement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurant.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${restaurant.name} - Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reservation Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-white rounded-3xl p-12 md:p-16 text-center space-y-8"
          >
            <Clock size={48} className="text-accent mx-auto" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Réservez Votre Table
            </h2>
            <p className="font-lato text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Vivez une expérience gastronomique inoubliable. Notre équipe vous accueille du lundi au dimanche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ReservationModal
                restaurantName={restaurant.name}
                phone={restaurant.booking.phone}
                email={restaurant.booking.email}
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-lato text-base font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <MapPin size={20} />
                Voir sur Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-playfair text-2xl font-bold mb-4">Groupe Grand Café de France</p>
          <p className="font-lato text-white/70">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
