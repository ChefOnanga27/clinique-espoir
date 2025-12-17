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

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero />

      {/* GRID SERVICES */}
<section className="px-4 sm:px-6 py-10">
  <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8">
    Nos Services
  </h1>

  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
    {services.map((service, index) => (
      <Link
        key={index}
        href={service.href}
        className="
          flex flex-col items-center justify-center
          border border-amber-600
          p-6 sm:p-8
          rounded-xl shadow
          text-center
          hover:bg-red-700 hover:text-white
          transition-all duration-300
        "
      >
        <div className="text-3xl sm:text-4xl mb-4">
          {service.icon}
        </div>

        <span className="font-medium text-base sm:text-lg">
          {service.name}
        </span>
      </Link>
    ))}
  </div>
  <div className="flex justify-center mt-8">
    <Link href="/services">
      <button className="bg-amber-500 text-white px-6 py-2 rounded hover:underline transition">
        Voir plus
      </button>
    </Link>
  </div>
</section>


      {/* IMAGE + TEXTE */}
      <section className="relative h-[50vh] sm:h-[60vh] mx-4 md:mx-20 my-10 overflow-hidden rounded-3xl">
  <Image
    src="/clinic.png"
    alt="Clinique"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-black/40 flex items-end md:items-center justify-center md:justify-end">
    <div className="w-full md:w-1/3 p-5 md:p-6 text-white space-y-3 md:space-y-4 bg-black/40 md:bg-transparent">
      <h2 className="text-base md:text-lg font-semibold uppercase">
        Lorem Ipsum
      </h2>

      <p className="leading-relaxed text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor</li>
        <li>Ut labore et dolore magna</li>
      </ul>
    </div>
  </div>
</section>
     <section className="flex flex-col md:flex-row gap-6 px-4 md:px-20 mb-10">
  {/* ACTUALITÉS */}
  <div className="bg-pink-200 p-6 md:p-10 rounded-xl shadow flex-1 flex flex-col">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
      Actualités & Évènements
    </h2>

    <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden">
      <video
        src="/proc.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    <div className="mt-4 flex justify-center">
      <Link
        href="/actualite"
        className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-red-800 transition"
      >
        Voir plus
      </Link>
    </div>
  </div>

  {/* CONTACT */}
  <div className="bg-pink-200 p-6 md:p-10 rounded-xl shadow flex-1">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
      Contactez-nous
    </h2>

    <p className="text-base md:text-lg mb-2">
      Pour toute question générale :
    </p>

    <p className="text-base md:text-lg font-semibold mb-2">
      ceeproccl@gmail.com
    </p>

    <p className="text-base md:text-lg mb-4">
      Demandes de renseignements : ceeproccl@gmail.com
    </p>

    <div className="flex items-center space-x-2">
      <FaPhone className="text-red-700" />
      <p className="text-base md:text-lg">
        +241 66 36 12 19
      </p>
    </div>
  </div>
</section>
      <section className="flex flex-col md:flex-row mx-4 md:mx-20 my-10 rounded-xl overflow-hidden shadow-lg">
  {/* TEXTE */}
  <div className="bg-red-700 text-white flex-1 flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
    <h2 className="text-xl md:text-3xl font-semibold mb-4 uppercase">
      À propos de la clinique
    </h2>

    <p className="text-sm md:text-base leading-7 text-white/90">
      La Clinique de l&apos;Espoir et de l&apos;Espérance (CEE PROC CL) est un
      établissement de santé privé situé à Libreville, Gabon.
      Fondée en 2020, elle s&apos;engage à fournir des soins médicaux de haute
      qualité.
    </p>
  </div>

  {/* IMAGE */}
  <div className="relative flex-1 h-56 sm:h-64 md:h-auto">
    <Image
      src="/propo.jpg"
      alt="Clinique Espoir"
      fill
      className="object-cover"
      priority
    />
  </div>
</section>
    </main>
  );
}
