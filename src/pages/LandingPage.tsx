import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menu } from 'framer-motion/client';

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
          {/* Logo con efecto neón */}
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Yamid Tarot
          </motion.div>

          {/* Menú desktop */}
          <nav className='hidden top-[100%] flex space-x-8 items-center md:flex'>
              {navItems.map((item: string) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative text-white/90 hover:text-white transition-colors text-lg font-medium group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
                </motion.a>
              ))}
          </nav>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center bg-gray-900 rounded-md border-[1px] border-[#333] hover:border-[#FC739C] transition-colors">
            <button
              onClick={toggleMenu}
              className="p-5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <motion.div className="w-6 h-6 relative flex justify-center items-center right-[5%] top-[50%]" animate={menuOpen ? "open" : "closed"}>
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

        {/* Overlay menú móvil */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="md:hidden inset-0 bg-gray-900/80 backdrop-blur-lg z-60 flex flex-col items-center justify-center space-y-6"
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
                  className="text-2xl font-semibold text-white relative py-2 px-6"
                  onClick={toggleMenu}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05, color: '#FF6B6B' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item}</span>
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
        className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/10/16/11/40/tarot-991041_1280.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-purple-900/50" />
        <motion.div className="relative z-10 text-center px-4" {...heroAnimation}>
          <h1 className="text-6xl md:text-8xl font-extrabold my-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Revela tu camino
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Conexión espiritual a través del tarot con un enfoque contemporáneo
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
          >
            Agenda tu lectura
          </motion.button>
        </motion.div>
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
