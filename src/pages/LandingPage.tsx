import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const cardVariants = {
  hover: { y: -10, scale: 1.02 },
  tap: { scale: 0.98 },
};

const LandingPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const overlayVariants = {
    hidden: { opacity: 0, y: "-5%" },
    visible: { opacity: 1, y: "0%" },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const navItems = ["Inicio", "Sobre Mí", "Servicios", "Contacto"];

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg bg-opacity-90 border-b border-white/10 shadow-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo con efecto neón y animación */}
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-8 h-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
            Yamid Tarot
          </motion.div>

          {/* Menú desktop con íconos relacionados */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item: string) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-white/90 hover:text-white transition-colors text-lg font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Ícono relacionado */}
                <motion.div
                  className="w-5 h-5"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getIconForNavItem(item)}
                </motion.div>
                {item}
                {/* Subrayado animado */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Botón menú móvil con ícono animado */}
          <div className="md:hidden flex items-center bg-gray-900 rounded-md border-[1px] border-[#333] hover:border-[#FC739C] transition-colors">
            <button
              onClick={toggleMenu}
              className="p-5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-expanded={menuOpen}
              title={menuOpen ? "Haz click aquí para cerrar el menú" : "Haz click aquí para abrir menú"}
            >
              <motion.div className="w-6 h-6 relative flex justify-center items-center" animate={menuOpen ? "open" : "closed"}>
                <motion.span
                  className="block absolute h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { y: -6, rotate: 0 },
                    open: { y: 0, rotate: 45 },
                  }}
                />
                <motion.span
                  className="block absolute h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                />
                <motion.span
                  className="block absolute h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { y: 6, rotate: 0 },
                    open: { y: 0, rotate: -45 },
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Overlay menú móvil con íconos relacionados */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="md:hidden inset-0 bg-gray-900/80 backdrop-blur-lg z-60 flex flex-col items-center justify-center space-y-6 py-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item: string, index: number) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-2xl font-semibold text-white relative py-2 px-6 flex items-center gap-3 group"
                  onClick={toggleMenu}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Ícono relacionado */}
                  <motion.div
                    className="w-6 h-6"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getIconForNavItem(item)}
                  </motion.div>
                  <span className="relative z-10">{item}</span>
                  {/* Fondo gradiente animado */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full scale-0 opacity-0"
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Sección Hero con parallax effect */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/05/10/22/41/galaxy-5155754_1280.jpg)' }}
      >
        {/* Overlay con gradiente sutil y animado */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-purple-900/50 to-transparent animate-gradient-shift" />

        {/* Contenido principal */}
        <motion.div
          className="relative z-10 text-center px-4"
          {...heroAnimation}
        >
          {/* Título principal con animación de texto y gradiente dinámico */}
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold my-6 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent animate-text-glow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Descubre tu destino
          </motion.h1>

          {/* Subtítulo con copywriting persuasivo y animación */}
          <motion.p
            className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Transforma tu vida con una lectura de tarot personalizada. Conecta con tu yo interior y desbloquea las respuestas que el universo tiene para ti.
          </motion.p>

          {/* Botón con animación y microinteracciones */}
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(192, 132, 252, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-bounce"
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
              Reserva tu lectura ahora
            </span>
          </motion.button>
        </motion.div>

        {/* Efecto de partículas sutiles para dar profundidad */}
        <div className="absolute inset-0 z-0">
          <div className="particles">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Mí con diseño split-screen */}
      <section id="sobre-mí" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition" />
            <img
              src="./yamidtarot-3.png"
              alt="Yamid Tarot"
              style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
              className="rounded-3xl transform rotate-3 group-hover:rotate-0 transition"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mi enfoque espiritual
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Combinando la sabiduría ancestral del tarot con técnicas modernas de coaching,
              ofrezco una experiencia única de autodescubrimiento y crecimiento personal.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios con cards interactivas */}
      <section id="servicios" className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiencias Transformadoras
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Lectura Premium', desc: 'Sesión personalizada de 90 minutos', price: 'COP $25.000' },
              { title: 'Tarot Terapéutico', desc: 'Integración con psicología moderna', price: 'COP $15.000' },
              { title: 'Lectura Express',desc:'3 preguntas concretas', price: 'COP $10.000' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all relative group"
                whileHover="hover"
                variants={cardVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto con glassmorphism */}
      <section id="contacto" className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dotnoise-light-grey.png')]" />
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gray-800/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Inicia tu viaje
            </h2>
            <form className="space-y-6">
              <div className="space-y-4 text-white">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                />
                <textarea
                  rows={5}
                  placeholder="Tu mensaje..."
                  className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                />
              </div>
              <motion.button
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl transition-all hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar mensaje
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer con socials */}
      <footer className="py-12 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {['instagram', 'facebook', 'tiktok'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                <span className="sr-only">{social}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Iconos de redes sociales aquí */}
                </svg>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Yamid Tarot. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
