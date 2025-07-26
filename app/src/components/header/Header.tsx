// src/components/header/Header.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../nav/NavItem';
import { uiElements, interactive } from '../../animations/variants';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

const navItems = ["Inicio", "Sobre Mí", "Servicios", "Contacto"]; // mismo orden que tu código

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isVisible = useScrollVisibility();
  const toggleMenu = () => setMenuOpen((p) => !p);

  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg bg-opacity-90 border-b border-white/10 shadow-xl"
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline">Yamid Tarot</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
          {navItems.map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </nav>

        {/* Mobile button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-expanded={menuOpen}
          >
            <motion.div className="w-6 h-6 relative flex justify-center items-center" animate={menuOpen ? "open" : "closed"}>
              <motion.span className="absolute h-0.5 w-full bg-white rounded-full" variants={{ closed: { top: "25%", rotate: 0 }, open: { top: "50%", rotate: 45 } }} />
              <motion.span className="absolute h-0.5 w-full bg-white rounded-full" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} style={{ top: "50%" }} />
              <motion.span className="absolute h-0.5 w-full bg-white rounded-full" variants={{ closed: { top: "75%", rotate: 0 }, open: { top: "50%", rotate: -45 } }} />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="lg:hidden fixed inset-x-0 top-[73px] bg-gray-900/95 backdrop-blur-lg z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={uiElements.overlay}
          >
            <div className="container mx-auto px-4 py-6">
              {navItems.map((item, index) => (
                <motion.div key={item} custom={index} variants={interactive.menuItem}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5">{/* Icono */}</div>
                      {item}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
