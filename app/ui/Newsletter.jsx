import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg bg-red-50 mx-auto my-10 max-w-6xl p-6 overflow-hidden items-center">
      <div className="hidden md:block">
        <Image
          src="/clinique.jpg"
          alt="Newsletter"
          width={600}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-red-500 text-center">
          Inscrivez-vous à notre Newsletter
        </h2>

        <p className="text-black text-center md:text-left">
          Restez informé des dernières nouvelles et mises à jour de la Clinique de
          l&apos;Espoir en vous inscrivant à notre newsletter mensuelle.
        </p>

        <form className="grid grid-cols-2 gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="w-full p-2 text-center border text-black border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button
            type="submit"
            className="w-full bg-red-600 p-2 border border-red-500 text-white rounded-xl hover:bg-red-700 transition"
          >
            S&apos;inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
