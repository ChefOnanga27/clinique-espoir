// app/carriere/[slug]/page.jsx
import { carrieres } from "../../lib/data/services";
import CarriereLayout from "../layout";
import HeroSection from "../../ui/HeroSection";
import { notFound } from "next/navigation";
import Image from "next/image";
import { audio } from "framer-motion/client";

export default async function CarrierePage({ params }) {
  // Déballer params si c'est une Promise
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) return notFound();

  const carriere = carrieres.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!carriere) return notFound();

  return (
    <CarriereLayout>
      {/* Hero */}
      <HeroSection title={carriere.title} image={carriere.image} />

      {/* Contenu avec texte à gauche et section droite */}
      <div className="max-w-6xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-8">
        
        {/* Texte principal à gauche */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold">{carriere.title}</h2>
          <p className="text-lg leading-7">{carriere.description}</p>
          <p className="text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
            eget consectetur nunc nisl eget nunc.
          </p>
          <p className="text-lg leading-7">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            {/* <Image
            src="/medecin.jpg"
            alt="Exemple contenu"
            className="rounded-lg shadow-lg"
            width={400}
            height={80}
          /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad reiciendis tenetur, aliquid rerum ea asperiores, sit, minima tempore ducimus obcaecati debitis cupiditate cumque! Voluptatibus adipisci magnam quod similique itaque!
          </p>
          </div>
        </div>

        {/* Section droite */}
        <div className="space-y-6 md:w-1/3 mx-auto">
  {/* Section Infos complémentaires */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <h3 className="font-bold text-xl mb-2">Infos complémentaires</h3>
    <p className="text-sm">
      Vous pouvez ajouter ici des détails spécifiques, des CTA ou des images supplémentaires.
    </p>
  </div>

  {/* Formulaire de candidature */}
  <div className="bg-white p-4 rounded-lg shadow-md">
    <form action="" method="post">
      <h3 className="font-bold text-xl mb-4">Postuler pour ce poste</h3>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <textarea
        name="coverLetter"
        placeholder="Votre lettre de motivation"
        className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
      ></textarea>
      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Soumettre la candidature
      </button>
    </form>
  </div>
</div>
      </div>
    </CarriereLayout>
  );
}
