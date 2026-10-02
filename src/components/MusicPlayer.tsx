import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!userInteracted) setUserInteracted(true);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.src} preload="auto" />

      <motion.div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      >
        {/* Track name tooltip */}
        <AnimatePresence>
          {!userInteracted && (
            <motion.div
              className="hidden md:block absolute right-full mr-3 whitespace-nowrap glass-card rounded-full px-4 py-2 shadow-soft"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <span className="text-xs text-brown-400 font-sans">
                Click to play wedding music
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Track info */}
        {isPlaying && (
          <motion.div
            className="hidden md:flex items-center gap-2 glass-card rounded-full px-4 py-2.5 shadow-soft"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <Music className="w-4 h-4 text-champagne-400 animate-pulse" />
            <span className="text-xs text-brown-400 font-sans">{weddingData.music.title}</span>
          </motion.div>
        )}

        {/* Play/Pause + Mute controls */}
        <div className="flex items-center gap-1 glass-card rounded-full p-1.5 shadow-soft">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-champagne-300 hover:bg-champagne-400 transition-colors flex items-center justify-center group"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full hover:bg-ivory-200 transition-colors flex items-center justify-center"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-brown-300" />
            ) : (
              <Volume2 className="w-4 h-4 text-champagne-400" />
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}
