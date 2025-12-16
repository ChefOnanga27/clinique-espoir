import React from "react";
import Image from "next/image";
import { services } from "../lib/data/services";

export default function PageServices() {
  return (
    <main>
      {/* Image de couverture */}
      <div className="relative w-full h-120 mb-10 overflow-hidden">
  {/* Image */}
  <Image
    src="/services.jpg"
    alt="Nos services médicaux"
    fill
    className="object-cover"
    priority
  />

  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />

  {/* Contenu HERO */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
    
    {/* Titre fixe */}
    <h1 className="text-4xl md:text-5xl pt-20 font-extrabold mb-6 max-w-3xl leading-tight">
      Des soins médicaux fiables,<br />
      <span className="text-amber-500">pour toute la famille</span>
    </h1>

    {/* Texte défilant */}
    <div className="overflow-hidden border-l-4 border-blue-400 pl-4">
      <div className="whitespace-nowrap animate-marquee text-lg md:text-xl font-semibold tracking-wide">
        🏥 Ouvert 24h/24 • Urgences • Consultations Générales • Imagerie Médicale •
        Laboratoire • Consultations Spécialisées • Soutien Psychologique
      </div>
    </div>

  </div>
</div>
      {/* Liste des services */}
      <section className="px-6 md:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="border-amber-600 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
