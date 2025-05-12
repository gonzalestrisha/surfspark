import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#1ba09d]">SurfSpark</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#dc6124] transition-colors">
              Home
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#dc6124] transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#dc6124] transition-colors">
              About
            </a>
            <Button className="bg-[#dc6124] hover:bg-[#dc6124]/90 text-white">
              Sign Up for beta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#dc6124] focus:outline-none"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#dc6124] hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#dc6124] hover:bg-gray-50"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#dc6124] hover:bg-gray-50"
          >
            About
          </a>
          <div className="px-3 py-2">
            <Button className="w-full bg-[#dc6124] hover:bg-[#dc6124]/90 text-white">
              Sign Up for beta
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};