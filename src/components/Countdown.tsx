import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

function calculateTimeLeft(target: string): CountdownValues {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="w-20 h-24 md:w-28 md:h-32 glass-card rounded-2xl shadow-soft flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
            <motion.span
              key={unit.value}
              className="font-display text-3xl md:text-4xl text-brown-500 font-bold tabular-nums"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
            <span className="text-[0.6rem] md:text-xs uppercase tracking-widest text-champagne-400 mt-1">
              {unit.label}
            </span>
            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
