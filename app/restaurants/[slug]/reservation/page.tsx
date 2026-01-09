import { notFound } from "next/navigation";
import { RESTAURANTS } from "@/data/restaurants";
import Navbar from "@/components/Navbar";
import ReservationPageContent from "@/app/restaurants/[slug]/reservation/ReservationPageContent";

export async function generateStaticParams() {
  return RESTAURANTS.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    return {
      title: "Restaurant non trouvé",
    };
  }

  return {
    title: `Réserver - ${restaurant.name} - Groupe Grand Café de France`,
    description: `Réservez votre table au ${restaurant.name}. ${restaurant.description}`,
  };
}

export default async function ReservationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ReservationPageContent restaurant={restaurant} />
    </>
  );
}
