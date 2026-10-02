import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Petals from '@/components/Petals';
import Navbar from '@/components/Navbar';
import MusicPlayer from '@/components/MusicPlayer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/sections/Hero';
import Story from '@/sections/Story';
import Events from '@/sections/Events';
import Gallery from '@/sections/Gallery';
import Venue from '@/sections/Venue';
import RSVP from '@/sections/RSVP';
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
        <Story />
        <Events />
        <Gallery />
        <Venue />
        <RSVP />
        <Message />
      </main>

      <Footer />

      <MusicPlayer />
      <WhatsAppButton />
    </>
  );
}
