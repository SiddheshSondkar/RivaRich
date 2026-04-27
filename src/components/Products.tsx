import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ShoppingCart } from 'lucide-react';


const products = [
  {
    id: 1,
    name: '250 ml Bottle',
    size: '250ml',
    description: 'Perfect for events, meetings, and quick hydration.',
    image: '/images/250ml.png',
    price: 'Inquire Price',
  },
  {
    id: 2,
    name: '500 ml Bottle',
    size: '500ml',
    description: 'The classic choice for travel and daily commute.',
    image: '/images/500ml.png',
    price: 'Inquire Price',
  },
  {
    id: 3,
    name: '1 Litre Bottle',
    size: '1L',
    description: 'Standard size for home, office, and dining.',
    image: '/images/1ltr.png',
    price: 'Inquire Price',
  },
  {
    id: 4,
    name: '20 Litre Jar',
    size: '20L',
    description: 'The ultimate solution for home and office supply.',
    image: '/images/20ltrjar.png',
    price: 'Inquire Price',
  },
  {
    id: 5,
    name: 'Custom Labeled Bottles',
    size: 'All Sizes',
    description: 'The ultimate solution for Your Business.',
    image: '/images/customlabeled.png',
    price: 'Inquire Price',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-light to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight"
          >
            Our <span className="text-secondary">Premium</span> Range
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/60 max-w-2xl mx-auto text-lg"
          >
            Discover the perfect size for your hydration needs. From personal bottles to bulk office supplies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-[40px] overflow-hidden border border-primary/5 hover:border-secondary/20 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-15px_rgba(20,74,125,0.1)] transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden m-4 rounded-[32px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{product.price}</span>
                </div>
              </div>
              
              <div className="p-10 pt-4 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-primary tracking-tight">{product.name}</h3>
                  <span className="bg-brand-light text-secondary text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-wider">
                    {product.size}
                  </span>
                </div>
                <p className="text-brand-text/60 text-sm mb-8 leading-relaxed font-medium">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/919371073525?text=Hello,%20I%20want%20to%20order%20Riva%20Rich%20${product.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-light text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                  >
                    <MessageCircle size={20} className="group-hover/btn:scale-110 transition-transform" />
                    Order on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-brand-light p-4 pr-10 rounded-[32px] border border-primary/5">
            <div className="bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/20">
              <ShoppingCart size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-primary">Need bulk supply for your office or event?</p>
              <p className="text-xs text-brand-text/50 font-medium">Get customized pricing and scheduled deliveries.</p>
            </div>
            <a href="#contact" className="text-secondary font-bold text-sm hover:underline ml-auto">Contact Sales &rarr;</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
