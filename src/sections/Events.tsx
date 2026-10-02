import { motion } from 'framer-motion';
import { Sun, Flower2, Flame, Sparkles, Clock, MapPin, Shirt } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import { DividerOrnament } from '@/components/Ornaments';

const iconMap: Record<string, typeof Sun> = {
  sun: Sun,
  flower: Flower2,
  fire: Flame,
  sparkles: Sparkles,
};

export default function Events() {
  const { events } = weddingData;

  return (
    <section id="events" className="wedding-section bg-gradient-to-b from-ivory-100 to-ivory-200">
      <div className="text-center mb-16">
        <span className="section-label">Join us in celebration</span>
        <h2 className="section-title">Wedding Events</h2>
        <DividerOrnament className="mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {events.map((event, i) => {
          const Icon = iconMap[event.icon] || Sparkles;

          return (
            <motion.div
              key={i}
              className="group relative glass-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Decorative corner */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-champagne-100/40 group-hover:scale-150 transition-transform duration-700" />

              {/* Icon badge */}
              <div className="relative w-14 h-14 rounded-2xl bg-champagne-300 flex items-center justify-center mb-5 shadow-gold">
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Event type label */}
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-400 font-sans">{event.type}</span>

              {/* Event name */}
              <h3 className="font-display text-2xl text-brown-500 mt-2 mb-4">{event.name}</h3>

              {/* Description */}
              <p className="font-serif text-brown-400 leading-relaxed mb-5">{event.description}</p>

              {/* Details */}
              <div className="space-y-2.5 border-t border-champagne-100 pt-4">
                <div className="flex items-center gap-2 text-sm text-brown-400">
                  <Clock className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                  <span className="font-sans">{event.date} &middot; {event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brown-400">
                  <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                  <span className="font-sans">{event.venue}, {event.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brown-400">
                  <Shirt className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                  <span className="font-sans">{event.dressCode}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
