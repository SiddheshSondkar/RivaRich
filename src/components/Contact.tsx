import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Get in <span className="text-secondary">Touch</span></h2>
            <p className="text-brand-text/60 mb-12 leading-relaxed text-lg font-medium">
              Have a question or want to place a bulk order? Our team is here to help you with all your hydration needs.
            </p>

            <div className="space-y-10">
              {[
                { icon: MapPin, title: 'Our Location', desc: 'Shop No. 12, Riva Rich Plaza, Near Main Road, Pune, Maharashtra 411001' },
                { icon: Phone, title: 'Call Us', desc: '+91 98765 43210', desc2: '+91 91234 56789' },
                { icon: Clock, title: 'Working Hours', desc: 'Mon - Sat: 8:00 AM - 8:00 PM', desc2: 'Sun: 9:00 AM - 2:00 PM' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-secondary shadow-xl shadow-primary/5 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-brand-text/50 text-sm font-medium leading-relaxed">{item.desc}</p>
                    {item.desc2 && <p className="text-brand-text/50 text-sm font-medium leading-relaxed">{item.desc2}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex gap-6"
            >
              <a
                href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20order%20Riva%20Rich%20water."
                className="bg-green-500 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-4 hover:bg-green-600 transition-all shadow-2xl shadow-green-500/20"
              >
                <MessageCircle size={24} />
                Order on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 rounded-[60px] shadow-[0_40px_100px_-15px_rgba(20,74,125,0.1)] border border-primary/5"
          >
            <h3 className="text-3xl font-bold text-primary mb-10 tracking-tight">Send us a Message</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-brand-light border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-brand-light border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Service Area</label>
                <div className="relative">
                  <select className="w-full bg-brand-light border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none appearance-none font-medium">
                    <option>Select your area in Pune</option>
                    <option>Baner / Balewadi</option>
                    <option>Hinjewadi</option>
                    <option>Kothrud</option>
                    <option>Viman Nagar</option>
                    <option>Wakad</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <Send size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-brand-light border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none resize-none font-medium"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:bg-secondary transition-all shadow-2xl shadow-primary/20"
              >
                <Send size={24} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[60px] overflow-hidden h-[500px] shadow-2xl border-[12px] border-white relative group"
        >
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-center group-hover:scale-110 transition-transform duration-700">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6">
                <MapPin size={48} className="text-primary animate-bounce" />
              </div>
              <p className="text-2xl font-black text-primary tracking-tight">Serving all major areas in Pune</p>
              <p className="text-brand-text/40 font-bold mt-2">Baner • Hinjewadi • Kothrud • Wakad • Viman Nagar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
