import { RESTAURANTS } from "@/data/restaurants";
import { notFound } from "next/navigation";
import DigitalMenu from "@/components/DigitalMenu";

export async function generateStaticParams() {
  return RESTAURANTS.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export default function MenuPage({ params }: { params: { slug: string } }) {
  const restaurant = RESTAURANTS.find((r) => r.slug === params.slug);

  if (!restaurant) {
    notFound();
  }

  return <DigitalMenu restaurant={restaurant} />;
}

