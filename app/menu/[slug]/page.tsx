import { RESTAURANTS } from "@/data/restaurants";
import { notFound } from "next/navigation";
import MenuClient from "@/components/MenuClient";

export async function generateStaticParams() {
  return RESTAURANTS.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MenuPage({ params }: PageProps) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return <MenuClient restaurant={restaurant} />;
}
