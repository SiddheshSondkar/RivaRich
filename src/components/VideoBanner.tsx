import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoBanner() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-light/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-black tracking-wider uppercase text-sm mb-4 block">State-of-the-Art facility</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our <span className="text-secondary">Purification</span> Process</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Take a look at how we ensure every drop of Riva Rich water meets the highest standards of purity, hygiene, and mineral balance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 group bg-gray-900"
        >
          {/* USER INSTRUCTION: Replace src="/images/mineral-processing.mp4" with your actual video or upload an MP4 to public/images/ */}
          <video 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://picsum.photos/seed/clean-facility/1920/1080"
          >
            <source src="/images/mineral-processing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,255,255,0.2)] border border-white/20 group-hover:scale-110 group-hover:bg-secondary group-hover:border-transparent transition-all duration-300">
              <Play size={40} className="ml-2 fill-current" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
