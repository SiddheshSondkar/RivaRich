import React from 'react';
import { motion } from 'motion/react';

const images = [
  'https://picsum.photos/seed/water-plant/600/600',
  'https://picsum.photos/seed/delivery-van/600/600',
  'https://picsum.photos/seed/water-bottles/600/600',
  'https://picsum.photos/seed/water-glass/600/600',
  'https://picsum.photos/seed/clean-facility/600/600',
  'https://picsum.photos/seed/water-source/600/600',
];

const Gallery = () => {
  return (
    <section className="py-24 bg-brand-light overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight"
          >
            Visual <span className="text-secondary">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/60 text-lg font-medium"
          >
            A glimpse into our quality-focused operations and products.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="aspect-square rounded-[40px] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(20,74,125,0.2)] transition-all duration-700 group border-[8px] border-white"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
