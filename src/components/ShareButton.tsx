import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: `${weddingData.couple.groomShort} weds ${weddingData.couple.brideShort}`,
      text: `You're invited! Join us on ${weddingData.wedding.dateDisplay} in ${weddingData.wedding.city}. ${weddingData.couple.hashtag}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled — no action needed
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.title} — ${shareData.text} ${shareData.url}`);
        alert('Invitation link copied to clipboard!');
      } catch {
        // Clipboard not available
      }
    }
  };

  return (
    <motion.button
      onClick={handleShare}
      className="flex items-center gap-2 px-6 py-3 rounded-full border border-champagne-300 text-brown-500 hover:bg-champagne-100 transition-colors font-sans text-sm tracking-wide group"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Share2 className="w-4 h-4 text-champagne-400 group-hover:rotate-12 transition-transform" />
      Share Invitation
    </motion.button>
  );
}
