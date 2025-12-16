"use client"; // nécessaire pour l’état local si on utilise useState

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Actu({ articles }) {
  // Catégories disponibles pour le filtre
  const categories = ["Toutes", "Actualités", "News"];
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredArticles =
    selectedCategory === "Toutes"
      ? articles
      : articles.filter((a) =>
          selectedCategory === "Actualités"
            ? a.route.includes("actualites")
            : a.route.includes("news")
        );

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Menu déroulant pour filtrer */}
      <div className="mb-6">
        <label className="mr-2 font-semibold">Filtrer par :</label>
        <select
          className="border rounded px-2 py-1"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Liste des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((actu) => (
          <article
            key={actu.slug}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={actu.image}
              alt={actu.title}
              width={400}
              height={220}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-blue-600 font-medium">
                {actu.category || (actu.route.includes("news") ? "News" : "Actualité")}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">{actu.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{actu.description}</p>
              <Link
                href={actu.route}
                className="text-blue-600 font-semibold hover:underline"
              >
                Lire la suite →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
