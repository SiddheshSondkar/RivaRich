import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">Get in <span className="text-secondary">Touch</span></h2>
          <p className="text-brand-text/60 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Have a question or want to place a bulk order? Our team is here to help you with all your hydration needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Our Location', desc: '15/3, Gujarwadi Rd., Mangdewadi, Katraj, Pune - 411046' },
            { icon: Phone, title: 'Call Us', desc: '+91 9371073525', desc2: '+91 9970730730' },
            { icon: Clock, title: 'Working Hours', desc: 'Mon - Sun: 9:00 AM - 5:30 PM', desc2: '' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 group"
            >
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-primary text-xl mb-3 tracking-tight">{item.title}</h3>
              <p className="text-brand-text/50 text-sm font-medium leading-relaxed">{item.desc}</p>
              {item.desc2 && <p className="text-brand-text/50 text-sm font-medium leading-relaxed">{item.desc2}</p>}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[60px] shadow-[0_40px_100px_-15px_rgba(20,74,125,0.1)] border border-primary/5 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="Shyam Kumar"
                    className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 9371073525"
                    className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Service Area</label>
                <div className="relative">
                  <select className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none appearance-none font-medium">
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
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none resize-none font-medium"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20"
                >
                  <Send size={20} />
                  Send
                </motion.button>
                <a
                  href="https://wa.me/919371073525?text=Hello,%20I%20want%20to%20order%20Riva%20Rich%20water."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                >
                  <MessageCircle size={24} />
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[60px] overflow-hidden h-full min-h-[500px] shadow-2xl border-[12px] border-white relative bg-white"
          >
            <iframe 
              src="https://maps.google.com/maps?q=15/3,+Gujarwadi+Rd.,+Mangdewadi,+Katraj,+Pune+-+411046&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Riva Rich Location"
              className="w-full h-full absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
