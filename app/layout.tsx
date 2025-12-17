import type { Metadata } from "next";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import Partenaire from "@/app/ui/Partenaire";
import { ptSansNarrow } from '@/app/ui/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinique Espoir",
  description: "Nous prenons soin de votre santé et nous vous accompagnons dans votre parcours de soins.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${ptSansNarrow.className}`}>
        <Header /> {/* UN SEUL HEADER pour tout le site */}
        {children}
        <Partenaire />
        <Footer />
      </body>
    </html>
  );
}
