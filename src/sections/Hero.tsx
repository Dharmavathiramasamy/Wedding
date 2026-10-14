import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import Countdown from '@/components/Countdown';
import { CornerFlourish, MandalaSVG } from '@/components/Ornaments';

export default function Hero() {
  const { couple, wedding, hero } = weddingData;

  return (
    <section id="hero" className="relative bg-ivory-100">
      {/* Photo area */}
      <div className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pb-28 md:pb-36">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.couplePhoto}
          alt="Couple on their wedding day"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-600/60 via-brown-500/30 to-brown-600/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-b from-transparent via-ivory-100/70 to-ivory-100" />
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

      </div>

      {/* Countdown sits on the fade so the photo and the next section meet cleanly */}
      <motion.div
        className="relative z-10 -mt-24 md:-mt-28 pb-6 md:pb-10 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
      >
        <p className="text-center text-champagne-400 text-xs uppercase tracking-[0.3em] mb-4 font-sans">
          {wedding.daysText}
        </p>
        <Countdown targetDate={wedding.date} />
      </motion.div>
    </section>
  );
}
