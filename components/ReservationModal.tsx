"use client";

import Link from "next/link";

interface ReservationModalProps {
  restaurantName: string;
  phone: string;
  email: string;
  slug: string;
}

export default function ReservationModal({ restaurantName, phone, email, slug }: ReservationModalProps) {
  return (
    <Link
      href={`/restaurants/${slug}/reservation`}
      className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-accent text-accent font-lato text-base font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
    >
      RÉSERVER
    </Link>
  );
}
