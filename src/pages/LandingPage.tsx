import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs';


const getIconForNavItem = (item: string) => {
  switch (item.toLowerCase()) {
    case "inicio":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "servicios":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "sobre mí":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "testimonios":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      );
    case "contacto":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    default:
      return null;
  }
};


const heroAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const overlayVariants = {
    hidden: { opacity: 0, y: "-5%" },
    visible: { opacity: 1, y: "0%" },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i : number ) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const navItems = ["Inicio", "Sobre Mí", "Servicios", "Contacto"];

  return (
    <div className="min-h-screen bg-gray-900">
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
            <motion.div
              className="w-6 h-6 sm:w-8 sm:h-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {/* Star SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#A78BFA", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#F472B6", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
            <span className="inline">Yamid Tarot</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-white/90 hover:text-white transition-colors text-base xl:text-lg font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-4 h-4 xl:w-5 xl:h-5"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getIconForNavItem(item)}
                </motion.div>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-expanded={menuOpen}
            >
              <motion.div 
                className="w-6 h-6 relative flex justify-center items-center"
                animate={menuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="absolute h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { top: "35%", rotate: 0 },
                    open: { top: "50%", rotate: 45 }
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  style={{ top: "50%" }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { top: "65%", rotate: 0 },
                    open: { top: "50%", rotate: -45 }
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="lg:hidden fixed inset-x-0 top-[73px] bg-gray-900/95 backdrop-blur-lg z-40"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
            >
              <div className="container mx-auto px-4 py-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
                    onClick={toggleMenu}
                    custom={index}
                    variants={menuItemVariants}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5">
                        {getIconForNavItem(item)}
                      </div>
                      {item}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="tarot.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            {...heroAnimation}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Descubre tu destino
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-purple-100 mb-8 font-light leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Transforma tu vida con una lectura de tarot personalizada. Conecta con tu yo interior y desbloquea las respuestas que el universo tiene para ti.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <a
                href="https://wa.me/+573124673850?text=Hola%2C%20estoy%20interesado%20en%20reservar%20una%20lectura%20de%20tarot%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Reserva tu lectura
                </motion.button>
              </a>

              <a
                href="/grupo-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BsWhatsapp className="w-5 h-5 animate-bounce" />
                  Únete al grupo
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-300" />
              <img
                src="./yamidtarot-3.png"
                alt="Yamid Tarot"
                className="relative rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-300 w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mi enfoque espiritual
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Combinando la sabiduría ancestral del tarot con técnicas modernas de coaching,
                ofrezco una experiencia única de autodescubrimiento y crecimiento personal.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Conoce más sobre mí</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>
              </motion.button>
              </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 sm:py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiencias Transformadoras
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Lectura Premium',
                desc: 'Sesión personalizada de 90 minutos con análisis profundo de tu situación.',
                price: 'COP $25.000',
                icon: (
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )
              },
              {
                title: 'Tarot Estándar',
                desc: 'Sesión personalizada de 60 minutos para resolver tus dudas principales.',
                price: 'COP $15.000',
                icon: (
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: 'Lectura Express',
                desc: 'Sesión rápida de 3 preguntas específicas para orientación inmediata.',
                price: 'COP $12.000',
                icon: (
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all relative group overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base">
                    {service.desc}
                  </p>

                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-16 sm:py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/40 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 max-w-2xl relative z-10">
          <div className="bg-gray-800/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Inicia tu viaje
            </h2>

            <div className="text-center pb-8">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center bg-gray-900/50 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-base sm:text-lg text-purple-200 font-medium">
                  Esta sección está en construcción. ¡Próximamente!{" "}
                  <a 
                    href="#inicio" 
                    className="underline hover:text-purple-400 transition-colors"
                  >
                    Contáctame
                  </a>
                </p>
              </div>
            </div>

            <form className="space-y-4 sm:space-y-6 opacity-50 pointer-events-none">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white"
                  disabled
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white"
                  disabled
                />
                <textarea
                  rows={4}
                  placeholder="Tu mensaje..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white resize-none"
                  disabled
                />
              </div>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled
              >
                Enviar mensaje
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {['instagram', 'facebook', 'tiktok'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social}</span>
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-lg border border-white/10 group-hover:border-purple-500/50 transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {social === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                      {social === 'facebook' && (
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      )}
                      {social === 'tiktok' && (
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      )}
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Yamid Tarot
              </span>
              . Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

