"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RESTAURANTS } from "@/data/restaurants";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row" suppressHydrationWarning>
      {RESTAURANTS.map((restaurant, index) => (
        <motion.div
          key={restaurant.slug}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative flex-1 group overflow-hidden transition-all duration-500 hover:flex-[1.5] min-h-[33.33vh] md:min-h-screen"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Dark Overlay with stronger bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/95 group-hover:from-transparent group-hover:via-primary/30 group-hover:to-primary/90 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <p className="font-lato text-accent text-sm md:text-base uppercase tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                {restaurant.subtitle}
              </p>

              {/* Restaurant Name */}
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-md drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)]">
                {restaurant.name}
              </h2>

              {/* Divider */}
              <div className="w-24 h-px bg-accent mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />

              {/* Description - visible on hover */}
              <p className="font-lato text-white/90 text-sm md:text-base max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                {restaurant.description.substring(0, 120)}...
              </p>

              {/* CTA Button */}
              <Link
                href={`/restaurants/${restaurant.slug}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-lato text-sm md:text-base font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:gap-4 group/btn mt-4 drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]"
              >
                Découvrir
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          
        </motion.div>
      ))}
    </div>
  );
}
