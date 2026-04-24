import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingActions = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="https://wa.me/919371073525?text=Hello,%20I%20want%20to%20order%20Riva%20Rich%20water."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-light">
          Chat with us
        </span>
      </motion.a>

      {/* Mobile Sticky Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 p-4 pointer-events-none">
        <motion.a
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5 }}
          href="tel:+919371073525"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-primary/30"
        >
          <Phone size={20} />
          Call Now to Order
        </motion.a>
      </div>
    </>
  );
};

export default FloatingActions;
