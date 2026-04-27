import React from 'react';
import { Droplets, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { getImagePath } from '../utils/imageHandler';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-lg">
                <img src={getImagePath('Icon.png')} alt="Riva Rich Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Riva <span className="text-secondary">Rich</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Premium packaged drinking water supplier in Pune. Committed to providing pure, safe, and mineral-rich water to every household and business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-secondary transition-colors">Our Products</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span>15/3, Gujarwadi Rd., Mangdewadi, Katraj, Pune - 411046</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span>+91 9371073525</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span>shrisamarthfoods.beverages@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <div className="text-center md:text-left">
            <p>© 2026 Riva Rich Packaged Drinking Water. All rights reserved.</p>
            <p className="mt-1 font-medium text-white/60">Developed by <a href="https://gunjawani-tech-solutions.vercel.app" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline">GTS</a></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
