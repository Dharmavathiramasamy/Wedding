import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Petals from '@/components/Petals';
import Navbar from '@/components/Navbar';
import MusicPlayer from '@/components/MusicPlayer';
import Hero from '@/sections/Hero';
import Events from '@/sections/Events';
import Venue from '@/sections/Venue';
import Message from '@/sections/Message';
import Footer from '@/sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Petals />
      <Navbar />

      <main>
        <Hero />
        <Events />
        <Venue />
        <Message />
      </main>

      <Footer />

      <MusicPlayer />
    </>
  );
}
