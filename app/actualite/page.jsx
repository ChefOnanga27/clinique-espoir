import LayoutActualite from "./layout";
import HeroSection from "../ui/HeroSection";
import Link from "next/link";
import Actu from "../ui/ActuList";
import { actualites, news } from "../lib/data/services";

export default function ActualiteIndex() {
  // Mélange + limite
  const latest = [...actualites, ...news].slice(0, 6);

  return (
    <main className="w-full flex">
      <HeroSection
        title="Actualités & Médias"
        bgImage="/actualites/hero.jpg"
      />

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation catégories */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Link
            href="/actualite/actualites"
            className="px-5 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
          >
            Actualités
          </Link>
          <Link
            href="/actualite/news"
            className="px-5 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
          >
            News
          </Link>
        </div>

        <h3 className="text-2xl font-bold mb-6 text-center">
          Dernières publications
        </h3>

        <Actu articles={latest} />
      </section>
    </main>
  );
}
