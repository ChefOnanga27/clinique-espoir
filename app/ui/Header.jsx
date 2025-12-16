"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

import { services, apropos, carrieres, actualites } from "../lib/data/services";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="w-full fixed top-0 z-50 shadow-md">
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 bg-white">
        <div className="flex flex-col items-center">
          <Image src="/logo.jpg" alt="Clinique Espoir Logo" width={40} height={40} />
          <p className="text-xs text-center font-bold lowercase mt-1">
            clinique de l&apos;espoir et de l&apos;espérance
          </p>
        </div>

        <Link
          href="/contact"
          className="bg-amber-500 text-white px-4 py-2 rounded lowercase hover:underline"
        >
          contactez-nous
        </Link>
      </div>

      {/* CONTACT BAR */}
      <div className="flex justify-between items-center bg-red-700 text-white px-6 py-2 text-sm">
        <div className="flex items-center space-x-2 lowercase">
          <FaPhone />
          <span>+241 66 36 12 19</span>
          <Link href="mailto:ceeproccl@gmail.com">ceeproccl@gmail.com</Link>
        </div>

        <div className="flex space-x-4">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="bg-red-800 text-black py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="hover:underline text-white">Accueil</Link>
          </li>

          {/* A PROPOS */}
          <li className="relative">
            <button onClick={() => toggleMenu("apropos")} className="hover:underline text-white">
              À propos
            </button>
            {openMenu === "apropos" && (
              <Dropdown items={apropos} basePath="/apropos" onClick={closeMenu} />
            )}
          </li>

          {/* SERVICES */}
          <li className="relative">
            <button onClick={() => toggleMenu("services")} className="hover:underline text-white">
              Services
            </button>
            {openMenu === "services" && (
              <Dropdown items={services} basePath="/services" onClick={closeMenu} />
            )}
          </li>

          {/* ACTUALITÉS */}
          <li className="relative">
            <button onClick={() => toggleMenu("actualites")} className="hover:underline text-white">
              Actualités & Médias
            </button>
            {openMenu === "actualites" && (
              <Dropdown items={actualites} basePath="/actualites" onClick={closeMenu} />
            )}
          </li>

          {/* CARRIÈRE */}
          <li className="relative">
            <button onClick={() => toggleMenu("carriere")} className="hover:underline text-white">
              Carrière
            </button>
            {openMenu === "carriere" && (
              <Dropdown items={carrieres} basePath="/carriere" onClick={closeMenu} />
            )}
          </li>

          <li>
            <Link href="/contact" className="hover:underline text-white">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
