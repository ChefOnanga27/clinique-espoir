import AproposLayout from "../layout";
import { apropos } from "../../lib/data/services";
import HeroSection from "../../ui/HeroSection";
import { notFound } from "next/navigation";

export default async function AproposPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) return notFound();

  const apropo = apropos.find(a => a.slug.toLowerCase() === slug);
  if (!apropo) return notFound();

  return (
    <AproposLayout >
      <HeroSection title={apropo.title} image={apropo.image} />

      <div className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-6">{apropo.title}</h2>
        <p className="text-lg leading-7 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          euismod, nisl eget consectetur sagittis.
        </p>
        <p className="text-lg leading-7">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </AproposLayout>
  );
}
