import React from "react";
import { BiSend, BiUser, BiEnvelope, BiMessageDetail } from "react-icons/bi";

export default function Contact() {
  return (
    <main className="bg-gray-200">
      {/* HERO AVEC MAP */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=Owendo,Gabon&output=embed"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <h1 className="absolute inset-0 z-20 flex items-center justify-center text-center text-5xl md:text-8xl font-bold text-white px-4">
          Contactez-nous
        </h1>
      </section>

      {/* CONTACT + HEURES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">

          {/* FORMULAIRE */}
          <article className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Contactez-nous via le formulaire
            </h2>

            <form className="flex flex-col space-y-4">
              
              {/* Input Nom */}
              <div className="flex items-center gap-3 border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-red-600">
                <BiUser className="text-red-600 text-2xl" />
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full text-black placeholder-black/70 focus:outline-none"
                />
              </div>

              {/* Input Email */}
              <div className="flex items-center gap-3 border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-red-600">
                <BiEnvelope className="text-red-600 text-2xl" />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full text-black placeholder-black/70 focus:outline-none"
                />
              </div>

              {/* Textarea Message */}
              <div className="flex items-start gap-3 border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-red-600">
                <BiMessageDetail className="text-red-600 text-2xl mt-1" />
                <textarea
                  placeholder="Votre message"
                  className="w-full text-black placeholder-black/70 resize-none h-40 focus:outline-none"
                />
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-red-700 transition"
              >
                Envoyer
                <BiSend className="text-xl" />
              </button>
            </form>
          </article>

          {/* HEURES */}
          <aside className="bg-red-700 text-white rounded-lg p-8 shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              Heures de visite
            </h2>

            <ul className="space-y-4 text-lg leading-relaxed">
              <li className="underline">
                <strong>Lundi – Dimanche :</strong> 08h00 – 20h00
              </li>
              <li className="underline">
                <strong>Pause :</strong> 12h00 – 13h00
              </li>
              <li className="underline">
                <strong>Soirée :</strong> 14h00 – 16h00
              </li>
              <li className="text-sm font-bold opacity-90">
                Urgences disponibles 24h/24
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </main>
  );
}
