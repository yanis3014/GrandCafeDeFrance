"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils } from "lucide-react";
import type { MenuItem } from "@/data/restaurants";

interface RestaurantMenuProps {
  menu: MenuItem[];
}

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
  const [activeCategory, setActiveCategory] = useState(menu[0]?.category || "");

  if (!menu || menu.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-16">
        <Utensils size={64} className="text-accent/30" />
        <p className="font-lato text-lg text-primary/60">
          Notre carte sera bientôt disponible.
          <br />
          Contactez-nous pour plus d'informations.
        </p>
      </div>
    );
  }

  const activeItems = menu.find((cat) => cat.category === activeCategory)?.items || [];

  return (
    <div className="space-y-12">
      {/* Category Tabs - Horizontal Scrollable */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-3 min-w-max md:justify-center">
            {menu.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`
                  relative px-6 py-3 rounded-full font-lato text-sm md:text-base font-medium
                  transition-all duration-300 whitespace-nowrap
                  ${
                    activeCategory === category.category
                      ? "bg-accent text-white shadow-lg shadow-accent/30"
                      : "bg-primary/5 text-primary hover:bg-primary/10"
                  }
                `}
              >
                {category.category}
                {activeCategory === category.category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {activeItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-accent/20"
            >
              <div className="flex justify-between items-start gap-4">
                {/* Left: Name & Description */}
                <div className="flex-1 space-y-2">
                  <h4 className="font-playfair text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="font-lato text-sm text-primary/70 italic leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Right: Price */}
                <div className="flex-shrink-0">
                  <span className="font-playfair text-xl md:text-2xl font-bold text-accent">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Future: Image Placeholder */}
              {/* Uncomment when images are available
              <div className="mt-4 relative aspect-video rounded-lg overflow-hidden bg-primary/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              */}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
