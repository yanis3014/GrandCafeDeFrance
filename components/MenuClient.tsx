"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Restaurant } from "@/data/restaurants";

interface MenuClientProps {
  restaurant: Restaurant;
}

export default function MenuClient({ restaurant }: MenuClientProps) {
  // Default to first category
  const [activeCategory, setActiveCategory] = useState(restaurant.menu[0].category);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find active category content
  const currentCategoryData = restaurant.menu.find(
    (c) => c.category === activeCategory
  );

  return (
    <main 
      className="min-h-screen bg-stone-50 text-slate-900 pb-20 selection:bg-amber-600 selection:text-white"
      suppressHydrationWarning
    >
      {/* Header */}
      <header className="pt-12 pb-8 px-4 text-center">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-3 drop-shadow-sm">
          {restaurant.name}
        </h1>
        <p className="font-lato text-amber-600 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          {restaurant.subtitle}
        </p>
      </header>

      {/* Sticky Tab Navigation */}
      <nav className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200/60 shadow-sm transition-all duration-300">
        <div className="overflow-x-auto scrollbar-hide py-4 px-4 w-full">
          <div className="flex gap-3 whitespace-nowrap min-w-max mx-auto px-2">
            {restaurant.menu.map((category) => {
              const isActive = activeCategory === category.category;
              return (
                <button
                  key={category.category}
                  onClick={() => handleCategoryClick(category.category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-amber-600 text-white shadow-md scale-105"
                      : "bg-white border border-stone-200 text-slate-500 hover:text-slate-800 hover:border-amber-600/50"
                  }`}
                >
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-10"
          >
            {currentCategoryData?.items.map((item, index) => (
              <div 
                key={`${activeCategory}-${index}`} 
                className="group flex flex-col gap-1 pb-6 border-b border-stone-200 last:border-none last:pb-0"
              >
                <div className="flex justify-between items-baseline gap-4 w-full">
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-lato font-bold text-lg text-amber-600 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                
                {item.description && (
                  <p className="font-lato text-sm md:text-base text-slate-500 italic leading-relaxed max-w-[90%]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-10 px-4 text-center border-t border-stone-200 bg-stone-100/50">
        <p className="text-xs text-slate-400 font-lato mb-6 uppercase tracking-wider">
          Prix nets, service compris. L&apos;abus d&apos;alcool est dangereux pour la santé.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 text-sm text-slate-600 font-semibold hover:bg-white hover:border-amber-600 hover:text-amber-600 transition-all duration-300 shadow-sm bg-white"
        >
          <ArrowLeft size={16} />
          Retour au site web
        </Link>
      </footer>
    </main>
  );
}
