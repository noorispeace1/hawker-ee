'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b-2 border-[#bf953f]/30 z-[100]">
      
      {/* --- Backgrounds --- */}
      <div className="absolute inset-0 bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a2a4a] via-[#0a0f1d] to-[#05070a]"></div>
      
      {/* --- Animated Floating Flowers (Desktop only for cleanliness) --- */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none overflow-hidden hidden md:block">
        <span className="absolute top-2 left-[15%] text-2xl animate-pulse text-[#d4af37]">✿</span>
        <span className="absolute bottom-4 left-[40%] text-xl animate-bounce text-[#d4af37]">❀</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-[110]">
        
        {/* --- Logo Section --- */}
        <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#aa771c] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(191,149,63,0.5)] group-hover:rotate-180 transition-transform duration-1000">
              <span className="text-xl md:text-2xl text-[#0a0f1d]">🌸</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#d4af37] text-xl md:text-2xl font-serif font-black tracking-tighter leading-none">
              হকার<span className="text-white">-</span>ই
            </h1>
            <span className="hidden sm:block text-[8px] uppercase tracking-[0.3em] text-gray-400 font-bold">Royal Boutique</span>
          </div>
        </Link>

        {/* --- Desktop Links (Hidden on Mobile) --- */}
        <div className="hidden md:flex items-center space-x-10">
          {['Home', 'Product', 'About'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className="text-gray-300 text-base font-medium hover:text-[#fcf6ba] transition-all duration-300 relative group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#d4af37] text-[10px]">✿</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
        </div>

        {/* --- Auth Buttons (Desktop) --- */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-[#fcf6ba] transition-colors duration-300 px-4 py-2">
            Login
          </button>
          
          <button className="group relative px-6 py-2 rounded-full overflow-hidden border border-[#bf953f] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 text-[#bf953f] group-hover:text-[#0a0f1d] font-black text-xs uppercase tracking-widest flex items-center gap-2">
              Register <span className="group-hover:rotate-45 transition-transform">❁</span>
            </span>
          </button>
        </div>

        {/* --- Mobile Hamburger Button --- */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#d4af37] relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Hamburger Lines */}
            <span className={`block w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ease-in-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-[#0a0f1d]/fb backdrop-blur-xl border-b border-[#d4af37]/20 transition-all duration-500 ease-in-out z-[90] ${
          isOpen ? 'top-full opacity-100 translate-y-0' : 'top-0 opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-8 py-10 flex flex-col space-y-6 shadow-2xl">
          {['Home', 'Product', 'About'].map((item) => (
            <Link 
              key={item} 
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-xl font-serif hover:text-[#d4af37] flex items-center justify-between border-b border-white/5 pb-2 transition-colors"
            >
              {item} <span className="text-sm opacity-50">✿</span>
            </Link>
          ))}
          
          <div className="flex flex-col space-y-4 pt-4">
            <button className="text-gray-400 font-bold text-sm uppercase tracking-widest text-center py-2 border border-gray-400/20 rounded-full">
              Login
            </button>
            <button className="bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#0a0f1d] font-black text-sm py-4 rounded-full uppercase tracking-tighter shadow-[0_0_20px_rgba(191,149,63,0.3)]">
              Register Now ❁
            </button>
          </div>
        </div>
      </div>

      {/* --- Corner Flower Ornament --- */}
      <div className="absolute -right-5 -top-5 w-24 h-24 border border-[#d4af37]/10 rounded-full flex items-center justify-center opacity-30 pointer-events-none">
        <span className="text-2xl text-[#d4af37]">✿</span>
      </div>

    </nav>
  );
};

export default Navbar;