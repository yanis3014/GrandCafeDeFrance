import { notFound } from "next/navigation";
import Image from "next/image";
import { RESTAURANTS } from "@/data/restaurants";
import Navbar from "@/components/Navbar";
import RestaurantContent from "./RestaurantContent";

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
    title: `${restaurant.name} - Groupe Grand Café de France`,
    description: restaurant.description,
  };
}

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <RestaurantContent restaurant={restaurant} />
    </>
  );
}
