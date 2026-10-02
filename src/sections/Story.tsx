import { motion } from 'framer-motion';
import { Coffee, Heart, Gem, Infinity as InfinityIcon } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import { DividerOrnament } from '@/components/Ornaments';

const iconMap: Record<string, typeof Coffee> = {
  coffee: Coffee,
  heart: Heart,
  ring: Gem,
  infinity: InfinityIcon,
};

export default function Story() {
  const { story, couple } = weddingData;

  return (
    <section id="story" className="wedding-section bg-ivory-50">
      {/* Section header */}
      <div className="text-center mb-16">
        <span className="section-label">How it all began</span>
        <h2 className="section-title">Our Story</h2>
        <DividerOrnament className="mt-4" />
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne-300 to-transparent md:-translate-x-1/2" />

        {story.map((entry, i) => {
          const Icon = iconMap[entry.icon] || Heart;
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              className={`relative flex items-center mb-12 last:mb-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-champagne-300 border-4 border-ivory-50 flex items-center justify-center shadow-gold">
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <span className="font-script text-2xl text-champagne-400">{entry.date}</span>
                  <h3 className="font-display text-xl md:text-2xl text-brown-500 mt-1 mb-3">{entry.title}</h3>
                  <p className="font-serif text-brown-400 leading-relaxed">{entry.description}</p>
                </div>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          );
        })}
      </div>

      {/* Closing line */}
      <motion.p
        className="text-center font-script text-2xl md:text-3xl text-champagne-400 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        And so, {couple.groomShort} &amp; {couple.brideShort} became forever
      </motion.p>
    </section>
  );
}
