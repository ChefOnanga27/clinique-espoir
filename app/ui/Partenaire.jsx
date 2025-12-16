import React from 'react'
import Image from 'next/image';

const imageLoader =[
  { src: '/partenaire1.jpg',
  },
  {
    src: '/partenaire2.jpg',
  },
  {
    src: '/partenaire3.jpg',
  },  
  {
    src: '/partenaire4.png',
  }
]
export default function Partenaire() {
  return (
    <div>
      <section className="py-16 px-10 bg-white">
            {/* Titre */}
            <h1 className="text-red-700 text-2xl md:text-5xl font-bold text-center mb-12">
              Nos partenaires en assurance
            </h1>
      
            {/* Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
              {imageLoader.map((item, index) => (
                <div
                  key={index}
                  className="w-24 h-20 relative "
                >
                  <Image
                    src={item.src}
                    alt={`Partenaire ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}


