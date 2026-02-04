'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Pourquoi Nous", href: "/#features" },
    { name: "Prix", href: "/#pricing" },
    { name: "Avis", href: "/#testimonials" },
    { name: "Guides", href: "/installation" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 bg-[#0a0a0a] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-b border-white/5 ${scrolled ? 'py-3' : 'py-5'
      } px-6`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black italic transform transition-transform group-hover:rotate-12">
            I
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            ABONNEMENT <span className="text-primary italic">IPTV</span> MAROC
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="https://wa.me/212708894866"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 transform hover:scale-105 active:scale-95"
          >
            Test Gratuit 24h
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dark z-[90] transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/212708894866"
          className="bg-primary text-white px-10 py-4 rounded-full text-xl font-black shadow-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Test Gratuit 24h
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
