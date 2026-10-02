import { motion } from 'framer-motion';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import { DividerOrnament, LotusOrnament } from '@/components/Ornaments';

export default function Venue() {
  const { venue } = weddingData;

  return (
    <section id="venue" className="wedding-section bg-gradient-to-b from-ivory-200 to-ivory-100">
      <div className="text-center mb-16">
        <span className="section-label">Where it happens</span>
        <h2 className="section-title">Venue &amp; Directions</h2>
        <DividerOrnament className="mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Info column */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <LotusOrnament className="w-24 h-12 text-champagne-300 mb-4" />
          <h3 className="font-display text-3xl text-brown-500 mb-3">{venue.name}</h3>
          <div className="flex items-start gap-2 text-brown-400 mb-4">
            <MapPin className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
            <span className="font-sans text-sm">{venue.address}</span>
          </div>
          <p className="font-serif text-brown-400 leading-relaxed mb-6">{venue.description}</p>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {venue.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-brown-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                <span className="font-sans text-sm">{highlight}</span>
              </motion.li>
            ))}
          </ul>

          {/* Directions button */}
          <a
            href={venue.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-champagne-300 text-white font-sans text-sm hover:bg-champagne-400 transition-colors w-fit shadow-gold"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </motion.div>

        {/* Map column */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-medium min-h-[350px] lg:min-h-[450px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src={venue.mapsUrl}
            className="w-full h-full border-0"
            style={{ minHeight: '350px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue location map"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
