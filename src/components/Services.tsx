import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, CalendarDays, Truck, Clock, CreditCard } from 'lucide-react';

const services = [
  {
    title: 'Home Delivery',
    desc: 'Regular supply of 20L jars and bottles for your family.',
    icon: <Home className="w-8 h-8" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Office Supply',
    desc: 'Reliable water solutions for corporate offices and shops.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'bg-indigo-50',
  },
  {
    title: 'Emergency Delivery',
    desc: 'Quick support when you need water the most. (Subject to availability)',
    icon: <Truck className="w-8 h-8" />,
    color: 'bg-green-50',
  },
  {
    title: 'Monthly Subscriptions',
    desc: 'Hassle-free monthly plans with scheduled deliveries.',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'bg-cyan-50',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-brand-light to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight"
            >
              Our <span className="text-secondary">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-text/60 text-lg font-medium"
            >
              We provide comprehensive water delivery solutions across Pune, ensuring you never run out of pure hydration.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-brand-light px-8 py-4 rounded-2xl border border-primary/5 shadow-xl shadow-primary/5"
          >
            <Clock className="text-secondary w-6 h-6" />
            <span className="text-sm font-black text-primary uppercase tracking-wider">Same Day Delivery</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-white border border-primary/5 hover:border-secondary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] -z-10 group-hover:bg-secondary/10 transition-colors" />
              
              <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/5`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{service.title}</h3>
              <p className="text-brand-text/50 text-sm leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>
              <div className="flex items-center gap-3 text-secondary font-black text-[10px] uppercase tracking-[0.2em]">
                <Truck size={16} />
                <span>Free Delivery*</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-primary rounded-[60px] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/30"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to start your subscription?</h3>
              <p className="text-white/70 text-lg font-medium">Get exclusive discounts on monthly water jar plans and priority delivery.</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919371073525?text=I'm%20interested%20in%20a%20monthly%20subscription."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-12 py-6 rounded-3xl font-black text-lg hover:bg-brand-light transition-all shadow-2xl"
            >
              View Plans &rarr;
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
