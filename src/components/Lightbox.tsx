import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryImage } from '@/data/weddingData';

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const handlePrev = () => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-brown-600/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans tabular-nums">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
