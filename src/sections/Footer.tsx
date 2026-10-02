import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Footer() {
  const { couple, wedding } = weddingData;

  return (
    <footer className="bg-brown-600 py-12 px-6 text-center">
      <motion.div
        className="flex items-center justify-center gap-2 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="h-px w-12 bg-champagne-300/40" />
        <Heart className="w-4 h-4 text-champagne-300" fill="currentColor" />
        <span className="h-px w-12 bg-champagne-300/40" />
      </motion.div>

      <p className="font-script text-2xl text-champagne-300 mb-2">
        {couple.groomShort} &amp; {couple.brideShort}
      </p>
      <p className="font-sans text-xs text-ivory-200/60 tracking-wider">
        {wedding.dateDisplay} &middot; {wedding.city}
      </p>
      <p className="font-sans text-xs text-ivory-200/40 mt-4">
        Made with love for our special day
      </p>
    </footer>
  );
}
