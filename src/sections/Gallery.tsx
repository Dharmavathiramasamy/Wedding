import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '@/data/weddingData';
import { DividerOrnament } from '@/components/Ornaments';
import Lightbox from '@/components/Lightbox';

export default function Gallery() {
  const { gallery } = weddingData;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="wedding-section bg-ivory-50">
      <div className="text-center mb-16">
        <span className="section-label">Cherished moments</span>
        <h2 className="section-title">Photo Gallery</h2>
        <DividerOrnament className="mt-4" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="masonry">
          {gallery.map((img, i) => (
            <motion.button
              key={i}
              className="masonry-item relative group rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300 block w-full"
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brown-600/0 group-hover:bg-brown-600/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
