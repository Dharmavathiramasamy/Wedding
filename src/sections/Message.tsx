import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import { DividerOrnament, MandalaSVG } from '@/components/Ornaments';

export default function Message() {
  const { message, couple } = weddingData;

  return (
    <section className="wedding-section bg-brown-500 relative overflow-hidden">
      {/* Background mandalas */}
      <motion.div
        className="absolute -top-20 -left-20 text-champagne-300/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      >
        <MandalaSVG size={250} />
      </motion.div>
      <motion.div
        className="absolute -bottom-20 -right-20 text-champagne-300/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <MandalaSVG size={200} />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Quote icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150 }}
        >
          <div className="w-12 h-12 rounded-full border border-champagne-300/30 flex items-center justify-center">
            <Quote className="w-5 h-5 text-champagne-300" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="font-display italic text-2xl md:text-3xl lg:text-4xl text-ivory-100 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          "{message.quote}"
        </motion.blockquote>
        <p className="font-sans text-sm text-champagne-300 mb-12">— {message.author}</p>

        <DividerOrnament className="my-8 opacity-50" />

        {/* Message body */}
        <motion.p
          className="font-serif text-lg md:text-xl text-ivory-200/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {message.body}
        </motion.p>

        {/* Sign-off */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-script text-3xl text-champagne-300">
            With love,
          </p>
          <p className="font-display text-xl text-ivory-100 mt-2">
            {couple.groomFull} &amp; {couple.brideFull}
          </p>
          <p className="font-sans text-sm text-champagne-400 mt-3 tracking-wider">
            {couple.hashtag}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
