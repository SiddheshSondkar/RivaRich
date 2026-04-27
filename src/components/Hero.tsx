import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import { getImagePath } from '../utils/imageHandler';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
      {/* Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-primary rounded-l-[100px] -z-10 hidden lg:block" 
      />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-primary/5 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Pune's Premium Hydration</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] mb-8 text-primary tracking-tight">
              Rich in <span className="text-secondary italic font-serif">Taste</span>, <br />
              Rich in <span className="text-secondary italic font-serif">Purity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-text/70 mb-10 max-w-lg leading-relaxed font-medium">
              Elevate your hydration experience with Riva Rich. Advanced purification meets mineral-rich goodness, delivered with precision across Pune since 2012.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#products"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-2xl shadow-primary/20 group"
              >
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="tel:+919371073525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary border border-primary/10 p-5 rounded-2xl hover:bg-brand-light transition-all shadow-xl shadow-primary/5"
                  title="Call Us"
                >
                  <Phone size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://wa.me/919371073525?text=Hello,%20I%20want%20to%20order%20Riva%20Rich%20water."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-5 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                  title="WhatsApp Us"
                >
                  <MessageCircle size={24} />
                </motion.a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-primary/5">
              {[
                { icon: ShieldCheck, label: 'RO + UV', sub: 'Purified' },
                { icon: Zap, label: 'Express', sub: 'Delivery' },
                { icon: Award, label: 'Premium', sub: 'Quality' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <item.icon className="text-secondary w-6 h-6" />
                  <div>
                    <span className="block text-sm font-bold text-primary">{item.label}</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] group">
              {/* Decorative Background */}
              <motion.div 
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent rounded-[60px] -rotate-6 scale-105 -z-10" 
              />
              
              <div className="relative h-full w-full rounded-[60px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(20,74,125,0.2)] border-[12px] border-white">
                <img
                  src={getImagePath('NatureShot.png')}
                  alt="Riva Rich Water Bottle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl z-20 border border-primary/5 hidden sm:block"
              >
                <div className="text-center">
                  <span className="block text-4xl font-black text-primary tracking-tighter">100%</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary">Pure & Safe</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
