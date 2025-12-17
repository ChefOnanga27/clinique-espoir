"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

import { services, apropos, carrieres } from "../lib/data/services";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);
  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50 shadow-md bg-white">
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-2">
        {/* HAMBURGER MOBILE */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(true)}>
          <FaBars />
        </button>

        {/* LOGO CENTER */}
        <div className="flex flex-col items-center">
          <Image src="/logo.jpg" alt="Clinique Espoir Logo" width={40} height={40} />
          <p className="text-xs text-center font-bold lowercase mt-1">
            clinique de l&apos;espoir et de l&apos;espérance
          </p>
        </div>

        {/* CONTACT DESKTOP */}
        <Link
          href="/contact"
          className="hidden md:block bg-amber-500 text-white px-4 py-2 rounded lowercase hover:underline"
        >
          contactez-nous
        </Link>
      </div>

      {/* CONTACT BAR */}
      <div className="hidden md:flex justify-between items-center bg-red-700 text-white px-6 py-2 text-sm">
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

      {/* NAVIGATION DESKTOP */}
      <nav className="hidden md:block bg-red-800 text-black py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="hover:underline text-white">Accueil</Link>
          </li>

          <li className="relative">
            <button onClick={() => toggleMenu("apropos")} className="hover:underline text-white">
              À propos
            </button>
            {openMenu === "apropos" && (
              <Dropdown items={apropos} basePath="/apropos" onClick={closeAll} />
            )}
          </li>

          <li className="relative">
            <button onClick={() => toggleMenu("services")} className="hover:underline text-white">
              Services
            </button>
            {openMenu === "services" && (
              <Dropdown items={services} basePath="/services" onClick={closeAll} />
            )}
          </li>

          <li>
            <Link href="/actualite" className="hover:underline text-white">Actualités & Médias</Link>
          </li>

          <li className="relative">
            <button onClick={() => toggleMenu("carriere")} className="hover:underline text-white">
              Carrière
            </button>
            {openMenu === "carriere" && (
              <Dropdown items={carrieres} basePath="/carriere" onClick={closeAll} />
            )}
          </li>

          <li>
            <Link href="/contact" className="hover:underline text-white">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE SIDEBAR */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeAll} />}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={closeAll} className="text-xl"><FaTimes /></button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <li><Link href="/" onClick={closeAll}>Accueil</Link></li>

          <li>
            <p className="font-semibold cursor-pointer" onClick={() => toggleMenu("apropos")}>À propos</p>
            {openMenu === "apropos" &&
              apropos.map(item => (
                <Link key={item.slug} href={`/apropos/${item.slug}`} onClick={closeAll} className="block pl-4 py-1 text-sm">
                  {item.title}
                </Link>
              ))
            }
          </li>

          <li>
            <p className="font-semibold cursor-pointer" onClick={() => toggleMenu("services")}>Services</p>
            {openMenu === "services" &&
              services.map(item => (
                <Link key={item.slug} href={`/services/${item.slug}`} onClick={closeAll} className="block pl-4 py-1 text-sm">
                  {item.title}
                </Link>
              ))
            }
          </li>

          <li><Link href="/actualite" onClick={closeAll}>Actualités & Médias</Link></li>

          <li>
            <p className="font-semibold cursor-pointer" onClick={() => toggleMenu("carriere")}>Carrière</p>
            {openMenu === "carriere" &&
              carrieres.map(item => (
                <Link key={item.slug} href={`/carriere/${item.slug}`} onClick={closeAll} className="block pl-4 py-1 text-sm">
                  {item.title}
                </Link>
              ))
            }
          </li>

          <li><Link href="/contact" onClick={closeAll}>Contact</Link></li>
        </ul>
      </aside>
    </header>
  );
}
