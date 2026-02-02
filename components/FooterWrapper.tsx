"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Don't render Footer on menu pages
  if (pathname?.startsWith("/menu/")) {
    return null;
  }

  return <Footer />;
}
