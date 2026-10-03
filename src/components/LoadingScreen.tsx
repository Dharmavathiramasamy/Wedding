import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory-50"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Decorative mandala-like ornament */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="55" stroke="#D4AF6A" strokeWidth="1" opacity="0.3" />
            <circle cx="60" cy="60" r="45" stroke="#D4AF6A" strokeWidth="1" opacity="0.5" />
            <circle cx="60" cy="60" r="35" stroke="#D4AF6A" strokeWidth="1.5" opacity="0.7" />
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '60px 60px' }}
            >
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <line
                  key={angle}
                  x1="60"
                  y1="15"
                  x2="60"
                  y2="25"
                  stroke="#C29A4E"
                  strokeWidth="2"
                  transform={`rotate(${angle} 60 60)`}
                />
              ))}
            </motion.g>
            <text x="60" y="66" textAnchor="middle" className="fill-brown-400 font-script text-2xl">
              P&J
            </text>
          </svg>
        </motion.div>

        <motion.p
          className="font-script text-4xl md:text-5xl text-champagne-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Purushothaman weds Jansi
        </motion.p>

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-brown-300 mb-8">
          Join us on our special day
        </p>

        {/* Progress bar */}
        <div className="w-48 h-px bg-ivory-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-champagne-300 to-champagne-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-brown-300 font-sans tabular-nums">{progress}%</p>
      </motion.div>
    </AnimatePresence>
  );
}
