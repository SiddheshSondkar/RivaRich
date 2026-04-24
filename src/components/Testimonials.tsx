import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Yewale Amruttulya',
    role: 'Pune',
    content: 'We use Riva Rich water for our daily requirements. The purity and consistency are unmatched, which helps us maintain our quality.',
    rating: 5,
  },
  {
    name: 'Monginis Foods',
    role: 'Pune',
    content: 'Reliable service and very professional staff. Their fast supply chain ensures we never run out of quality packaged water.',
    rating: 5,
  },
  {
    name: 'SGS Mall',
    role: 'Pune',
    content: 'Best water supplier in Pune. The 20L jars they supply perfectly meet the heavy daily drinking water demands of our mall spaces.',
    rating: 5,
  },
  {
    name: 'Santosh Kadam',
    role: 'Event Organizer',
    content: 'I always recommend Riva Rich to my clients for weddings and corporate events. The delivery is extremely prompt.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-light to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight"
          >
            Trusted by <span className="text-secondary">Thousands</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/60 text-lg font-medium"
          >
            Real stories from our happy customers across Pune.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-light p-10 rounded-[40px] relative group hover:bg-primary transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl hover:shadow-primary/20"
            >
              <Quote className="absolute top-8 right-8 text-secondary/10 group-hover:text-white/10 w-16 h-16 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary group-hover:fill-white group-hover:text-white transition-colors" />
                ))}
              </div>
              
              <p className="text-brand-text/70 group-hover:text-white/90 text-sm mb-8 leading-relaxed italic font-medium flex-grow transition-colors">
                "{t.content}"
              </p>
              
              <div className="pt-6 border-t border-primary/5 group-hover:border-white/10 transition-colors">
                <p className="font-black text-primary group-hover:text-white transition-colors tracking-tight">{t.name}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text/40 group-hover:text-white/60 transition-colors">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
