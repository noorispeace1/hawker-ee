"use client";

import { motion } from "framer-motion";
// React Icons import kora hoyeche
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt 
} from "react-icons/fa"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif italic text-white tracking-wider">
              Artisanal<span className="text-amber-500 font-sans not-italic font-bold">Crafts</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Celebrating the soul of Bangladeshi heritage through handcrafted masterpieces. 
              Every product is a story of tradition, passion, and local craftsmanship.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, color: "#f59e0b" }}
                  className="bg-slate-800 p-2.5 rounded-full transition-colors flex items-center justify-center"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Shop Collection</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Bangle Sets</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terracotta Necklaces</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Velvet Studs</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Limited Edition</a></li>
            </ul>
          </div>

          {/* About & Support */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Our Story</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Our Artisans</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt size={16} className="text-amber-500 shrink-0 mt-1" />
                <span>Dhaka, Bangladesh - Handcrafted with Love</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt size={16} className="text-amber-500 shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope size={16} className="text-amber-500 shrink-0" />
                <span>hello@artisanalcrafts.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase font-semibold">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} Artisanal Crafts. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-slate-500">Made by</span>
            <span className="text-amber-500 italic font-serif text-sm lowercase">local hands</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;