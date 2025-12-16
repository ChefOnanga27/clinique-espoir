import LayoutActualite from "../layout"; // majuscule obligatoire
import { actualites, news } from "../../lib/data/services";
import HeroSection from "../../ui/HeroSection";
import Actu from "../../ui/ActuList";
import { notFound } from "next/navigation";

export default function ActualitePage({ params }) {
  const slug = params?.slug ? String(params.slug).toLowerCase() : null;

  if (!slug) return notFound();

  // Pages catégories
  if (slug === "actualites" || slug === "news") {
    const articles = slug === "news" ? news : actualites;
    return (
      <LayoutActualite>
        <HeroSection
          title={slug === "news" ? "News & Médias" : "Actualités & Médias"}
          bgImage={slug === "news" ? "/news/hero.jpg" : "/actualites/hero.jpg"}
        />
        <Actu articles={articles} />
      </LayoutActualite>
    );
  }

  // Page article unique
  const all = [...actualites, ...news];
  const article = all.find((a) => a.slug.toLowerCase() === slug);

  if (article) {
    return (
      <LayoutActualite>
        <HeroSection title={article.title} bgImage={article.image} />
        <div className="max-w-4xl mx-auto my-12 px-4">
          <h2 className="text-3xl font-bold mb-6">{article.title}</h2>
          <p className="text-lg leading-7">{article.description}</p>
        </div>
      </LayoutActualite>
    );
  }

  // Aucun article ou catégorie trouvé
  return (
    <LayoutActualite>
      <HeroSection title="Actualités & Médias" bgImage="/actualites/hero.jpg" />
      <p className="text-center py-12 text-gray-700">
        Aucun article ni catégorie trouvé.
      </p>
    </LayoutActualite>
  );
}
