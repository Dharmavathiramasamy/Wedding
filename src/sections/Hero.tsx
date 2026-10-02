import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import Countdown from '@/components/Countdown';
import { CornerFlourish, MandalaSVG } from '@/components/Ornaments';

export default function Hero() {
  const { couple, wedding, hero } = weddingData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.couplePhoto}
          alt="Couple on their wedding day"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-600/60 via-brown-500/40 to-brown-600/70" />
      </div>

      {/* Decorative ornaments */}
      <motion.div
        className="absolute top-24 left-8 text-champagne-200/40 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <MandalaSVG size={180} />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-8 text-champagne-200/40 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      >
        <MandalaSVG size={150} />
      </motion.div>

      <CornerFlourish className="absolute top-20 left-4 w-16 h-16 text-champagne-200/30 hidden md:block" />
      <CornerFlourish className="absolute top-20 right-4 w-16 h-16 text-champagne-200/30 hidden md:block rotate-90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20">
        <motion.p
          className="font-script text-2xl md:text-3xl text-champagne-200 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          The Wedding of
        </motion.p>

        {/* Names */}
        <div className="my-4">
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, type: 'spring' }}
          >
            {couple.groomShort}
          </motion.h1>
          <motion.div
            className="flex items-center justify-center my-2 md:my-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="h-px w-10 bg-champagne-200" />
            <span className="font-script text-3xl md:text-5xl text-champagne-200 mx-4">&amp;</span>
            <span className="h-px w-10 bg-champagne-200" />
          </motion.div>
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1, type: 'spring' }}
          >
            {couple.brideShort}
          </motion.h1>
        </div>

        {/* Date + Location */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="flex items-center gap-2 text-champagne-100">
            <Calendar className="w-4 h-4" />
            <span className="font-sans text-sm md:text-base tracking-wide">{wedding.dateDisplay}</span>
          </div>
          <span className="hidden md:block w-1 h-1 rounded-full bg-champagne-200" />
          <div className="flex items-center gap-2 text-champagne-100">
            <MapPin className="w-4 h-4" />
            <span className="font-sans text-sm md:text-base tracking-wide">{wedding.city}</span>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="font-serif italic text-lg md:text-xl text-white/80 mt-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {hero.subtext}
        </motion.p>
      </div>

      {/* Countdown */}
      <motion.div
        className="relative z-10 mt-10 md:mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
      >
        <p className="text-center text-champagne-200 text-xs uppercase tracking-[0.3em] mb-4 font-sans">
          {wedding.daysText}
        </p>
        <Countdown targetDate={wedding.date} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-champagne-200/50 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-champagne-200" />
        </div>
      </motion.div>
    </section>
  );
}
