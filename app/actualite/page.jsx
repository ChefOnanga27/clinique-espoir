import LayoutActualite from "./layout";
import HeroSection from "../../ui/HeroSection";
import Link from "next/link";
import Actu from "../../ui/ActuList";
import { actualites, news } from "../../lib/data/services";

export default function ActualiteIndex() {
  const latest = [...actualites, ...news].slice(0, 6);

  return (
    <LayoutActualite>
      <HeroSection title="Actualités & Médias" bgImage="/actualites/hero.jpg" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/actualite/actualites" className="px-4 py-2 bg-amber-500 text-white rounded">Actualités</Link>
          <Link href="/actualite/news" className="px-4 py-2 bg-red-700 text-white rounded">News</Link>
        </div>

        <h3 className="text-2xl font-bold mb-4">Dernières publications</h3>
        <Actu articles={latest} />
      </div>
    </LayoutActualite>
  );
}