import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <span className={`ml-2 font-semibold text-xl ${isScrolled ? 'text-blue-700' : 'text-blue-600'}`}>
              Bhoom
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
            >
              Process
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
            >
              Contact
            </a>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors w-full justify-center">
              Get Started
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;