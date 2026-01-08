"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageSquare } from "lucide-react";

interface ReservationModalProps {
  restaurantName: string;
  phone: string;
  email: string;
}

export default function ReservationModal({ restaurantName, phone, email }: ReservationModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const smsBody = `Bonjour, je souhaite réserver une table au ${restaurantName} pour `;
  const emailSubject = `Réservation ${restaurantName}`;
  const emailBody = `Bonjour,\n\nJe souhaite réserver une table au ${restaurantName}.\n\nNombre de personnes : \nDate souhaitée : \nHeure souhaitée : \n\nMerci de me confirmer la disponibilité.\n\nCordialement`;

  const smsLink = `sms:${phone}${/iPhone|iPad|iPod/.test(navigator.userAgent) ? '&' : '?'}body=${encodeURIComponent(smsBody)}`;
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-accent text-accent font-lato text-base font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
      >
        RÉSERVER
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-12 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-primary/40 hover:text-primary transition-colors"
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>

                {/* Title */}
                <div className="text-center mb-8">
                  <div className="w-16 h-px bg-accent mx-auto mb-6" />
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-3">
                    Réserver une table
                  </h2>
                  <p className="font-lato text-lg text-primary/70">
                    {restaurantName}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* SMS Button */}
                  <a
                    href={smsLink}
                    className="flex items-center justify-center gap-3 w-full px-6 py-5 bg-accent text-white font-lato text-base font-semibold rounded-2xl hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-accent/20"
                  >
                    <MessageSquare size={24} />
                    <span>Réserver par SMS</span>
                  </a>

                  {/* Email Button */}
                  <a
                    href={emailLink}
                    className="flex items-center justify-center gap-3 w-full px-6 py-5 bg-primary text-white font-lato text-base font-semibold rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    <Mail size={24} />
                    <span>Réserver par Email</span>
                  </a>
                </div>

                {/* Close Text Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-6 py-3 text-primary/60 hover:text-primary font-lato text-sm transition-colors"
                >
                  Fermer
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
