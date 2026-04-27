import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Droplets, Shield, Sparkles } from 'lucide-react';
import { getImagePath } from '../utils/imageHandler';

const About = () => {
  const steps = [
    {
      title: 'RO Purification',
      desc: 'Reverse Osmosis removes dissolved impurities and contaminants.',
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: 'UV Treatment',
      desc: 'Ultraviolet rays eliminate bacteria and viruses effectively.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Ozonation',
      desc: 'Final stage of disinfection to ensure long-lasting freshness.',
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-[10px] border-white">
              <img
                src={getImagePath('plant.jpg')}
                alt="Water Purification Plant"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl z-20 max-w-[280px] border border-primary/5 hidden md:block"
            >
              <p className="text-secondary font-black text-xl mb-3 tracking-tight">Est. 2012</p>
              <p className="text-sm text-brand-text/50 leading-relaxed font-medium">
                Our state-of-the-art plant in Pune follows strict FSSAI & BIS standards for your safety.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
              The Riva Rich <br />
              <span className="text-secondary italic font-serif">Promise of Purity</span>
            </h2>
            <p className="text-brand-text/60 mb-10 leading-relaxed text-lg font-medium">
              At Riva Rich, we believe that pure water is the foundation of a healthy life. Established in 2012 in Pune, our mission is to provide premium quality drinking water that is both safe and refreshing.
            </p>

            <div className="space-y-10 mb-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-lg shadow-primary/5 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-brand-text/50 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary/5">
              {[
                'BIS Certified', 'FSSAI Approved', 'Mineral Balanced', 'Lab Tested'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-500/10 p-1 rounded-full">
                    <CheckCircle2 className="text-green-500 w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-primary/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
