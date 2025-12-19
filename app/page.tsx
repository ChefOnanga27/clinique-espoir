"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUserMd, FaAmbulance, FaFlask, FaXRay, FaStethoscope, FaHandsHelping, FaPhone } from "react-icons/fa";
import Hero from "@/app/ui/Hero";

const services = [
  { name: "Consultations Générales", icon: <FaUserMd />, href: "/services/consultations-generales" },
  { name: "Soins d'Urgence", icon: <FaAmbulance />, href: "/services/urgences" },
  { name: "Laboratoire Médical", icon: <FaFlask />, href: "/services/laboratoire" },
  { name: "Imagerie Médicale", icon: <FaXRay />, href: "/services/imagerie-medicale" },
  { name: "Consultations Spécialisées", icon: <FaStethoscope />, href: "/services/consultations-specialisees" },
  { name: "Soutien Psychologique", icon: <FaHandsHelping />, href: "/services/soutien-psychologique" },
];

interface BentoItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size?: "small" | "medium" | "large";
}

const bentoItems: BentoItem[] = [
  { id: 1, title: "Équipe Médicale", description: "Nos médecins dévoués", image: "/medecin0.jpg", size: "large" },
  { id: 2, title: "Soins Modernes", description: "Technologies avancées", image: "/medecin1.jpg", size: "medium" },
  { id: 3, title: "Expertise", description: "Personnel qualifié", image: "/medecin2.jpg", size: "small" },
  { id: 4, title: "Consultation", description: "Suivi personnalisé", image: "/medecin3.jpg", size: "small" },
  { id: 5, title: "Laboratoire", description: "Analyses précises", image: "/medecin4.jpg", size: "small" },
  { id: 6, title: "Laboratoire", description: "Analyses précises", image: "/medecin5.jpg", size: "small" },
  { id: 7, title: "Imagerie", description: "Diagnostics avancés", image: "/medecin6.jpg", size: "medium" },

];

export default function Page() {
  return (
    <main className="bg-white text-gray-900 flex flex-col">
      {/* HERO */}
      <Hero />

      {/* SECTION SERVICES */}
      <section className="px-4 sm:px-6 py-10 bg-white">
        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8">
          Découvrez nos services
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 my-20">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="relative flex flex-col items-center justify-center group cursor-pointer"
            >
              {/* Losange extérieur */}
              <div className="w-24 h-24 bg-red-700 border-2 border-white flex items-center justify-center rotate-45 transition-transform duration-500 group-hover:-rotate-45">
                {/* Losange intérieur */}
                <div className="w-20 h-20 bg-amber-500 border-2 border-white flex items-center justify-center -rotate-45 transition-transform duration-500 group-hover:rotate-45">
                  {/* Icône fixe */}
                  <span className="text-4xl rotate-0 text-white">
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Nom du service */}
              <h2 className="font-semibold text-xs sm:text-sm mt-4 px-1 text-center">
                {service.name}
              </h2>

              {/* Tooltip */}
              <div className="absolute z-50 top-[120%] w-48 p-3 bg-white text-black border border-gray-300 rounded shadow-lg opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100">
                <p className="text-xs leading-tight">
                  {service.name} — cliquez pour en savoir plus.
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/services">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition duration-300">
              Voir tous nos services
            </button>
          </Link>
        </div>
      </section>

      {/* GALERIE BENTO */}
      <section className="px-4 sm:px-6 md:px-20 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Notre Clinique</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-fr">
          {bentoItems.map((item) => {
            let spanClass = "col-span-1 row-span-1";

            if (item.size === "medium") spanClass = "sm:col-span-2 row-span-1";
            if (item.size === "large") spanClass = "sm:col-span-2 md:row-span-2";

            return (
              <div
                key={item.id}
                className={`${spanClass} relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 min-h-[200px]`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* IMAGE + TEXTE */}
     <section className="w-full grid grid-cols-[4fr_1fr]  px-4 sm:px-6 md:px-20 mb-7   overflow-hidden ">
  {/* Image */}
  <div className="relative w-full max-h-[150px]">
    <Image
      src="/clinic.png"
      alt="Clinique de l'Espoir"
      fill
      className="object-cover rounded-l-lg shadow-lg"
    />
  </div>

  {/* Texte */}
  <div className="flex items-center justify-center bg-red-800 text-white rounded-r-lg p-6 max-h-[150px]">
    <h1 className="text-xl max-md:text-sm font-bold text-center md:text-left">
      Notre clinique vous attend pour vos soins
    </h1>
  </div>
</section>


    

      {/* ACTUALITÉS & CONTACT */}
      <section className="flex flex-col md:flex-row gap-6 px-4 md:px-20 mb-10">
        {/* ACTUALITÉS */}
        <div className="bg-pink-200 p-6 md:p-10 rounded-xl shadow-lg flex-1 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
            Actualités & Évènements
          </h2>

          <div className="w-full h-56 sm:h-64 md:h-80 rounded-lg flex-grow">
            <video
              src="/proc.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              aria-label="Vidéo de présentation de la clinique"
            />
            <div className=" inset-0 bg-black/30"></div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/actualite"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition duration-300"
            >
              Voir toutes les actualités
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="bg-pink-200 p-6 md:p-10 rounded-xl shadow-lg flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-red-800">
            Contactez-nous
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-base md:text-lg mb-2 font-medium">
                Pour toute question générale :
              </p>
              <a 
                href="mailto:ceeproccl@gmail.com"
                className="text-base md:text-lg font-semibold text-red-700 hover:underline"
              >
                ceeproccl@gmail.com
              </a>
            </div>

            <div>
              <p className="text-base md:text-lg mb-2 font-medium">
                Demandes de renseignements :
              </p>
              <a 
                href="mailto:ceeproccl@gmail.com"
                className="text-base md:text-lg font-semibold text-red-700 hover:underline"
              >
                ceeproccl@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <FaPhone className="text-red-700 text-xl" />
              <a 
                href="tel:+24166361219"
                className="text-base md:text-lg font-semibold hover:text-red-700 transition"
              >
                +241 66 36 12 19
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="flex flex-col md:flex-row mx-4 md:mx-20 my-10 rounded-xl overflow-hidden shadow-xl">
        {/* TEXTE */}
        <div className="bg-red-700 text-white flex-1 flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
          <h2 className="text-xl md:text-3xl font-semibold mb-4 uppercase">
            À propos de la clinique
          </h2>

          <p className="text-sm md:text-base leading-7 text-white/90">
            La Clinique de l&apos;Espoir et de l&apos;Espérance (CEE PROC CL) est un
            établissement de santé privé situé à Libreville, Gabon.
            Fondée en 2020, elle s&apos;engage à fournir des soins médicaux de haute
            qualité avec compassion et professionnalisme.
          </p>

          <Link 
            href="/a-propos" 
            className="mt-6 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition duration-300 w-fit"
          >
            En savoir plus
          </Link>
        </div>

        {/* IMAGE */}
        <div className="relative flex-1 h-56 sm:h-64 md:h-auto min-h-[300px]">
          <Image
            src="/propo.jpg"
            alt="Clinique de l'Espoir et de l'Espérance"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </main>
  );
}