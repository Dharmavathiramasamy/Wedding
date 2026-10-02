import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function WhatsAppButton() {
  const handleClick = () => {
    const { whatsappNumber, whatsappMessage } = weddingData.rsvp;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-lg transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
      aria-label="WhatsApp RSVP"
    >
      <span className="w-12 h-12 rounded-full flex items-center justify-center">
        <MessageCircle className="w-5 h-5" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-sans group-hover:max-w-[160px] group-hover:pr-5 transition-all duration-300">
        RSVP via WhatsApp
      </span>
    </motion.button>
  );
}
