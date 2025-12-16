import AproposLayout from "../../apropos/layout";
import {apropos} from "../../lib/data/services";
import HeroSection from "../../ui/HeroSection";
import { notFound } from "next/navigation";

export default async function AproposPage({ params }) {
  // Déballer params si c'est une Promise
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
    if (!slug) return notFound();
    const apropo = apropos.find(
        (a) => a.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!apropo) return notFound();
    return (
        <AproposLayout>
            {/* Hero */}
            <HeroSection title={apropo.title} image={apropo.image} />
            {/* Contenu */}
            <div className="max-w-4xl mx-auto my-12 px-4">
                <h2 className="text-3xl font-bold mb-6">{apropo.title}</h2>
                <p className="text-lg leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
                    eget consectetur nunc nisl eget nunc.
                </p>
                <p className="text-lg leading-7">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </AproposLayout>
    );
}